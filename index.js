const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  {
    type: 'input',
    message: 'Enter your github username:',
    name: 'github',
  },
  {
    type: 'input',
    message: 'Enter your project title:',
    name: 'title',
  },
  {
    type: 'input',
    message: 'project description:',
    name: 'description',
  },
  {
    type: 'input',
    message: 'installation instructions:',
    name: 'installation',
  },


  {
    type: 'input',
    message: 'describe how to use the project application',
    name: 'usage',
  },
  {
    type: 'input',
    message: 'providing testing instructions:',
    name: 'tests',
  },
  {
    type: 'input',
    message: 'provide contribution guidelines:',
    name: 'contribution',
  },
  {
    type: 'list',
    message: 'enter the license for your project:',
    name: 'license',
    choices: ['MIT', 'MPL 2.0', 'GNU GPL v2.0']
  },
  {
    type: 'input',
    message: 'enter your email address for any questions about your project:',
    name: 'contactInfo',
  },
];



// function to write README file
function writeToFile(fileName, markdownData) {

  fs.writeFile(fileName, markdownData, (err) => {
    if (err) {
      console.log('could not save file', err)
    } else {
      console.log('Success: new README.md generated inside current folder')
    }


  })
}

// function to initialize program
function init() {
  inquirer.prompt(questions)
    .then(data => {
       // console.log("DATA: ", data)

      writeToFile("README.md", generateMarkdown(data))// ,(err) => {
         // if (err) {
      //   console.log('could not save file', err)
      // } else {
      //   console.log('Success: new README.md generated inside current folder')
      // }

      //console.log(err)
    
    });
    
};


//console.log(err)
// function call to initialize program
init();
