const UserService = require('../services/user-service');

const userservice = new UserService();
const create = async (req, res) => {
    try {
        const response = await userservice.create({
            email:req.body.email,
            password:req.body.password
        });
        return res.status(201).json({
            message: 'Successfully created a new user',
            error: {},
            success: true,
            data: response
        })
    } catch (error) {
        return res.status(error.statusCode).json({
            message: error.message,
            error: error.explanation,
            success: false,
            data: {}
        })
    }
}
const signIn = async(req, res) => {
    try {
        const response = await userservice.signIn(req.body.email, req.body.password);
        return res.status(201).json({
            message: 'Successfully Signed In',
            error: {},
            success: true,
            data: response
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'Something went wrong',
            error: error,
            success: false,
            data: {}
        })
    }
}
const isAuthenticated = async(req, res) => {
    try {
        const token = req.headers['x-access-token']; // JWT token in most Auth services is sent through header of any request
        /*const isVerified = userservice.verifyToken(token);

        lekin me verfication yaha controller layer me nhi kar sakta, 
        because suppose yeh token verify hogaya or verficiation ke baad 
        'isVerified' variable me user ka info rahega, and since JWT ka expiry hai '1 day' ka
        and suppose voh expiry ke andar hi agar user ne account delete maar diya
        Now since account delete kiya hai DB se toh hume JWT ko bhi delete karna chahiye kyuki yeh JWT se koi or unauthorized insaan use kar sakta hai

        isiliye abhi iska logic hum service layer me likhenge 


        After New changes
        */
       const response = await userservice.isAuthenticated(token);
       return res.status(200).json({
        success: true,
        err: {},
        data: response,
        message: 'user is authenticated and token is valid'
       });
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'Something went wrong',
            error: error,
            success: false,
            data: {}
        })   
    }
}

const isAdmin = async (req, res) => {
        try {
            const response = await userservice.isAdmin(req.body.id);
            return res.status(200).json({
                success: true,
                err:{},
                data: response,
                message: ''
            })
            
        } catch (error) {
            console.log(error);
            return res.status(500).json({
            message: 'Something went wrong',
            error: error,
            success: false,
            data: {}
        })   
        }
}
module.exports = {create, signIn, isAuthenticated, isAdmin};