const UserRepository = require('../repository/user-repository');
const jwt = require('jsonwebtoken');
const {JWT_KEY} = require('../config/serverConfig');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {JWT_KEY} = require('../config/serverConfig');
const bcrypt = require('bcrypt');
class UserService{
    constructor(){
        this.userRepository = new UserRepository();
    }
    async create(data){
        try {
            const user = await this.userRepository.create(data);
            return user;
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw error;
        }
    }
}
module.exports = UserService;