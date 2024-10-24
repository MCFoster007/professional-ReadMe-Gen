import inquirer from 'inquirer';
import fs from 'fs';

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is your project called?",
    },
    {
        type: "input",
        name: "installation",
        message: "What coding language did you install?",
    },
    {
        type: "input",
        name: "location",
        message: "What location is your Repo in?",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('Success! README file created!')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            const readmeContent = `
// # ${answers.title}

// ## Installation
// ${answers.installation}

// ## Repository Location
// ${answers.location}

            `;
            writeToFile('GenREADME.md', readmeContent);
        });
}

// Function call to initialize app
init();
