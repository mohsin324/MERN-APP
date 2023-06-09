const UpdateWorkOutService = require('../../services/UpDateWorkOutService/UpDateWorkOutService');
const UpdateWorkOutResponse = async(req, res, next) => {
    UpdateWorkOutService.service(req, res, next)
    .then((response) => {
        return res.status(200).json({
            message: response.message,
            ResponseDescription: response.ResponseDescription,
            response: response.response
        })
    })
    .catch((error) => {
        return res.status(500).json({
            message: error.message,
            ResponseDescription: error.ResponseDescription,
        }) 
    })
}

module.exports = UpdateWorkOutResponse;