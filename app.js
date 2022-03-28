/* README GENERATOR */

/* NEEDED:


  Info: title, 
        sections: Description, 
                  Installation, 
                  Usage, 
                  Contributing, 
                  Tests, 
        licenses: Apache,
                  Cloud Native Computing Foundation,
                  GNU,
                  npm packages,
                  OpenBSD,
                  Rust,
                  WordPress,
                  MIT
        table of contents,
        questions

Requirements: 
  1. Enter title: displays title
  2. enter CLI info -> display on readme
  3. Licences -> checkboxes w/ options -> badges
  4. Github username -> link to github
  5. Email address -> added to section of readme with questions to contact
  6. click links on table of contents -> goes to respective section
  7. Uses the inquirer package
*/

const inquirer = require("inquirer")
const fs = require("fs")
const generateREADME = require('./readme-generator.js')

const promptUser = () => {
  return inquirer
    .prompt([
    {
      type: 'input',
      name: 'projectTitle',
      message: 'Enter the name of your project (REQUIRED)',
      validate: projectName => {
        if (projectName) {
          return true
        } else {
          console.log('Please enter the project title')
          return false
        }
      }
    },
    {
      type: 'input',
      name: 'description',
      message: 'Enter a description of the project'
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Enter the installation instructions'
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Enter the usage information'
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Enter the contribution guidelines'
    },
    {
      type: 'input',
      name: 'test',
      message: 'Enter the test instructions'
    },
    {
      type: 'list',
      name: 'licenses',
      message: 'Chooses License that to apply',
      choices: [
        'Apache',
        'Cloud Native Computing Foundation',
        'GNU',
        'NPM Packages',
        'OpenBSD',
        'Rust',
        'WordPress',
        'MIT'
      ]
    },
    {
      type: 'input',
      name: 'userGithub',
      message: 'Enter your github username (REQUIRED)',
      validate: userGithub => {
        if (userGithub) {
          return true
        } else {
          console.log('Please enter your github username')
          return false
        }
      }
    },
    {
      type: 'input',
      name: 'userEmail',
      message: 'Enter your email (REQUIRED)',
      validate: userEmail => {
        if (userEmail) {
          return true
        } else {
          console.log('Please enter your email address')
          return false
        }
      }
    }
  ])
}




promptUser()
  .then(userData => {
    console.log(userData)
    // const readmeGEN = generateREADME(userData)
  })