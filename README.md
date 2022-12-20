# Birdie Developer Test

We would like to thank you for taking our developer test. We understand that candidates will often have many of these tests to complete, therefore we think it's important to cut straight to the important stuff.

## About this repository

We've gone ahead and created a boilerplate that mostly corresponds to the technical stack we use at Birdie. The `backend/` is a barebone Express server and the `frontend/` has been generated with `npx create-react-app frontend --template typescript`. This saves you from having to create boilerplate code, but you are free to decide to use only parts of it, for example:

- If you want to use Redux, you can use `npx create-react-app frontend --template redux` or `npx create-react-app frontend --template redux-typescript`.

You are also free to make other technical choices, for example:

- Use Redux Thunk, Redux Observables, Redux Saga...
- Use Express, NestJS, Loopback...
- PostgreSQL, MySQL...

Although we do encourage you to be pragmatic and prioritise delivering value over fine-tuning your technical stack.

## Context

At Birdie, our app allows care givers to record observations of older adults receiving care, we name them **care recipients**.

These could be anything from the recording of their mood (happy, sad, bored, confused) to what they drank today (1 pint of water).

Each of these observations are recorded as events in our database. Here's an example of a mood observation recorded
in this event format:

``` json
{
   "id":"decaa026-2ce5-49cb-aff9-92326b85a98c",
   "event_type":"mood_observation",
   "visit_id":"39b94aab-cc35-4874-807f-c23472aec663",
   "timestamp":"2019-04-23T10:53:13+01:00",
   "caregiver_id":"4786d616-259e-4d52-80f7-8cf7dc6d881a",
   "care_recipient_id":"03f3306d-a4a3-4179-ab88-81af66df8b7c",
   "mood":"okay",
},
```

Here's a quick explanation of the base properties:

- `id`: Uniquely identifies the observation.
- `event_type`: Title we use to categorise our events.
- `visit_id`: Observations are traditionally observed during a visit between the caregiver (carer) and care recipient. This ID identifies that visit.
- `caregiver_id`: Identifies who the caregiver (carer) was that made this observation.
- `care_recipient_id`: Identifies the care recipient this observation is for.

On top of that, there can be **additional properties** based on the `event_type`:

- `mood` describes the mood of the care recipient as reported by the caregiver

The database (we should have sent you credentials) contains some of these observation events, within the `events` table.

## Challenge

*Display the information to a family member*

#### Your challenge is to clone this repository and create a small web application to visualize these observations, so that looking at it is valuable to a family member of this care recipient

This could mean presenting it in the following forms:

- A table
- A graph
- A timeline

 Or any other way/combination of those. We are test driven here at Birdie so please make sure you write tests to validate your work.

## Deliverables

