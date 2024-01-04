const inquirer = require('inquirer');

inquirer.prompt([
  {
    type: 'list',
    name: 'shape',
    message: 'What shape do you want the logo?',
    choices: [Circle, Triangle, Square]
  },
  {
    type: 'input',
    name: 'text color',
    message: 'What color do you want the text?'
  },
  {
    type: 'input',
    name: 'color',
    message: 'What color do you want your new logo?'
  }
]).then((userData) => {
  console.log(userData);
});