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
    async signIn(email, plainpassword){
        try {
            //step1: fetch the user using email
            const user = await this.userRepository.getByEmail(email);
            //step2: compare the plainpassword with the encrypted stored password
            const passwordcheck = this.checkpassword(plainpassword, user.password);
            if(!passwordcheck){
                console.log("Password doesnt match");
                throw{error:'Incorrect Password'};
            }
            //step3: if password matches, create a token and send it to the user
            const newJwt = this.createToken({email:email, id:user.id});
            return newJwt;
        } catch (error) {
            console.log("Something went wrong in SignIn process at user-service layer");
            throw error;
        }
    }
}
module.exports = UserService;