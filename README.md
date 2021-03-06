# progressive-budget
![license](https://img.shields.io/badge/license-MIT-blue)

## Table of Contents 
- [Description](#description)
- [Technology](#technology)
- [Installation](#installation)
- [Usage](#usage)
- [Code](#code)
- [Contribution](#contribution)
- [Author](#author)

## Description
This application was created to help keep track of your finances by adding and subtracting funds. The task was to refractor code so that transactions can be done offline as well. The database is updated when back online!

## Technology
This app was pre-built for us using HTML/CSS and Javascript. I used Express.js, Node, and IndexDB to complete the task. Heroku is used to deploy the application.

## Installation
To install this generator, please download this repo onto your local computer. Then, make sure to:
- Install npm packages with `npm i`

## Usage
To use this application: 
- Open Terminal
- Type `node server.js` 
- Open your browser and type `http://localhost:3000` to open the app
![Demo Walkthrough](./assets/demo.gif)

Deployed link: https://agile-hollows-52703.herokuapp.com

## Code
This code created a new object store for pending.
```
request.onupgradeneeded = function (event) {
  const db = event.target.result;
  db.createObjectStore("pending", { autoIncrement: true });
};
```

This function helped to add a record to store.
```
function saveRecord(record) {
  const transaction = db.transaction(["pending"], "readwrite");
  const store = transaction.objectStore("pending");
  store.add(record);
}
```

## Contribution
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.0-4baaaa.svg)](code_of_conduct.md)

## Author
- Github: [samyuhan](https://github.com/samyuhan)
- Email: syuhan@berkeley.edu