const {StatusCodes} = require('http-status-codes');
class AppErrors extends Error{
    constructor(name = 'AppError', message = 'Something went Wrong', explanation = 'Something went Wrong', statusCode = StatusCodes.INTERNAL_SERVER_ERROR){
        super();
       // in case if we forgot to pass message, explanation
       this.message = message,
       this.explanation = explanation,
       this.name = name,
       this.statusCode = statusCode
    }
}
module.exports = {
    AppErrors,
}