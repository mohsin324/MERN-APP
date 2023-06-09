const mongoDBSchema = require('../../DB/schema');
const service = (req, res, next) => {
    return new Promise(async(resolve, reject) => {
        try {
            const findWorkOut = await mongoDBSchema.find();
            console.log(findWorkOut, '---------find all workout--------');
            if(!findWorkOut){
                serviceResponse = {
                    message: 'failure',
                    responseCode: '500',
                    response: findWorkOut
                }
                reject(serviceResponse)
            }
            serviceResponse = {
                message: 'success',
                responseCode: '200',
                responseDescription: 'Data fetch Successfully',
                responseData: findWorkOut
            }
            resolve(serviceResponse)
        } catch (error) {
            serviceResponse = {
                message: 'failure',
                responseCode: '500',
                response: error.message
            }
            reject(serviceResponse)
        }
    })

}
module.exports = {
    service
}