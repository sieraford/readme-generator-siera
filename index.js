// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')
const renderLicenseBadge = require('./utils/generateMarkdown')
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'What is the description?',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What are the installation instructions?',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'What is the usage information?',
  },
  {
    type: 'list',
    name: 'license',
    message: 'What is the license?',
    choices: [ "MIT License", "GNU GPLv3", "Apache License 2.0", "ISC License", "None" ]
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'What are the contribution guidelines?',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'What are the test instructions?',
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is your github username?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email?',
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
  err ? console.log(err) : console.log('Successfully created README.md!')
)}

// TODO: Create a function to initialize app
function init() {
  inquirer
  .prompt(questions)
  .then((answers) => {
    const readmePageContent = generateMarkdown(answers);
    const licenseBadge = renderLicenseBadge(answers);
    writeToFile('README.md', readmePageContent)
    // fs.appendFile('README.md', licenseBadge)
  });

}

// Function call to initialize app
init();
