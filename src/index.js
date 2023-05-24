const express = require('express');
const app = express();
const {PORT} = require('./config/serverConfig');
const bodyparser = require('body-parser');
// const UserRepository = require('./repository/user-repository');
const UserService = require('./services/user-service');

const apiroutes = require('./routes/index');

const prepareAndStartServer = () => {
    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({extended:true}));
    app.use('/api', apiroutes);
    app.listen(PORT, async() => {
        console.log('Server Started on Port:', PORT);
        //const service = new UserService();
        // const newToken = service.createToken({email:'sanket@admin.com', id: 1});
        // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhbmtldEBhZG1pbi5jb20iLCJpZCI6MSwiaWF0IjoxNjg0NTk5MTk2LCJleHAiOjE2ODQ2MDI3OTZ9.jsu0zC-CtpxDKABzpvPq01JHkPJ2fuYFJ9CD3PgFErQ';
        // const response = service.verifyToken(token);
        // console.log(response);
        // const repo = new UserRepository();
        // const response = await repo.getByID(1);
        // console.log(response);
    })
}
prepareAndStartServer();