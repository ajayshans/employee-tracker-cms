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

// TODO: Define other async functions for roles, employees, etc


module.exports = {
    getAllDepartments,
    getAllRoles,
    getAllEmployees,
    createNewDepartment,
    // TODO: Other async functions for roles, employees, etc
}