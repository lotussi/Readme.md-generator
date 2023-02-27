


//function to render license badge

function renderBadge(licenseChoice) {
  switch (licenseChoice) {
    case 'GNU GPL v2.0':
      return '![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)';
      break;

      case 'MIT':
        return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
        break;
      case 'MPL 2.0':
        return '![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)';
        break;
  }
}
// function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  

                   
# ${data.title}

  ${renderBadge(data.license)}

## Description
  ${data.description}
## Table of content

  - [Installation](#installation)
  - [Usage](#usage)
  - [license](#license)
  - [Tests](#tests)
  - [Contributing](#contributing-here-is-a-heading)
  - [Questions](#questions)
## Installation
  ${data.installation}
  
## Usage
  ${data.usage}


## License
  ${data.license}

## Tests
  ${data.tests}
   
## Contributing
  ${data.contribution}

## Questions
  ${data.contactInfo}



  
   - [Link to ${data.title} on GitHub](https://github.com/${data.github}/${data.title})
`;
}

module.exports = generateMarkdown;