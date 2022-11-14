const { getAllStudents, updatePaymentStatus, getpaidStudents } = require('../controller/studentController');

const router = require('express').Router();

router.get('/allstudents', getAllStudents)
router.get('/paidstudents', getpaidStudents)
router.patch('/students/:id/updatepaymentstatus', updatePaymentStatus)

module.exports = router;