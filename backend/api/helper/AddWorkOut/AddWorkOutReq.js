const Joi = require('joi');
const addWorkOutReq = Joi.object({
    workout: Joi.string().required(),
    reps: Joi.number().integer().required(),
    weight: Joi.number().required()
})
module.exports = addWorkOutReq