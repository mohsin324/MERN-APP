// get work out response service 
const getWorkOut = require('../../services/GetWorkOut/getWorkOutService');
const getWorkOutRes = (req, res, next ) => {
    // handle response
    getWorkOut.service(req, res, next)
    .then((response) => {
        return res.status(200).json({
            message: response.message,
            ResponseCode: response.responseCode,
            ResponseDescription: response.responseDescription,
            response: response.responseData
        })
    })
    .catch((error) => {
        // global error handler
        console.log(error, '-----------error in resposne catch blog ----------- ');
        return res.status(400).json({
            message: error.message,//'failure in global error',
            ResponseCode: error.responseCode,
            ResponseDescription: error.response,
        })
    })
}

module.exports = getWorkOutRes