const inquirer = require('inquirer');

const collectData = () => {
  const userData = inquirer.prompt([
    {
      type: 'list',
      name: 'shape',
      message: 'What shape do you want the logo?',
      choices: ['Circle', 'Triangle', 'Square']
    },
    {
      type: 'input',
      name: 'text',
      message: 'What text do you need on the logo? (0-3 characters)',
      validate: function (input) {
        if(input.length <= 3) {
          return true;
        }
        return 'Do not exceed 3 letters';
        }
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'What color do you want the text?'
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'What color do you want your new logo?'
    }
  ]);
  return userData;
};

module.exports = {collectData};