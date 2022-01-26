This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## About

Car hire locations search app built with `React.js` (node version 17.4.0, npm version 8.3.1).\
Contains Search form with 'Pick-up Location' label which:

- searches results for 2 or more alphanumeric characters
- debounce request to improve performance (500ms delay)
- displays maximum of 6 results
- displays message if no results found

Live demo of the app can be see here: https://car-hire-dzewelina.netlify.app/ .

## Setup

You will need Node.js, npm and git installed before being able to run this project.

- To check if `Node.js` is installed on your machine open a terminal window and enter:

  ```
  $ node -v
  ```

  If you do not already have Node.js installed follow the instructions on [this guide](https://nodejs.org/en/download/package-manager/).

- To check if `npm` is installed on your machine enter this command in you terminal window:

  ```
  $ npm -v
  ```

  If you do not have npm already installed follow [this guide](https://www.npmjs.com/get-npm) to set it up.

- To check if `git` is installed on your machine enter the following in your terminal window:

  ```
  $ git --version
  ```

  If you do not already have git installed on your machine follow [this guide](https://git-scm.com/).

## Installation

To run this project you will need to clone this repository onto your local machine.

```
$ git clone https://github.com/dzewelina/car-hire.git
```

Navigate inside the folder and install all dependencies by entering the following commands on your terminal window:

```
$ cd car-hire
$ npm install
```

To run the application locally enter:

```
$ npm start
```

The application will run on http://localhost:3000.

## Testing

To run tests navigate to the project directory and enter the following command:

```
$ npm test
```

To check test coverage enter:

```
$ npm run test -- --coverage .
```

Testing was carried out using Jest, Enzyme and React Hooks Testing Library.

## Building

To build app to make it ready to be deployed run:

```
$ npm run build
```

It will build the app for production to the `build` folder.

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Hosting

This app is hosted at [Netlify](https://www.netlify.com/) and can be accessed at https://car-hire-dzewelina.netlify.app/ .
