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

const badges = {
  Apache: "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
  GNU: "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
  IBM: "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)",
  OpenBSD: "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
  Mozilla: "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
  MIT: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
}

module.exports = templateData => {
  return `
# ${templateData.projectTitle} 

${badges[templateData.licenses]}

## Contents

---

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Contact](#contact)

## Description

---

${templateData.description}

## Installation

---

${templateData.installation}

\`\`\`
git clone ${templateData.repo}

npm init

npm install inquirer
\`\`\`

## Usage

---

${templateData.usage}

## Contributing

---

${templateData.contributing}

## Tests

---

${templateData.test}

## Contact

---

### Github<br>
- ${templateData.userGithub}
### Email Address<br>
- ${templateData.userEmail}

  `
}