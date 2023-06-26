require('dotenv').config();
const UserSchema = require('../DB/user-schema');
const jwt = require('jsonwebtoken');
const secreteKey = process.env.SECRETE_KEY;
// create token
const token = async (user_id) => {
    const userToken = jwt.sign({user_id}, secreteKey, { expiresIn: '3d'});
    return userToken;
}
const signUp = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        // check user successfully signup or not
        const createUser = await UserSchema.signup(email, password);
        // token
        const userToken = await token(createUser._id)
        if (!createUser) {
            const err = new Error();
            err.message = 'user not created';
            return next(err)
        }
        return res.status(200).json({
            message: 'success',
            ResponseDescription: "user login successfully",
            token: userToken,
            user: createUser
        })
    } catch (error) {
        const err = new Error();
        err.message = error.message;
        return next(err)
    }
}
const logIn = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        // check user successfully login or not
        const findUser = await UserSchema.signin(email, password);
        if (!findUser) {
            const err = new Error();
            err.message = 'user not created';
            return next(err)
        }
        const userToken = await token(findUser._id)
        return res.status(200).json({
            message: 'success',
            ResponseDescription: "user login successfully",
            token: userToken,
            user: findUser
        })
    } catch (error) {
        const err = new Error();
        err.message = error.message;
        return next(err)
    }
}
module.exports = {
    signUp,
    logIn
}