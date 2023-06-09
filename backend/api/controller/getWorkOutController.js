// get work out res
const getWorkOutRes = require('../helper/GetWorkOut/getWorkOutRes');
const getWorkOut = (req, res, next) => {
    return getWorkOutRes(req, res, next)
}
module.exports = {
    getWorkOut
};