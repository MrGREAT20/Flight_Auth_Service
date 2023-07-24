
/**
 * This is the middleware we will use for both SignIn and SignUp to check whether the request body have all the required fields
 * for the request to go further
 */
const validateUserAuth = (req, res, next) => {
    if(!req.body.email || !req.body.password){
        return res.status(400).json({
            success: false,
            data: {},
            message: 'Something went wrong',
            err: 'Email or Password missing in the Request'

        })
    }
    next(); //if all is good, then we call the next middleware if it is there or it will move on to the controller
}
const validateifAdminRequest = (req, res, next) => {
    if(!req.body.id){
        return res.status(400).json({
            success: false,
            data: {},
            message: 'Something went wrong',
            err: 'id missing'
        })
    }
    next();
}
module.exports = {
    validateUserAuth,
    validateifAdminRequest
};