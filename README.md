# AngualrDeploymentProject

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

FYR: https://angular.io/guide/build#proxying-to-a-backend-server

## Proxying to a backend server

1. Create a file proxy.conf.json in your project's src/ folder.

2. Add the following content to the new proxy file:

```
{
  "/api": {
    "target": "http://localhost:3000",
    "secure": false
  }
}
```

3. In the CLI configuration file, angular.json, add the proxyConfig option to the serve target:

```
...
"architect": {
  "serve": {
    "builder": "@angular-devkit/build-angular:dev-server",
    "options": {
      "browserTarget": "your-application-name:build",
      "proxyConfig": "src/proxy.conf.json"
    },
...
```
4. To run the dev server with this proxy configuration, call ng serve.

FYR:https://itnext.io/multi-environment-setup-for-your-angular-app-a211d72f1ff1


## Dockerize
To build image using the development environment:
```
docker build -t my-angular-project:dev --build-arg configuration="dev" .
```
To Run image using the development environment:
```
docker run -d -p 80:80 --name my-angular-project-dev my-angular-project:dev
```

To build image using the uat environment:
```
docker build -t my-angular-project:uat --build-arg configuration="uat" .
```
To Run image using the uat environment:
```
docker run -d -p 8081:80 --name my-angular-project-uat my-angular-project:uat
```


To build image using the production environment:
```
docker build -t my-angular-project:prod .
```
To Run image using the production environment:
```
docker run -d -p 80:80 --name my-angular-project-prod my-angular-project:prod
```