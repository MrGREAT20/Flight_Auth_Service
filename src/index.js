const express = require('express');
const app = express();
const {PORT} = require('./config/serverConfig');
const bodyparser = require('body-parser');
// const UserRepository = require('./repository/user-repository');
//const db = require('./models/index');

const apiroutes = require('./routes/index');

const prepareAndStartServer = () => {
    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({extended:true}));
    app.use('/api', apiroutes);
    app.listen(PORT, async() => {
        console.log('Server Started on Port:', PORT);
        // const repo = new UserRepository();
        // const response = await repo.getByID(1);
        // console.log(response);
    })
}
prepareAndStartServer();