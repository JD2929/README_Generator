// TODO: Include packages needed for this application
//installed "inquirer"

const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the Title of your project?',
        },

        {
            type: 'input',
            name: 'description',
            message: 'What is the description of your project?',
        },

        {
            type: 'input',
            name: 'installation',
            message: 'What are the installation instructions for your project?'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What usage information does the user require to use your project?',
        },
{
    type:'list',
    name: 'license',
    message: 'Which license is your project under?',
    choices: ["MIT", "GNU", "ISC", "Apache2.0", "None"]

},
        {
            type: 'input',
            name: 'contribution',
            message: 'Please enter any contribution guidelines you wish to include in the README for your project.',
        },

        {
            type: 'input',
            name: 'testing',
            message: 'What are the test instructions for your project?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?'
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub username?'
        }, 
    ]);
};


// TODO: Create a function to write README file
function writeToFile (fileName,data) {
    fs.writeFileSync(path.join(fileName),data)
}
 // TODO: Create a function to initialize app
 const init = () => {
    promptUser()
        .then((answers) => writeToFile('README.md', generateMarkdown({...answers})))
        .then(() => console.log('Successfully wrote to README.md'))
        .catch((err) => console.error(err));
};

// Function call to initialize app
init();
