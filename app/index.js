const express = require('express');
const app = express();

require('./bootstrap')(app);
require('./middlewares')(app);
require('./routes')(app);

module.exports = () => {
    const port = process.env.PORT;
    app.listen(port, () => {
        console.log(`Application Is Running Listen On Port ${port}`);
    })
};