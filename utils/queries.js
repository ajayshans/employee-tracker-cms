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

async function getAllEmployees() {
    try {
        const [rows] = await db.promise().query(`SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary FROM employee LEFT JOIN role ON role.id = employee.role_id LEFT JOIN department ON role.department_id = department.id`);
        return rows;
    } catch (error) {
        console.error('Error fetching employees:', error);
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

// TODO: Define other async functions for roles, employees, etc


module.exports = {
    getAllDepartments,
    getAllRoles,
    getAllEmployees,
    listAllDepartments,
    createNewDepartment,
    createNewRole,
    // TODO: Other async functions for roles, employees, etc
}