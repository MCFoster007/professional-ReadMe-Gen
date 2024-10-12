// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    name: "title",
    message: "What is your project called?",
},
{
    type: "input",
    name: "description",
    message: "Briefly describe the project",
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
//some like it should call fs.writefil

function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
function init() {
    //this wil probably cal inquirer .prompt. then(..)
}

// Function call to initialize app
init();
