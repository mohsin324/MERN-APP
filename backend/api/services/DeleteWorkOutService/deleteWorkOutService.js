// import DB
// import { ObjectId } from 'mongodb'
// import mongoDBSchema from "../../DB/schema";
const mongoDBSchema = require('../../DB/schema');
// const { ObjectId } = require('mongodb');

const { ObjectId } = require('mongodb');
let serviceName = 'DELETE_WORKOUT_SERVICE'
const service = async (req, res, next) => {
    let serviceResponse = {};
    console.log(`------------${serviceName}------------`);
    return new Promise(async(resolve, reject) => {
        const { id } = req.params;
        try{
            const deleteWorkOut = await mongoDBSchema.findByIdAndDelete({ _id: new ObjectId(id)})//.deleteOne({ _id: new ObjectId(id)});//.deleteOne({ _id: ObjectId(id)} )
            if(!deleteWorkOut){
                serviceResponse ={
                    message: 'failure',
                    responseCode: '500',
                    responseDescription: 'failed to delete data',
                    data: []
                }
                reject(serviceResponse)
            }
            serviceResponse = {
                message: 'success',
                responseCode: '00',
                responseDescription: 'deleted successfully',
                data: deleteWorkOut
            }
            resolve(serviceResponse)
        }catch(err){
            console.log(' err work out')
            serviceResponse ={
                message: 'failure',
                responseCode: '500',
                responseDescription: err.message
            }
            reject(serviceResponse)
        }
    })
}

module.exports = {
    service
}