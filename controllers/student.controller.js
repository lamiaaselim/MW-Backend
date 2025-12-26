/**
 * Treat with model
 * Build Business Logic => CRUD Operation on Entity
 */

const StudentSchema = require("./../models/student.model");
const DepartmentSchema = require("./../models/department.model");

exports.getAllStudents = async (req, res, next) => {
    try {
        const students = await StudentSchema.find({}).populate({
            path: "department",
            select: "name",
        });
        res.status(200).json({ data: students });
    } catch (err) {
        next(err);
    }
};

exports.createStudent = async (req, res, next) => {
    try {
        const department = await DepartmentSchema.findOne({
            _id: req.body.department,
        });
        if (!department) {
            const error = new Error("Department Not Exist");
            error.status = 404;
            throw error;
        }
        let newStu = new StudentSchema({
            _id: req.body._id,
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            department: req.body.department,
        });
        const newObj = await newStu.save();
        res.status(200).json({ data: "Student Added ", newObj });
    } catch (err) {
        next(err);
    }
};

exports.updateStudent = async (req, res, next) => {
    try {
        const updatedStudent = await StudentSchema.updateOne(
            { _id: req.body._id },
            { $set: { name: req.body.name } }
        );
        res.status(200).json({ data: "Student Updated", updatedStudent });
    } catch (err) {
        next(err);
    }
};

exports.getOneStudent = async (req, res, next) => {
    try {
        const student = await StudentSchema.findOne({ _id: req.params.id })
        if (!student) {
            const error = new Error("Student Not Exist");
            error.status = 404;
            throw error;
        }
        res.status(200).json({ data: student });
    } catch (err) { next(err); }
};

exports.deleteStudent = async (req, res, next) => {
    try {
        const student = await StudentSchema.findOne({ _id: req.params.id });
        if (!student) {
            const error = new Error("Student Not Exist");
            error.status = 404;
            throw error;
        }
        await StudentSchema.deleteOne({ _id: req.params.id });
        res.status(200).json({ data: "Student Deleted" });
    } catch (err) { next(err); }
};

exports.getAllStudentsView = async (req, res, next) => {
    try {
        const students = await StudentSchema.find({})
            .populate({ path: "department", select: "name" });
        res.render("students/index", {
            title: "Student List",
            students
        })
    }
    catch (err) { next(err); }
}
exports.getOneStudentView = async (req, res, next) => {
    try {
        const student = await StudentSchema.findOne({ _id: req.params.id })
        if (!student) {
            const error = new Error("Student Not Exist");
            error.status = 404;
            throw error;
        }
        res.render("students/details", {
            title: "Students Details",
            student
        });
    } catch (err) { next(err); }
}
