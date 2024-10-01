# Microfrontend Application

This project demonstrates a microfrontend architecture using Single-Spa to integrate microfrontends built with React, Vue.js, and Angular.

## Setup Instructions

### Clone the Repository

`
git clone https://github.com/PiyushPamnani/micro-frontend
`

### Install Dependencies

Install dependencies for the root application and each microfrontend.

- Root Application

`
cd root-file
npm install
`

- React Microfrontend

`
cd react-file
npm install
`

- Vue.js Microfrontend

`
cd vue-file
npm install
`

- Angular Microfrontend

`
cd angular-file
npm install
`

### Running the Application

Each microfrontend and the root application need to be started individually.

- Root Application
The root application serves as the Single-Spa orchestrator.

`
cd root-file
npm start
`

- React Microfrontend

`
cd react-file
npm run start:standalone
`

- Vue.js Microfrontend

`
cd vue-file
npm run serve:standalone
`

- Angular Microfrontend

`
cd angular-file
npm run serve:single-spa:angular-file
`

### Access the Application
After starting all the services, navigate to:

`
http://localhost:9000
`

The root application will load the microfrontends on the home page.
