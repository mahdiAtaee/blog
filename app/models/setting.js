const db = require('@database/mysql');


exports.update = async (updateFields) => {
    const updateQuery = Object.keys(updateFields).map(setting_name => {
        return `UPDATE settings SET setting_value='${updateFields[setting_name]}' WHERE setting_name='${setting_name}'`
    });
    const [result] = await db.query(`${updateQuery.join(';')}`);
    return result[0].affectedRows > 0;
}

exports.findAll = async () => {
    const [rows, fields] = await db.query(`SELECT * FROM settings`);
    return rows;
}