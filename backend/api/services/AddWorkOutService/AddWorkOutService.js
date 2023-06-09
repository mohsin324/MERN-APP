const mongoDBSchema = require('../../DB/schema');
const service = async (req, res, next) => {
    console.log('----------------inside workout service------------')
    return new Promise(async (resolve, reject) => {
        console.log(req.body)
        let serviceResponse = {}
        try {
            const addSingleWorkout = await mongoDBSchema.create(req.body);
            if(!addSingleWorkout){
                console.log(addSingleWorkout, '---------add single workout--------')
                serviceResponse = {
                    message: 'failure',
                    responseCode: '500',
                    response: addSingleWorkout
                }
                reject(serviceResponse)
            }
            serviceResponse = {
                message: 'success',
                responseCode: '200',
                responseDescription: 'Data Posted Successfully',
                responseData: addSingleWorkout
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