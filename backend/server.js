require('dotenv').config();
const app = require('./index');
const port = process.env.PORT || 3000;
const connect = require('./api/DB/connect')

try{
    connect
    .then(() => {
        app.listen(port, () => {
        console.log(`server listen at port ${port} `);
        console.log('connected to DB')
        })
    })
    .catch((err) => {
        console.log(err)
    })
}catch(err){
    console.log(err);
}