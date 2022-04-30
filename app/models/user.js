const db = require('@database/mysql');
const hashService = require('@services/hashService');


exports.findAll = async () => {
    const [result] = await db.query(`SELECT * FROM users`);
    return result;
};

exports.count = async () => {
    const [rows] = await db.query(`SELECT COUNT(*) as count FROM users`);
    console.log(rows);
    return rows[0].count;
}

exports.findByEmail = async (email) => {
    const [rows] = await db.query(`SELECT * FROM users WHERE email=? LIMIT 1`, [email]);
    return rows.length === 1 ? rows[0] : null;
}

exports.create = async (userData) => {
    const hashed = hashService.hashPassword(userData.password);
    const updateUserData = {
        ...userData,
        password: hashed
    };
    const [rows] = await db.query(`INSERT INTO users SET ?`, [updateUserData]);

    return rows.insertId;
}