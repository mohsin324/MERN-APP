require('dotenv').config();
const jwt = require('jsonwebtoken');
const UserSchema = require('../DB/user-schema');
const secreteKey = process.env.SECRETE_KEY;
// auth middleware
const authMiddleWare = async (req, res, next) => {
    try {
        // req.authorization
        const { authorization } = req.headers;
        console.log(authorization + ' authorization');
        if (!authorization || !authorization.startsWith(`Bearer `)) {
            throw new Error('User no authorized!')
        }
        // get token from authorization
        const token = authorization.split(' ')[1];
        // decode token 
        const decode = jwt.verify(token, secreteKey);
        const { user_id } = decode;
        // check valid user or not
        req.user = await UserSchema.findOne({ _id: user_id }).select('_id');
        return next()
    } catch (error) {
        // handle error
        const err = new Error();
        err.message = error.message;
        return next(err)
    }
}

module.exports = authMiddleWare