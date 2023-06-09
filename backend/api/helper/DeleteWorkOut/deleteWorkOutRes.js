// service will call here
// import deleteWorkOut from '../../services/DeleteWorkOutService';
const deleteWorkOut = require('../../services/DeleteWorkOutService/deleteWorkOutService')
const deleteWorkout = (req, res, next) => {
    deleteWorkOut.service(req, res, next)
    .then((response) => {
        return res.status(200).json({
            message: response.message,
            responseCode: response.responseCode,
            data: response.data
        })
    })
    .catch((err) => {
        const error = new Error();
        error.message = err.responseDescription
        return next(error)
    })

}

module.exports = {deleteWorkout};