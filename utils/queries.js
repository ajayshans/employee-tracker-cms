// File containing async database queries
const db = require('../config/connection.js');

async function getAllDepartments() {
    try {
        const [rows] = await db.promise().query(`SELECT * FROM department`);
        return rows;
    } catch (error) {
        console.error('Error fetching departments:', error);
        throw error;
    }
};

async function listAllDepartments() {
    try {
        const data = await db.promise().query(`SELECT name FROM department`);
        const departmentsObject = data[0];

        const departmentOptions = [];
        for (let i = 0; i < departmentsObject.length; i++) {
            departmentOptions.push(departmentsObject[i].name);
        }
        return departmentOptions;
    } catch (error) {
        console.error('Error fetching list of departments:', error);
        throw error;
    }
};

async function getAllRoles() {
    try {
        const [rows] = await db.promise().query(`SELECT role.id, role.title, department.name AS department, role.salary FROM role LEFT JOIN department ON department.id = role.department_id`);
        return rows;
    } catch (error) {
        console.error('Error fetching roles:', error);
        throw error;
    }
};

async function listAllRoles() {
    try {
        const data = await db.promise().query(`SELECT title FROM role`);
        const rolesObject = data[0];

        const roleOptions = [];
        for (let i = 0; i < rolesObject.length; i++) {
            roleOptions.push(rolesObject[i].title);
        }
        return roleOptions;
    } catch (error) {
        console.error('Error fetching list of roles:', error);
        throw error;
    }
};

async function getAllEmployees() {
    try {
        const [rows] = await db.promise().query(`SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role ON role.id = employee.role_id LEFT JOIN department ON role.department_id = department.id LEFT JOIN employee AS manager ON employee.manager_id = manager.id`);
        return rows;
    } catch (error) {
        console.error('Error fetching employees:', error);
        throw error;
    }
};

async function listAllEmployees() {
    try {
        const data = await db.promise().query(`SELECT CONCAT(first_name, ' ', last_name) AS full_name FROM employee`);
        const employeesObject = data[0];

        const employeeOptions = ['None'];
        for (let i = 0; i < employeesObject.length; i++) {
            employeeOptions.push(employeesObject[i].full_name);
        }
        return employeeOptions;
    } catch (error) {
        console.error('Error fetching list of employees:', error);
        throw error;
    }
};

async function createNewDepartment(department) {
    try {
        await db.promise().query(`INSERT INTO department (name) VALUES (?)`, department);
    } catch (error) {
        console.error(`Error adding new department, ${department}:`, error);
        throw error;
    }
};

async function createNewRole(title, salary, department) {
    try {
        const data = await db.promise().query(`SELECT id FROM department WHERE name = ?`, department);
        const dep_id = data[0][0].id;
        await db.promise().query(`INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)`, [title, salary, dep_id]);
    } catch (error) {
        console.error(`Error adding new role, ${title}:`, error);
        throw error;
    }
};

async function createNewEmployee(first_name, last_name, role, manager) {
    try {
        const role_data = await db.promise().query(`SELECT id FROM role WHERE title = ?`, role);
        const role_id = role_data[0][0].id;
        var manager_id
        if (manager === 'None') {
            manager_id = null
        } else {
            const manager_data = await db.promise().query(`SELECT id FROM employee WHERE CONCAT(first_name, ' ', last_name) = ?`, manager);
            manager_id = manager_data[0][0].id;
        };
        await db.promise().query(`INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)`, [first_name, last_name, role_id, manager_id]);
    } catch (error) {
        console.error(`Error adding new employee, ${first_name} ${last_name}:`, error);
        throw error;
    }
};

// TODO: Define other async functions for roles, employees, etc


module.exports = {
    getAllDepartments,
    listAllDepartments,
    getAllRoles,
    listAllRoles,
    getAllEmployees,
    listAllEmployees,
    createNewDepartment,
    createNewRole,
    createNewEmployee,
    // TODO: Other async functions for roles, employees, etc
}