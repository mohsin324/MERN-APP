const express = require('express');
const cors = require('cors');
const app = express();
// require routes
const router = require('./api/routes/routes');
const userRouter = require('./api/routes/user-route');
// require middleware
const notFound = require('./api/middleware/notFound');
const errorHandler = require('./api/middleware/errorHandler');

// middleware
app.use(cors());
app.use(express.json());
// routes
app.use('/api/v1/user/', userRouter);
app.use('/api/v1/', router);
// not found
app.use(notFound);
// error handler
app.use(errorHandler);


// export
module.exports = app
