const db = require('@database/mysql');
const commentStatus = require('@controllers/admin/comments/commentStatus');

exports.store = async (commentData) => {
    const [result] = await db.query(`INSERT INTO comments SET ?`, [commentData]);
    return result.insertId;
}

exports.findAll = async () => {
    const [result] = await db.query(`SELECT * FROM comments`);
    return result;
}

exports.count = async () => {
    const [result] = await db.query(`SELECT COUNT(*) as comments_count FROM comments`);
    return result[0].comments_count;
}

exports.find = async (commentID) => {
    const [result] = await db.query(`SELECT * FROM comments WHERE id=? LIMIT 1`, [commentID]);
    return result;
}

exports.approve = async (commentID) => {
    const [result] = await db.query(`UPDATE comments SET status=? WHERE id=? LIMIT 1`, [commentStatus.APPROVE, commentID]);
    return result.affectedRows > 0;
}

exports.reject = async (commentID) => {
    const [result] = await db.query(`UPDATE comments SET status=? WHERE id=? LIMIT 1`, [commentStatus.REJECT, commentID]);
    return result.affectedRows > 0;
}

exports.delete = async (commentID) => {
    const [result] = await db.query(`DELETE FROM comments WHERE id=? LIMIT 1`, [commentID]);
    return result.affectedRows > 0;
}