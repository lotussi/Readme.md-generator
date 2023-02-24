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
    message: 'project description:',
    name: 'Description',
  },
  {
    type: 'input',
    message: 'installation instructions:',
    name: 'Installation',
  },

 
  {
    type: 'input',
    message: 'describe how to use the project application',
    name: 'Usage',
  },
  {
    type: 'input',
    message: 'providing testing instructions:',
    name: 'Tests',
  },
  {
    type: 'input',
    message: 'provide contribution guidelines:',
    name: 'contribution',
  },
  {
    type: 'list',
    message: 'enter the license for your project:',
    name: 'License',
    choices:['MIT', 'MPL','GNU GPL v2'],
    Filter(val) {
      return val.toLowercase();
    }
  },
  {
    type: 'input',
    message: 'enter your email address for any questions about your project:',
    name: 'contactInfo',
  },
];

       

// function to write README file
function writeToFile(fileName, data) {
 
  fs.writeFile("README.md", generateMarkdown(data), (err) => {
    if (err) {
       console.log('could not save file', err)
     } else {
       console.log('Success: new README.md generated inside current folder')
     }
    console.log(err)
 // `!`

})
}

// function to initialize program
function init() {
inquirer.prompt(questions)
.then(data =>{ 
  console.log("DATA: ", data)
  
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
