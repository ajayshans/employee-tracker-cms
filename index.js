// Main application file

// Include packages needed for this application
const inquirer = require('inquirer');
const queries = require('./utils/queries.js')
require('console.table');


// Required:
// viewAllDepartments
async function viewAllDepartments() {
    const departments = await queries.getAllDepartments();
    console.table(departments);
};
// viewAllRoles
async function viewAllRoles() {
    const departments = await queries.getAllDepartments();
    console.log(departments);
};
// viewAllEmployees
async function viewAllEmployees() {
    console.log('test');
    const departments = await queries.getAllDepartments();
    console.log(departments);
};
// addDepartment
async function addDepartment() {
    const departments = await queries.getAllDepartments();
    console.log(departments);
};
// addRole
async function addRole() {
    const departments = await queries.getAllDepartments();
    console.log(departments);
};
// addEmployee
async function addEmployee() {
    const departments = await queries.getAllDepartments();
    console.log(departments);
};
// updateEmployeeRole
async function updateEmployeeRole() {
    const departments = await queries.getAllDepartments();
    console.log(departments);
};

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
            await addEmployee();
            break;
        case 'Update an employee role':
            await updateEmployeeRole();
            break;
    }
}

// Function call to initialize app
init();