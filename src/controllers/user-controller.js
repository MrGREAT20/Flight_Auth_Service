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
        console.log(error);
        return res.status(500).json({
            message: 'Something went wrong',
            error: error,
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
module.exports = {create, signIn};