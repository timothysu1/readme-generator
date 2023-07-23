// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require("fs");
// TODO: Create an array of questions for user input
const questions = [
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
  /* {
    type: '',
    message: '',
    name: 'tablecontent'
  }, */
  {
    type: 'input',
    message: '',
    name: 'installation'
  },
  {
    type: 'input',
    message: 'What does the user need to know about using the repo?',
    name: 'usage'
  },
  {
    type: 'list',
    message: 'What kind of license should your project have?',
    name: 'liscence'

  },
  {
    type: 'input',
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
    message: 'What is your GitHub username?',
    name: 'username'
  },
  {
    type: 'input',
    message: 'What is your eamil address?',
    name: 'email'
  }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
inquirer.prompt(data)
.then((response)=>{
  console.log(response)
  fs.writeFile(fileName,data,(err)=>
  err ? console.error(err) : console.log('Success!')
  );
})
}

// TODO: Create a function to initialize app
function init() {
  writeToFile("README.md",questions);
}

// Function call to initialize app
init();
