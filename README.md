# README Generator

## Description
This application allows for the user to create a professional README.md file by answering prompts based on their project. Once all of the prompts are answered, a README will be generated in the 'created-README' folder.
## Built With
* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/en/about)
* [Inquirer](https://www.npmjs.com/package/inquirer#documentation)

## Installation

To install necessary dependancies, run the following command: 

```
npm i
```

## Usage
The user needs to download the application's repository via GitHub. Then the user will install Inquirer via the command line using the command ```npm i```. Now that everything is installed, the user can start the application by typing ```node index.js``` which will prompt the user with a series of questions that they will answer based on the project they are making the README for. Once all of the questions are answered, the README will be created in the 'created-README' folder.

[Walkthrough Video](https://drive.google.com/file/d/1GQ8ocp9zwK6rC22K_NZTRFT-Rp5fjO1z/view?usp=drive_link)
## Learning Points
* Using Node.js to run JavaScript
* Utilizing Inquirer at get user input
* Using the File System module to read and write files
## Important Code
```js
function writeToFile(fileName, data) {
  fs.writeFile('./created-README/' + fileName, data, (err) =>
    err ? console.error(err) : console.log('Success!')
  );
}
```
This portion of code creates a markdown file with the data given to it and returns an error if one occurs.
## Author Info

### Timothy Su

* [LinkedIn](https://www.linkedin.com/in/timothysu1/)
* [Github](https://github.com/timothysu1)

## License
Please refer to license in the repo. 
## Contributions
Markdown Badge Reference: https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba
