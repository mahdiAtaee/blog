module.exports = session => {
    const MySQLStore = require('express-mysql-session')(session);

    const options = {
        port: process.env.MYSQL_PORT,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_NAME,
        expiration: 86400000,
        clearExpired: true,
        // How frequently expired sessions will be cleared; milliseconds:
        checkExpirationInterval: 900000,
    };

    return new MySQLStore(options);
}