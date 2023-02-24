//function to render license badge

 



// function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.github}
                   
## Title
  ${data.title}

  

## Description
  ${data.description}
## Table of content

  -[Installation](#installation)
  -[Usage](#usage)
  -[license](#license)
  -[Tests](#tests)
  -[Contributing](#contributing-here-is-a-heading)
  -[Questions](#questions)
## Installation
  ${data.installation}
  
## Usage
  ${data.usage}


##License
  ${data.license}

##Tests
  ${data.tests}

##Questions
  ${data.questions}



  
   - [Link to ${data.title} on GitHub](https://github.com/${data.github}/${data.title})
`;
}

module.exports = generateMarkdown;
