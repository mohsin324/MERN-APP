const addWorkOutReq = require('../helper/AddWorkOut/AddWorkOutReq');
const AddWorkOutRes = require('../helper/AddWorkOut/AddWorkOutRes');
const addWorkOut = (req, res, next) => {
    const validate = addWorkOutReq.validate(req.body);
    if(validate.error){
        console.log('validate.error   ', validate.error.message)
        const err = new Error();
        err.message = validate.error.message;
        return next(err)
    }
    console.log('not validated')
    return AddWorkOutRes(req, res, next)
}
module.exports = { 
    addWorkOut
}