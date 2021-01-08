# MindBrowserAssignment

## Requirements

### Backend
1. Java 11
2. Spring 2.4.1

### Frontend
- Create React App
- React 16
- Redux
- React Bootstrap
- Axios
- React Router

## [Backend] Building executable jar

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

## Two containers will be started: API server, database.
1. API server address: localhost:8080 (can be configured in application-properties)
2. Database address: localhost:5432, user: postgres, password: Ananya (database used postgres)

## API Environment Variables
1. spring.datasource.url - database jdbc url, required. e.g. jdbc:postgresql://db:5432/company
2. spring.datasource.username - database username, required.
3. spring.datasource.password - database password, required.
4. spring.datasource.driver-class-name - database driver class name, required. e.g. org.postgresql.Driver
5. PASSWORD_HASH_SECRET - Password hash secret, default: change-this-secret
6. JWT_SECRET - JWT token signing key, base64 encoded string, should be at least 256 bits, default: xZNEEuk91OgleeDllowBLt0F48HPVh/zfRoXsRgB0Lc=
7. JWT_VALID_DURATION - JWT token expiry time, see java.time.Duration.parse for the format. default: PT24H
8. PASSWORD_POLICY - Password policy YAML resource location, will be resolved to a spring resource, default: classpath:/password-validation-policy.yaml
9. spring.profiles.active=dev (environment to run default: dev for production choose prod)
10. spring.jpa.hibernate.ddl-auto=create-drop (automatically delete and create database schema everytime the application runs)

## Password policy configuration

It's using the passay library for validating passwords. Currently, the code only supports a subset of the rules available:
1. Length - min and max lengths
2. AllowedCharacter - allowed characters in password
3. Username - password should not contain the username (email)
4. NoWhitespace - password should not contain white spaces
5. Dictionary - password should not be any of the words

Extending the rules should be straightforward (see com.assignment.security.PasswordValidationPolicy).

## [Frontend] Start the React App

1. In the frontend directory, hit `npm install`
2. After installing all the packages and dependencies, hit `npm start`

### Application will be running on port 3000 by default

### Note: If backend APIs are not executing on 8080, make sure to update the port on frontend, at frontend/src/utils/service.js

## Verification of Assignment

1. Create initial manager (Post, 'http://localhost:8080/register/registerManager') //use this manager credential for login
2. Login (Post, http://localhost:8080/auth/login)

Please find postman collection and schema sql file in docs folder.
Frontend Screen can be found in docs.




