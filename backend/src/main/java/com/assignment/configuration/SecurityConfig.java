package com.assignment.configuration;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.crypto.password.Pbkdf2PasswordEncoder;

import com.assignment.security.JwtConfigurer;
import com.assignment.security.JwtTokenProvider;

import lombok.RequiredArgsConstructor;

@Configuration
@RequiredArgsConstructor
public class SecurityConfig extends WebSecurityConfigurerAdapter {

	private static final String AUTH_LOGIN = "/auth/login";
	private static final String REGISTER_MANAGER = "/register/registerManager";
	
	 /**
     * The jwt token provider.
     */
    private final JwtTokenProvider jwtTokenProvider;

    /**
     * Password hash secret.
     */
    @Value("${security.secret.pbkdf2}")
    private String pbkdf2Secret;

    @Override
    protected void configure(HttpSecurity http) throws Exception {
    	//allow-cross-origins
    	http.cors();
    	
        http.csrf().disable();

        http.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);

        // URL authorization settings.
        http.authorizeRequests()
                .antMatchers(HttpMethod.POST, AUTH_LOGIN).permitAll()
                .antMatchers(HttpMethod.POST, REGISTER_MANAGER).permitAll()
                .anyRequest().authenticated();

        // Setup JWT authentication filter.
        http.apply(new JwtConfigurer(jwtTokenProvider));
    }

    /**
     * The password encoder bean.
     *
     * @return the password encoder.
     */
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new Pbkdf2PasswordEncoder(pbkdf2Secret);
    }
}
