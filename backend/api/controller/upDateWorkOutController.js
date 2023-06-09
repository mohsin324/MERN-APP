// update workout req
const UpdateWorkOutReq = require('../helper/UpDateWorkOut/UpDateWorkOutReq');
const UpdateWorkOutResponse = require('../helper/UpDateWorkOut/UpDateWorkOutRes');
const UpdateWorkOutController = (req, res, next) => {
    let validateReq = UpdateWorkOutReq.validate(req.body);
    console.log(validateReq,' details')
    if(validateReq.error){
        const error = new Error();
        error.message = validateReq.error;
        return next(error)
    }
    return UpdateWorkOutResponse(req, res, next)
}

module.exports = {UpdateWorkOutController};