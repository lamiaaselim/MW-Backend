/**
 * Treat with model
 * Build Business Logic => CRUD Operation on Entity
 */

const StudentSchema = require('./../models/student.model')
const DepartmentSchema = require('./../models/department.model')


exports.getAllStudents = (req, res, next) => {
    // extract query string 
    // console.log(req.query);
    // console.log(req.query.id);
    StudentSchema.find({})
        .populate({ path: "department", select: "name" })
        .then((Students) => {
            res.status(200).json({ data: Students })
        })
        .catch((err) => {
            next(err)
        })
}
exports.createStudent = (req, res, next) => {
    // console.log(req.body);
    let newStu = new StudentSchema({
        _id: req.body._id,
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        department: req.body.department,
    })
    DepartmentSchema.findOne({ _id: req.body.department })
        .then((data) => {
            if (data == null) {
                throw new Error('Department not Exist')
            }
            return newStu.save()
        })
        .then((newObj) => {
            res.status(200).json({ data: "Student Added ", newObj })
        })
        .catch((err) => {
            next(err)
        })
}

exports.updateStudent = (req, res, next) => {
    StudentSchema.updateOne({ _id: req.body._id }, { $set: { name: req.body.name } })
        .then((updatedDepart) => {
            res.status(200).json({ data: "Student Updated", updatedDepart })
        })
        .catch((err) => { next(err) })
}

exports.getOneStudent = (req, res, next) => {
    // extract parameter
    // console.log(req.params);
    // console.log(req.params.id);
    StudentSchema.findOne({ _id: req.params.id })
        .then((student) => {
            // check if  student is exist
            if (student == null) {
                throw new Error('Student not Exist')
            }
            res.status(200).json({ data: student })
        })
        .catch((err) => { next(err) })
}

exports.deleteStudent = (req, res, next) => {
    res.status(200).json({ data: "Student Deleted" })
}