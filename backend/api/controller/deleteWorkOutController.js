// req res
const deleteWorkOutRes = require('../helper/DeleteWorkOut/deleteWorkOutRes')
const deleteWorkOut = (req, res, next) => {
    return deleteWorkOutRes.deleteWorkout(req, res, next)
}
module.exports = {
    deleteWorkOut
}