const Student = require('../database/model/studentModel');

const getAllStudents = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = 5;
        const total = await Student.countDocuments({});
        const students = await Student.find({}).limit(limit).skip((page - 1) * limit)
        return res.json({ students, total }).status(200)
    } catch (error) {
        console.log(error);
    }
}

const getpaidStudents = async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = 5;
    const paidStudents = await Student.find({ is_paid: true }).limit(limit).skip((page - 1) * limit);
    const totalPages = await Student.find({ is_paid: true }).count();
    res.json({ paidStudents, totalPages })
}

const updatePaymentStatus = async (req, res) => {
    const studentId = req.params.id;
    await Student.findOneAndUpdate({ _id: studentId }, {
        is_paid: true
    }).then(() => {
        res.json({ message: `${studentId} updated successfully` })
    })
}

module.exports = {
    getAllStudents,
    updatePaymentStatus,
    getpaidStudents
}