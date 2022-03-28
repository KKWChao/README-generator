/* README Template 

${title} 
&middot
${license}
====

## Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Contact Me](#contact)

## Description
${description}

## Installation
${installation}

```
git clone [repo name]

npm init

npm install inquirer
```

## Usage
${usage}

## Contributing
${contribute}

## Tests
${test}

## Contact Me
${contact}

*/

module.exports = templateData => {
  return `
  ${templateData.projectTitle} 
  &middot
  ${templateData.licenses}
  ====

  ## Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Contact Me](#contact me)

  ## Description
  ${templateData.description}

  ## Installation
  ${templateData.installation}

  \`\`\`
  git clone [repo name]

  npm init

  npm install inquirer
  \`\`\`

  ## Usage
  ${templateData.usage}

  ## Contributing
  ${templateData.contributing}

  ## Tests
  ${templateData.test}

  ## Contact Me
  ${templateData.userGithub}
  ${templateData.userEmail}
  `
}