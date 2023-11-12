// File containing async database queries
const db = require('../config/connection.js');

async function getAllDepartments() {
    try {
        const [rows, fields] = await db.promise().query('SELECT * FROM department');
        return rows;
    } catch (error) {
        console.error('Error fetching departments:', error);
        throw error;
    }
};

// TODO: Define other async functions for roles, employees, etc


module.exports = {
    getAllDepartments,
    // TODO: Other async functions for roles, employees, etc
}