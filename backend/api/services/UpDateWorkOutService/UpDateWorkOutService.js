const { ObjectId } = require('mongodb');
const mongoDBSchema = require('../../DB/schema');
let serviceName = 'UPDATE WORKOUT SERVICE';
let serviceResponse;
const service = async (req, res, next) => {
    console.log(`-------------${serviceName}----------------`)
    return new Promise(async (resolve, reject) => {
        try {
            const { id } = req.params;
            const { workout, reps, weight } = req.body
            console.log('id ' + id)
            const updateWorkOut = await mongoDBSchema.findByIdAndUpdate({ _id: new ObjectId(id) }, { weight, workout, reps });
            if(!updateWorkOut){
                const error = new Error();
                error.message = `failure`;
                error.ResponseDescription = updateWorkOut
                reject(error)
            }
            serviceResponse = {
                message: 'success',
                ResponseDescription: 'Data Updated Successfully',
                response: updateWorkOut
            }
            resolve(serviceResponse);
        } catch (error) {
            serviceResponse = {
                message: 'failure',
                ResponseDescription: error.message,
            }
            reject(serviceResponse)
        }
    })
}

module.exports = {
    service
}