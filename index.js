// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require("fs");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    message: 'What is your GitHub username?',
    name: 'username'
  },
  {
    type: 'input',
    message: 'What is your eamil address?',
    name: 'email'
  },
  {
    type: 'input',
    message: 'What is the title of your project?',
    name: 'title'
  },
  {
    type: 'input',
    message: 'Write a description for your project',
    name: 'description'
  },
  {
    type: 'list',
    message: 'What kind of license should your project have?',
    name: 'liscence',
    choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
  },
  {
    type: 'input',
    message: 'What command should be ran to install dependencies',
    name: 'installation',
    default: 'npm i'
  },
  {
    type: 'input',
    message: 'What command should be ran to install tests?',
    name: 'test',
    default: 'npm test'
  },
  {
    type: 'input',
    message: 'What does the user need to know about using the repo?',
    name: 'usage'
  },
  {
    type: 'input',
    message: 'What does the user need to know about contributing to the repo?',
    name: 'contributing'
  }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  inquirer.prompt(data)
    .then((response) => {
      console.log(response)
      fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('Success!')
      );
    })
}

// TODO: Create a function to initialize app
function init() {
  writeToFile("README.md", questions);
}

// Function call to initialize app
init();
