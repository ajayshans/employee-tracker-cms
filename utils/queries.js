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
        const [rows] = await db.promise().query(`SELECT role.id, role.title, department.name, role.salary FROM role LEFT JOIN department ON department.id = role.department_id`);
        return rows;
    } catch (error) {
        console.error('Error fetching roles:', error);
        throw error;
    }
};

// TODO: Define other async functions for roles, employees, etc


module.exports = {
    getAllDepartments,
    getAllRoles,
    // TODO: Other async functions for roles, employees, etc
}