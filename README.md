# My Recipe Book

Simple recipe book frontend app with NGRX state managment.
This solutions consist of a Angular frontend application and a mock REST API using https://github.com/typicode/json-server.

# Roles

| Name                 | Role      | Development focus   |
| -------------------- | --------- | ------------------- |
| Gjorgji Dimchikovski | Developer | Frontend && Backend |

## Prerequisites:

- Angular CLI
- NodeJS / npm
- json-server

## Getting started

- For the mock backend you should run the 'server.json' file with command: json-server server.json
- Frontend application guidliness found in the client folder README.md

# Coding guidelines

- Do read and follow [Angular style guidelines](https://angular.io/guide/styleguide).
- Do follow structure and recommendations from [Ngrx](https://ngrx.io/docs).
- Do split components into presentational and container components.
  - Keep no or minimal layout and style in the container template.
  - Presentational only communicates via `@Input` and `@Output` . Observables are not allowed.
- Avoid manually subscribing to observables. If un-avoidable, use pattern to unsubscribe:
  Typescript
  componentActive = true;

  ngOnDestroy(): void {
  this.componentActive = false;
  }

  this.store.pipe(
  select(fromRecipe.getRecipeList),
  takeWhile(() => this.componentActive)
  )
  .subscribe(...);

  # Folder structure in feature modules

  | Folder name | Description                                                              |
  | ----------- | ------------------------------------------------------------------------ |
  | actions     | Redux action services.                                                   |
  | components  | Presentational components in subfolders with `@Input()` and `@Output()`. |
  | containers  | Other components in subfolders.                                          |
  | effects     | Ngrx effects services.                                                   |
  | models      | Model classes and enums.                                                 |
  | pipes       | Angular pipes.                                                           |
  | reducers    | Redux reducers.                                                          |
