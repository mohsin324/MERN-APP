const express = require('express');
const router = express.Router();
// controller
const { addWorkOut } = require('../controller/addWorkOutController');
const { getWorkOut } = require('../controller/getWorkOutController');
const { deleteWorkOut } = require('../controller/deleteWorkOutController');
const { UpdateWorkOutController } = require('../controller/UpdateWorkOutController');


// routes
router.post(`/addWorkout`, addWorkOut);
router.get('/getWorkOut', getWorkOut);
router.route(`/deleteworkout/:id`).delete(deleteWorkOut);
// update workout
router.route(`/updateworkout/:id`).post(UpdateWorkOutController);




module.exports = router;