// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.github}
  -  [Link text Here](${data.githubProfileURL})

`;
}

module.exports = generateMarkdown;
