const mongoDBSchema = require('../../DB/schema');
const service = async (req, res, next) => {
    console.log('----------------inside workout service------------');
    console.log(req.user+' ------- req.user -------')
    return new Promise(async (resolve, reject) => {
        let serviceResponse = {}
        try {
            const { workout, reps, weight } = req.body;
            const { _id } = req.user;
            const addSingleWorkout = await mongoDBSchema.create({ workout, reps, weight, user_id: _id });
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