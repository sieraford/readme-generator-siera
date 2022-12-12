// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'description',
    message: 'What is the description?',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What is the installation?',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'What is the usage?',
  },
  {
    type: 'input',
    name: 'credits',
    message: 'What are the credits?',
  },
  {
    type: 'input',
    name: 'license',
    message: 'What is the license?',
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
    writeToFile('README.md', readmePageContent);
  });

}

// Function call to initialize app
init();
