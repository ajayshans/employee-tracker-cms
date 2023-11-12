// Main application file

// Include packages needed for this application
const express = require('express');
const inquirer = require('inquirer');
const mysql = require('mysql2');

const sequelize = require('./config/connection.js');
const queries = require('./utils/queries.js')

const sequelize = require('./config/connection.js');
const consoleTable = require('console.table');



function initialQuestion() {
    inquirer.prompt({
        type: 'list',

    })
}

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

    }
}

const init = () => {
    inquirer.prompt(questions)
    .then((data => writeToFile('./logo.svg', generateSVG(data))))
    .then(() => console.log('Generated logo.svg!'))
    .catch((err) => console.error(err));
}

// Function call to initialize app
init();