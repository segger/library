## Library

A place for my books.

Spring-boot application servering rest-api to angular webapp.

### Quick commands
```
src/main/webapp$ yarn build                                         # build angular app
$ mvn clean install spring-boot:run -Dspring.profiles.active=local  # start spring-boot server
```

#### Prerequisits

Database
- Create MySQL database `library` with table `books` consisting of `id`, `title` and `author`
- Create database user

Application
- Add application settings in `application.yaml`
  * Current default profile needs `DB_HOST`, `DB_USER` and `DB_PASSWORD`
  * The `local` profile expects `localhost`, `user` and `password`

Angular webapp
- Setup: `src/main/webapp$ yarn install`
- Build: `src/main/webapp$ yarn build`

Start
- Copy built angular resources: `mvn validate`
- Build and start spring-boot application: `mvn install spring-boot:run`

View the result at `localhost:8080`

During development can webpack-dev-server be used at port 9000 with `yarn serve`

#### Stuff I used

- java 7
- angular 1.6
  * es6

spring-boot
- spring-boot-starter-data-rest
- spring-boot-starter-security
- spring-boot-starter-data-jpa

tools and other choices
- maven
- yaml
- yarn
- webpack

#### Todo
So much left...