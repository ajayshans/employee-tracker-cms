// Include packages needed for this application
const inquirer = require('inquirer');
const mysql = require('mysql2');
const sequelize = require('./config/connection.js');
const consoleTable = require('console.table');



// Create an array of questions for user input
const questions = [];

// Required:
// viewAllDepartments
// viewAllRoles
// viewAllEmployees
// addDepartment
// addRole
// addEmployee
// updateEmployeeRole

// Optional:
// updateEmployeeManager
// viewEmployeesByManager
// viewEmployeesByDepartment
// deleteDepartment
// deleteRoles
// deleteEmployees
// viewTotalUtilisedBudget



// Create a function to initialize app
const init = () => {
    inquirer.prompt(questions)
    .then((data => writeToFile('./logo.svg', generateSVG(data))))
    .then(() => console.log('Generated logo.svg!'))
    .catch((err) => console.error(err));
}

// Function call to initialize app
init();