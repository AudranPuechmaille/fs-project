# Étape de construction
FROM openjdk:17-jdk-alpine AS build
WORKDIR /app
COPY target/demo-0.0.1-SNAPSHOT.jar demo.jar

# Étape d'exécution
FROM openjdk:17-jdk-alpine
COPY --from=build /app/demo.jar /demo.jar
ENTRYPOINT ["java", "-jar", "/demo.jar"]

