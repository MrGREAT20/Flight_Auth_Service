const express = require('express');
const app = express();
const {PORT} = require('./config/serverConfig');
const bodyparser = require('body-parser');

const apiroutes = require('./routes/index');

const prepareAndStartServer = () => {
    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({extended:true}));
    app.use('/api', apiroutes);
    app.listen(PORT, () => {
        console.log('Server Started on Port:', PORT);
    })
}
prepareAndStartServer();