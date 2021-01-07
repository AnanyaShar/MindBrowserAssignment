# MindBrowserAssignment

## Requirements
1. Java 11
2. Spring 2.4.1

## Building executable jar

### Run the following command to build the project:
./mvnw package

or
./mvnw.cmd package

or
mvn spring-boot:run (on maven)

or
Using and IDE(eclipse, etc.) 
1. RunAs -> Maven Build
2. RunAs -> Java Application

An executable jar (developer-portal-api-0.0.1-SNAPSHOT.jar) will be built in target directory.

Running the jar (Note it requires several environment variables to start successfully):
java -jar target/developer-portal-pai-0.0.1-SNAPSHOT.jar

# Two containers will be started: API server, database.
1. API server address: localhost:8080 (can be configured in application-properties)
2. Database address: localhost:5432, user: postgres, password: Ananya (database used postgres)

## API Environment Variables
• spring.datasource.url - database jdbc url, required. e.g. jdbc:postgresql://db:5432/company
• spring.datasource.username - database username, required.
• spring.datasource.username - database password, required.
• spring.datasource.driver-class-name - database driver class name, required. e.g. org.postgresql.Driver
• PASSWORD_HASH_SECRET - Password hash secret, default: change-this-secret
• JWT_SECRET - JWT token signing key, base64 encoded string, should be at least 256 bits, default: xZNEEuk91OgleeDllowBLt0F48HPVh/zfRoXsRgB0Lc=
• JWT_VALID_DURATION - JWT token expiry time, see java.time.Duration.parse for the format. default: PT24H
• PASSWORD_POLICY - Password policy YAML resource location, will be resolved to a spring resource, default: classpath:/password-validation-policy.yaml
• spring.profiles.active=dev (environment to run default: dev for production choose prod)
• spring.jpa.hibernate.ddl-auto=create-drop (automatically delete and create database schema everytime the application runs)

## Password policy configuration

It's using the passay library for validating passwords. Currently, the code only supports a subset of the rules available:
•Length - min and max lengths
•AllowedCharacter - allowed characters in password
•Username - password should not contain the username (email)
•NoWhitespace - password should not contain white spaces
•Dictionary - password should not be any of the words

Extending the rules should be straightforward (see com.assignment.security.PasswordValidationPolicy).

## Verification of Assignment

1. Create initial manager (Post, 'http://localhost:8080/register/registerManager') //use this manager credential for login
2. Login (Post, http://localhost:8080/auth/login)

Please find postman collection and schema sql file in docs folder.
Frontend Screen can be found in docs.




