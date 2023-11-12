// Main application file

// Include packages needed for this application
const inquirer = require('inquirer');
const mysql = require('mysql2');

const sequelize = require('./config/connection.js');
const queries = require('./utils/queries.js')

const sequelize = require('./config/connection.js');
const consoleTable = require('console.table');


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
async function init() {
    const answer = await inquirer.prompt({
        name: 'action',
        type: 'list',
        message: 'What would you like to do?',
        choices: [
            'View all departments',
            'View all roles',
            'View all employees',
            'Add a department',
            'Add a role',
            'Add an employee',
            'Update an employee role'
        ]
    });

    switch (answer.action) {
        case 'View all departments':
            await viewAllDepartments();
            break;
        case 'View all roles':
            await viewAllRoles();
            break;
        case 'View all employees':
            await viewAllEmployees();
            break;
        case 'Add a department':
            await addDepartment();
            break;
        case 'Add a role':
            await addRole();
            break;
        case 'Add an employee':
            await addRole();
            break;
        case 'Update an employee role':
            await addRole();
            break;
    }
}

// Function call to initialize app
init();