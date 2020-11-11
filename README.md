# Fantasy Football

- Aim of this is project is to create a fantasy football app to display info from the Premier league

# Technologies/Libraries Used
`Typescript, React, Lerna, Cypress, Percy, Eslint, Travis, Heroku, Storybook, Node, Express, Docker`

# Goals

Pretty open-ended but simply

- Implement front end with the latest and greatest `React/Typescript` (Hooks, Context, etc) .
- Structure and organize project `Lerna/Eslint/Prettier`
- Implement backend with `GraphQL` to store some data (i.e fav player)
- Deploy app with CI/CD, in this case Dockerize -> Test (`Cypress`) -> Deploy (`Travis/Heroku`)

#Notes
Using `Lerna` to manage monorepo structure which is split into `frontend` and `backend`.

Currently frontend comprises `React` app which has some basic filtering for displaying data from public ff api. Also using `Storybook` to create components in isolation.

Testing frontend with `Cypress`, have created separate package for tests and `Dockerfile.tests` for testing service in `docker-compose.yml`, visual regression with `Percy`

Backend is just a simple express app acts as a proxy for the frontend to retrieve ff info and player images. It also serves static frontend from build step

CI/CD is with `Travis` which takes care of build -> container -> test -> deploy 

Hosting is `Heroku`

# Roadmap

1 - Create frontemd app (_React, Typescript, ~~Redux~~_) to display retrieve and display info from FF api . [DONE]  
2 - Dockerize simple react app . [DONE]  
3 - Implement CD/CI pipeline Travis CI, Heroku . [DONE]   
4 - Implement backend (_express server, postgresql, graphql_)  
~~5 - Implement machine learning app and train on data from backend, also add to CD/Ci pipeline .  
6 - Display data from backend (_Kubernetes_)~~
(Original was going to do some machine learning but...maybe in the future)  
5 - Improve functionality of frontend (track players, user profiles)  
6 - Backend to save data from frontend
  

