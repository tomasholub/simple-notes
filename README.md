# SIMPLE NOTES

- Example project written in ReactJS, node.js. using Bootstrap, UI-Router and REST.
- Created by [tomas.holub@apitree.cz](mailto:tomas.holub@apitree.cz) in March, 2020.

## Installation Instructions

The project contains server (backend) part and client (frontend) part.

### Preconditions
You need to have these installed:
- node.js
- npm
- yarn
- mocha (for testing)

### Steps to build the project

#### Run the server:
1. Clone the repository from github (or download the .ZIP file):
  ```
  git clone simple-notes TODO:
  ```

1. Use console (command prompt or terminal) and go to the folder with the server:
  ```
  cd simple-notes-server
  ```
  
1. Install dependencies:
  ```
  npm i
  ```

1. Run the server:
  ```
  npm run start
  ```
  You should see the output:
  ```
  Server running on port 4000
  ```
  
1. Check if the server is running
  - Open web browser and navigate to http://localhost:4000/notes
  - You should see a page with JSON data with 5 sample notes

#### Run the server tests:

You need to have `mocha` installed. You also need to have server running (using `npm run start`).

Then, you can run:
```
mocha
```
If everything goes fine, you should see a green message **2 passing**.

There are two tests present:
- **should return all notes** - i.e. testing `GET /notes` endpoint
- **should update a note** - i.e. testing `PUT /notes/1`

#### Run the client:
1. Use another console and go to the folder with the client:
  ```
  cd simple-notes-client
  ```
  
1. Install dependencies:
  ```
  yarn install
  ```
  
1. Run the client:
  ```
  yarn start
  ```

1. A new web browser tab should appear with the application running on http://localhost:3000

1. You can see a list of notes, view, edit and delete individual notes. You can also change a language etc. Enjoy.

#### Run the client tests:

Run:
```
yarn test
```
If everything goes fine, 2 suites with 3 tests in total pass (with green color).
  
Tests:
  1. **ViewContent renders correctly** = simple test of simple component
  1.  **About page is displayed after click to ABOUT link** - test of click and simple transition
  1. **Example of Edit action** = complex test of updating component (Home page with list of notes -> Edit -> changing title & test -> OK -> Home page) 

## Possible Improvements

There are many possible improvements to make the application more user-friendly, more configurable, more robust and more detailed.

## Notes & Recommendations

- [Yarn](https://yarnpkg.com/) has been used instead of [Bower](https://bower.io/). Bower is deprecated from 2017 and even its creators [recommend](https://bower.io/blog/2017/how-to-migrate-away-from-bower/) upgrade to Yarn or other tools.
- [WebPack](https://github.com/webpack/webpack) can perform majority of tasks done by Grunt, [Gulp](https://gulpjs.com/) or [Browserify](http://browserify.org/). Very detailed comparison with examples and explanation can be found here: https://www.toptal.com/front-end/webpack-browserify-gulp-which-is-better.
- [GraphQL](http://graphql.org) is a modern alternative to REST. It allows more type-safe and flexible communication between client and server.
- [Material-UI](https://material-ui.com/) is up-to-date library to build user interfaces replacing [BootStrap](https://getbootstrap.com/).
