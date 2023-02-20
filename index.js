const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    
  {
    type: 'input',
    message: 'Enter your project title:',
    name: 'Title',
  },
  {
    type: 'input',
    message: 'provide your GitHub profile URL:',
    name: 'githubProfileURL',
  },
  {
    type: 'input',
    message: 'provide your GitHub userName:',
    name: 'githubuserName',
  },
  {
    type: 'input',
    message: 'enter your github repository name:',
    name: 'projectName',
  },
  {
    type: 'input',
    message: 'enter a summary describing your project:',
    name: 'projectSummary',
  },
  {
    type: 'input',
    message: 'enter the assets URL for the screenshot of your project demonstrating how it work',
    name: 'demoURL',
  },
  {
    type: 'input',
    message: 'describe the installation process:',
    name: 'installationInstructions',
  },
  {
    type: 'input',
    message: 'describe how to use the project application',
    name: 'usageInstructions',
  },
  {
    type: 'input',
    message: 'providing testing instructions:',
    name: 'testInstuctions',
  },
  {
    type: 'input',
    message: 'provide contribution guidelines:',
    name: 'contributionGuidelines',
  },
  {
    type: 'input',
    message: 'enter the license for your project:',
    name: 'license',
  },
  {
    type: 'input',
    message: 'enter your email address for any questions about your project:',
    name: 'contactInfo',
  },
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
inquirer.prompt(questions)
.then(data =>{ 
  console.log("DATA: ", data)
  
  fs.writeFile("README.md", generateMarkdown(data), (err) => {
    console.log(err)
  })
});
}

// function call to initialize program
init();
