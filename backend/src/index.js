require('dotenv').config();

const app = require('./app');
require('./database');

const main = async() => {
    await app.listen(4000);
    console.log('server on port 4000');
}

main();