- Put your code on Github and send us the link to the repository
- Deploying the code to a platform like [Heroku](https://heroku.com) is a great plus.
- **If you are unable to deploy your code please send a recording of the application working**

# Challenge Solution and Explanation

## Deployments
The application was deployed to AWS on the following domains:

1. Front end: http://birdie.front.aelbougha.online/
2. Back end: http://birdie.aelbougha.online/
## Postman Collection
You can find a Postman collection [here](https://documenter.getpostman.com/view/1490807/2s8Z6sbGA1)
## Set up
Here's the technical stack that I used while working on the challenge:
### Front end

- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/introduction/getting-started)
- [TypeScript](https://www.typescriptlang.org/)
- [Redux sagas](https://redux-saga.js.org/docs/introduction/BeginnerTutorial.html)
- [Styled components](https://www.styled-components.com/)
- [Jest](https://jestjs.io/)
- [ESLint](https://eslint.org/)

### Back end

- [Express](https://expressjs.com/)
- [Sequelize](https://sequelize.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Jest](https://jestjs.io/)
- [ESLint](https://eslint.org/)
## Usage

1. Start the API. (Run the following commands within the `backend` folder)

   a. copy env.example to .env and change the values of database variables inside
   b. Install the dependencies
   ```bash
   yarn install
   ```
   c. Linting (Run the following command within the `backend` folder)
   ```bash
   yarn lint
   ```
   d. Unit tests (Run the following command within the `backend` folder)
   ```bash
   yarn test:unit
   ```
   e. Integration tests (Run the following command within the `backend` folder)
   ```bash
   yarn test:integration
   ```
   f. Run the HTTP server (will start on port `8000`)
   ```bash
   yarn dev
   ```

2. Start the React app  (Run the following commands within the `front-end` folder)
    a. copy env.example to .env and change the values of backend domain variable inside
    b. Install the dependencies
   ```bash
   yarn install
   ```
    c. Run the following command within the `frontend` folder
   ```bash
   yarn lint
   ```
    d. Unit and snapshot tests (Run the following command within the `frontend` folder)
   ```bash
   yarn test
   ```
    e. Run the application (will start on port `3000`)
   ```bash
   yarn start
   ```
## Directory Structure
The directory structure was meant to separate the concerns and responsibilities to keep the code maintainable.
It may need improvements at some point if we are referring to real project:

a. Example `frontend/components` directory may become confusing as the number of components and styled components becomes bigger. One suggestion is to put every component file altogether with its types file and styled component file in one directory, for example:
```
Card
|- Card.ts
|- Card.tsx
|- Card.styled.ts
```
### Root
```
.
|-- .github (contains github actions configurations workflows/master.yml)
|-- backend
|-- frontend

```

### Back end
```
backend/
|-- dbseed (contains a small database seed to use while running github action)
|-- src
|   |-- config (contains the database configurations)
|   |-- controllers (contains 4 controllers for error, event, ping, recipient)
|   |-- exceptions (contains apiError)
|   |-- middleware (contains error middleware)
|   |-- models (contains the model class for event)
|   |-- routes (contains 2 routes files for event and recipient)
|   `-- services (contains 1 service class for event)
`-- __tests__
    |-- integration (contains 4 integration test suites of the 4 controllers)
    |-- mocks (contains common mock objects)
    `-- unit
        |-- controllers (unit tests for controllers)
        |-- models (unit tests for models)
        `-- services (unit tests for services)
```
### Front end
```
frontend/
|-- public
|   `-- images
`-- src
    |-- assets
    |   |-- images (contains the theme placeholder.png)
    |-- components (contains the main components, component types, and folder for styled components)
    |   `-- styles (contains all of the styled components)
    |-- pages (contains the 3 pages Error, Home and Dashboard)
    |-- store
    |   |-- actions (contains the redux actions)
    |   |-- reducers (contains the redux reducers)
    |   `-- sagas
    |       |-- handlers (contains the sagas handlers/generators)
    |       `-- requests (contains the sagas requests)
    |-- __tests__
    |   |-- components (contains the components tests)
    |   |   `-- __snapshots__  (contains the components snapshots)
    |   |-- pages  (contains the pages tests)
    |   |   `-- __snapshots__  (contains the pages snapshots)
    |   `-- store
    |       |-- actions  (contains the actions tests)
    |       |-- reducers  (contains the reducers tests)
    |       `-- sagas
    |           |-- handlers (contains the handlers/generators tests)
    |           `-- requests (contains the requests tests)
    `-- utils (contains constants and functions)

```

## Tests
I built the tests to make a show case of how I can test the different components in backend and frontend.

The test coverage of backend is around 83% for backend, the test for for frontend is covering both (components and pages) with snapshots and (redux actions/reducers and sagas) by unit tests.

Though, the test may need some improvements to cover some branched scenarios.

## Notes and Explanations
a. I took the approach of having 2 pages, one for the list of recipients and another for dashboard and detailed list of events.

b. In the home page I displayed the list of recipients in a grid/card formats, recipient names or any personal data, so I decided to use the recipient id as name place holder.

c. In the dashboard page I displayed a table that show counts of each event type of the recipient and a time line of events (limited to 20 events)

d. The API call that retrieve recipient's event is limited to 20 events ordered by the timestamp descending

e. No pager implemented as I'm only showing case of building APIs and and Frontend display, but I believe this would be a good improvement for the task.

f. You may notice that the `count` in API call are not reflecting the actual returned count of records, I believe this is an improvement

g. I implemented Github action to fetch dependencies, check the linting, run the tests and deploy to a server for both Frontend and Backend, that way I made my builds and changes deployments to AWS server easier and smoother.

h. If I have more time for this task, I would implement docker/docker-compose in order to make it easier to test.