const express = require('express');
const router = express.Router();
const authMiddleWare = require('../middleware/auth');
// controller
const { addWorkOut } = require('../controller/addWorkOutController');
const { getWorkOut } = require('../controller/getWorkOutController');
const { deleteWorkOut } = require('../controller/deleteWorkOutController');
const { UpdateWorkOutController } = require('../controller/UpdateWorkOutController');

// middle ware
router.use(authMiddleWare);
// routes
router.post(`/addWorkout`, addWorkOut);
router.get('/getWorkOut', getWorkOut);
router.route(`/deleteworkout/:id`).delete(deleteWorkOut);
// update workout
router.route(`/updateworkout/:id`).post(UpdateWorkOutController);




module.exports = router;