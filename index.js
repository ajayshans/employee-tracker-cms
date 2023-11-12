// Main application file

// Include packages needed for this application
const inquirer = require('inquirer');
const queries = require('./utils/queries.js')
require('console.table');

// viewAllDepartments
async function viewAllDepartments() {
    const departments = await queries.getAllDepartments();
    console.table(departments);
    init();
};
// viewAllRoles
async function viewAllRoles() {
    const roles = await queries.getAllRoles();
    console.table(roles);
    init();
};

// viewAllEmployees
async function viewAllEmployees() {
    const employees = await queries.getAllEmployees();
    console.table(employees);
    init();
};

// addDepartment
async function addDepartment() {
    const subAnswer = await inquirer.prompt({
        name: 'newDepartment',
        type: 'input',
        message: 'What is the name of the department?'
    });

    await queries.createNewDepartment(subAnswer.newDepartment);
    console.log(`New department, ${subAnswer.newDepartment}, succesfully added to department table`);
    init();
};

// addRole
async function addRole() {
    const departmentOptions = await queries.listAllDepartments();
    const roleSubAnswer = await inquirer.prompt([{
        name: 'title',
        type: 'input',
        message: 'What is the name of the role?'
    },
    {
        name: 'salary',
        type: 'input',
        message: 'What is the salary of the role?'
    },
    {
        name: 'department',
        type: 'list',
        message: 'Which department does the role belong to?',
        choices: departmentOptions
    }]);

    await queries.createNewRole(roleSubAnswer.title, roleSubAnswer.salary, roleSubAnswer.department);
    console.log(`New role and details for ${roleSubAnswer.title} succesfully added to role table`);
    init();
};

// addEmployee
async function addEmployee() {
    const roleOptions = await queries.listAllRoles();
    const managerOptions = await queries.listAllEmployees();
    const employeeSubAnswer = await inquirer.prompt([{
        name: 'firstName',
        type: 'input',
        message: 'What is the employee\'s first name?'
    },
    {
        name: 'lastName',
        type: 'input',
        message: 'What is the employee\'s last name?'
    },
    {
        name: 'role',
        type: 'list',
        message: 'What is the employee\'s role?',
        choices: roleOptions
    },
    {
        name: 'manager',
        type: 'list',
        message: 'Who is the employee\'s manager?',
        choices: managerOptions
    }]);

    await queries.createNewEmployee(employeeSubAnswer.firstName, employeeSubAnswer.lastName, employeeSubAnswer.role, employeeSubAnswer.manager);
    console.log(`New employee and details for ${employeeSubAnswer.firstName} ${employeeSubAnswer.lastName} succesfully added to employee table`);
    init();
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
            'Update an employee role',
            'Exit Application',
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
        case 'Exit Application':
            console.log('Goodbye :)')
            process.exit();
    }
}

// Function call to initialize app
init();