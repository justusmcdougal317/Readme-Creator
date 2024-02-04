const fs = require('fs');
const { createPromptModule } = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown'); // Adjust the path as needed

// TODO: Create an array of questions for user input
const questions = [
  // ... your questions ...
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  // Implementation details
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error('Error writing to file:', err);
    } else {
      console.log(`${fileName} generated successfully!`);
    }
  });
}

// TODO: Create a function to initialize app
function init() {
  const prompt = createPromptModule();

  // Inquirer prompt
  prompt(questions)
    .then((answers) => {
      const readmeContent = generateMarkdown(answers);
      writeToFile('README.md', readmeContent);
    })
    .catch((err) => {
      console.error('Error during inquirer prompt:', err);
    });
}

// Function call to initialize app
init();