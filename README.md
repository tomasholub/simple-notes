# SIMPLE NOTES

- Example project written in ReactJS, node.js. using Bootstrap, UI-Router and REST.
- Implemented according to detailed requirements
- See Notes below discussing technologies and possible improvements.
- Created by [tomas.holub@apitree.cz](mailto:tomas.holub@apitree.cz) in March, 2020.

## Requirements

Prepare a simple application in ReactJS (or AngularJS). Prepare your own backend with these endpoints.

### Methods:
- GET / notes
- GET / notes / {id}
- POST / notes
- PUT / notes / {id}
- DELETE / notes / {id}

### Functional requirements:

- After installing and running you enter localhost:3000 and page appears with a list of notes.
- It is possible to display, edit, delete and create a new note.
- User should be able to change a language ( EN / CZ)

### Non-functional requirements:
- GUI according to your design, using with Bootstrap and LESS / SASS / Stylus preferred.
- The code should be ES6 + JS using the newer APIs such as Promise, Array, extras
- You might also use Typescript
- Installation dependencies by Bower
- Build - by gulp or grunt or then WebPack or browserify.
- Templates in js.
- Use ui-router (or https://github.com/rackt/react-router).
- At least one basic E2E test.

Develop code to github / Bitbucket public repository, in file README.md describe instructions
for installing and running a test and send URL via email.


## Installation Instructions

The project contains server (backend) part and client (frontend) part.

### Preconditions
You need to have these installed:
- node.js
- npm
- yarn
- mocha (for testing)


### Run the server
Clone the repository from github (or download the .ZIP file):
```
git clone https://github.com/tomasholub/simple-notes.git
```

Use console (command prompt or terminal) and go to the folder with the server:
```
cd simple-notes/simple-notes-server
```
  
Install dependencies:
```
npm i
```

Run the server:
```
npm run start
```
You should see the output:
```
Server running on port 4000
```
  
Check if the server is running
- Open web browser and navigate to http://localhost:4000/notes
- You should see a page with JSON data with 5 sample notes

### Run the server tests

You need to have `mocha` installed. You also need to have server running (using `npm run start`).

Then, you can run in another terminal window:
```
mocha
```
If everything goes fine, you should see a green message **2 passing**.

There are two tests present:
- **should return all notes** - i.e. testing `GET /notes` endpoint
- **should update a note** - i.e. testing `PUT /notes/1` endpoint

### Run the client
Use another terminal window and go to the folder with the client
```
cd simple-notes/simple-notes-client
```
  
Install dependencies:
```
yarn install
```
  
Run the client (simple-notes-server must be already running);
```
yarn start
```

A new web browser tab should appear with the application running on http://localhost:3000

You can see a list of notes, view, edit and delete individual notes. You can also change a language etc. Enjoy.

### Run the client tests

Run the following command in another terminal window (simple-notes-server must be running):
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

- [Yarn](https://yarnpkg.com/) has been used instead of [Bower](https://bower.io/). Bower is deprecated from 2017 and even its creators [recommend](https://bower.io/blog/2017/how-to-migrate-away-from-bower/) upgrade to Yarn or other tools. That's why I used npm and Yarn.
- [WebPack](https://github.com/webpack/webpack) can perform majority of tasks done by Grunt, [Gulp](https://gulpjs.com/) or [Browserify](http://browserify.org/). Very detailed comparison with examples and explanation can be found here: https://www.toptal.com/front-end/webpack-browserify-gulp-which-is-better. I used webpack.
- [GraphQL](http://graphql.org) is a modern alternative to REST. It allows more type-safe and flexible communication between client and server. However, I followed the requirements and used REST.
- [Material-UI](https://material-ui.com/) is up-to-date library to build user interfaces replacing [BootStrap](https://getbootstrap.com/). However, I followed the requirements and used BootStrap.
