const bcrypt = require('bcryptjs')
const mongoose = require('mongoose');
const schema = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});
// make user signup using static method
schema.statics.signup = async function(email, password){
    // const exist = await this.findOne({ email });
    // validate request
    if(!email || !password){
        throw new Error('All fields must be filled!')
    }
    // check user exist or not
    const exist = await this.findOne({email: email });
    if(exist){
        throw new Error('Email already exist!');
    }
    // generate salt for adding into password
    const genSalt = await bcrypt.genSalt(10);
    // create hash password
    const hashPassword = await bcrypt.hash(password, genSalt);
    const user = await this.create({ email: email, password: hashPassword });
    return user;
}
// make user login using static method
schema.statics.signin = async function(email, password){
    // check both email or password valid or not
    if(!email || !password){
        throw new Error('All fields must be filled!');
    }
    // check exist or not
    const exist = await this.findOne({ email: email });
    if(!exist){
        throw new Error(`this user Email ${email} does not exist`);
    }
    // compare user password with DB password
    const match = bcrypt.compare(password, exist.password);
    // not valid user
    if(!match){
        throw new Error('Password does not matched!');
    }
    return exist
}
const UserSchema = mongoose.model('USER-MODEL', schema);
module.exports = UserSchema