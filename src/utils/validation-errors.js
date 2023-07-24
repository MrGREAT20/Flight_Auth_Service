const {AppErrors} = require('./error-handler');
const {StatusCodes} = require('http-status-codes');
class ValidationErrors extends AppErrors {
    constructor(error){
        let errorName = error.name;
        let explanation = [];
        error.errors.forEach((err) => {
            explanation.push(err.message);
        });
        super(
            errorName,
            'Not Able to Validate Data Sent in the Request',
            explanation,
            StatusCodes.BAD_REQUEST
        )
    }
}
module.exports = ValidationErrors;