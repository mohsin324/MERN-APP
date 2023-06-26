const UserSchema = require('../DB/user-schema');

const signUp = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        // check user successfully signup or not
        const createUser = await UserSchema.signup(email, password);
        if (!createUser) {
            const err = new Error();
            console.log('!create user '+ createUser)
            err.message = 'user not created';
            return next(err)
        }
        return res.status(200).json({
            message: 'success',
            ResponseDescription: "user login successfully",
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
        return res.status(200).json({
            message: 'success',
            ResponseDescription: "user login successfully",
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