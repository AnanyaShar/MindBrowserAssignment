package com.assignment.security;

import java.security.Key;
import java.time.Duration;
import java.util.Base64;
import java.util.Date;
import java.util.Map;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.stereotype.Component;

import com.assignment.entity.User;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import lombok.Setter;
import lombok.extern.slf4j.Slf4j;

@Setter
@Component
@Slf4j
public class JwtTokenProvider {

    private static final String PREFIX = "bearer ";

    @Value("${security.secret.jwt}")
    private String jwtSecretBase64Encoded;

    @Value("${security.jwt.valid.duration}")
    private Duration jwtValidDuration;

    public String generateToken(User user) {
        Date iat = new Date();
        return Jwts.builder()
                .setSubject(user.getEmail())
                .setIssuedAt(iat)
                .setExpiration(new Date(iat.getTime() + jwtValidDuration.toMillis()))
                .addClaims(Map.of("role", user.getRole().toString(), "managerId", user.getId()))
                .signWith(getSecretKey(), SignatureAlgorithm.HS256)
                .compact();
    }

    public String resolveToken(HttpServletRequest request) {
        String authHeader = request.getHeader("Authorization");
        log.info("Checking Autentication");
        if (authHeader != null && authHeader.toLowerCase().startsWith(PREFIX)) {
            return authHeader.substring(7);
        }
        return null;
    }

    public boolean validateToken(String token) {
        try {
            Jws<Claims> claims = Jwts.parserBuilder().setSigningKey(getSecretKey()).build().parseClaimsJws(token);
            return !claims.getBody().getExpiration().before(new Date());
        } catch (JwtException | IllegalArgumentException e) {
            return false;
        }
    }

    public Authentication getAuthentication(String token) {
        Jws<Claims> claims = Jwts.parserBuilder().setSigningKey(getSecretKey()).build().parseClaimsJws(token);
        return new UsernamePasswordAuthenticationToken(claims.getBody(), "",
                Stream.of(claims.getBody().get("role", String.class))
                        .map(r -> "ROLE_" + r)
                        .map(SimpleGrantedAuthority::new)
                        .collect(Collectors.toList()));
    }

    private Key getSecretKey() {
        return Keys.hmacShaKeyFor(Base64.getDecoder().decode(jwtSecretBase64Encoded));
    }
}
