// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `<img src="https://img.shields.io/badge/license-${license}-blue.svg">`

  } else {
    return ""
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    return `* [License](#license)`
  } else {
    return ""
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return `## License
    
    
    This project is licensed under ${license}.`
  } else {
    return ""
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}


  ## Description 
    
  ${data.description} 

  ## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
${renderLicenseLink(data.license)}
* [Contributions](#contributions)
* [Testing](#testing)
* [Questions](#questions)
  
  ## Installation  
  
  ${data.installation}
  
  ## Usage
  
  ${data.usage} 
  
${renderLicenseSection(data.license)}

  ## Contributions 
  
  ${data.contribution} 
  
  ## Testing
  
  ${data.testing}

  ## Questions

  If you would like to reach out or have any questions please email at [${data.email}](mailto:${data.email}).

  If you would like to see more of my projects please check out my GiHub at [${data.github}](https://github.com/${data.github})
`;
}

module.exports = generateMarkdown;
