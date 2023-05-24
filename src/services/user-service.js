const UserRepository = require('../repository/user-repository');
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
    createToken(user){
        /**
         * this function will generate the JWT token with the help of user object
         * 
         */
        try {
            const result = jwt.sign(user, JWT_KEY, {expiresIn: '1d'});
            return result;
            
        } catch (error) {
            console.log("Something went wrong in token creation");
            throw error;
        }
    }
    verifyToken(token){
        /**
         * this function will verify the token from the client side
         */
        try {
            const response = jwt.verify(token, JWT_KEY);
            return response;
        } catch (error) {
            console.log("Something went wrong in token validification");
            throw error;
        }
    }
    checkpassword(userinputplainpassword, encryptedpassword){
        try {
            return bcrypt.compareSync(userinputplainpassword, encryptedpassword);
            /**
             * to check whether the userinputed password matches the encrypted password
             */
        } catch (error) {
            console.log("Something went wrong in password verification");
            throw error;
        }
    }
}
module.exports = UserService;