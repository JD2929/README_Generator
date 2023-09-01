// TODO: Include packages needed for this application
//installed "inquirer"

const inquirer = require('inquirer');
const { writeFile } = require('fs').promises;


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
            type: 'input',
            name: 'contribution',
            message: 'Please enter any contributions guidelines you wish to include in the README for your project.',
        },

        {
            type: 'input',
            name: 'testing',
            message: 'What are the test instructions for your project?'
        },

    ]);
};


// TODO: Create a function to write README file
const generateReadMe = ({ title, description, installation, usage, contributions, testing }) => {

    `# ${title} 

    ## Description 
    
    ${description} 

    ## Table of Contents

        ### Installtion Instructions
        ### How to best use ${title}
        ### Contributions
        ### Testing Instructions
    
    ## Installation Instructions 
    
    ${installation}
    
    ## How to best use ${title} 
    
    ${usage} 
    
    ## Contributions 
    
    ${contributions} 
    
    ## Testing Instructions 
    
    ${testing}`

   
};

 // TODO: Create a function to initialize app
 const init = () => {
    promptUser()
        .then((answers) => writeFile('README.md', generateReadMe(answers)))
        .then(() => console.log('Successfully wrote to README.md'))
        .cath((err) => console.error(err));
};

// Function call to initialize app
init();
