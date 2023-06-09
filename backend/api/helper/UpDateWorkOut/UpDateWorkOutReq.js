const Joi = require('joi');
const UpdateWorkOutReq = Joi.object({
    workout: Joi.string().required(),
    reps: Joi.number().integer().required(),
    weight: Joi.number().required()

})

module.exports = UpdateWorkOutReq;