// TODO: Include packages needed for this application
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    message: '',
    name: 'title'
  },
  {
    type: 'input',
    message: '',
    name: 'description'
  },
  {
    type: '',
    message: '',
    name: 'tablecontent'
  },
  {
    type: '',
    message: '',
    name: 'installation'
  },
  {
    type: '',
    message: '',
    name: 'usage'
  },
  {
    type: '',
    message: '',
    name: 'liscence'
  },
  {
    type: '',
    message: '',
    name: 'contributing'
  },
  {
    type: '',
    message: '',
    name: 'test'
  },
  {
    type: 'input',
    message: '',
    name: 'username'
  },
  {
    type: 'input',
    message: '',
    name: 'email'
  }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
