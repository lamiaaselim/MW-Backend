/**
 * Treat with model
 * Build Business Logic => CRUD Operation on Entity
 */

const DepartmentSchema = require("./../models/department.model");

exports.getAllDepartments = async (req, res, next) => {
    try {
        const departs = await DepartmentSchema.find({});
        res.status(200).json({ data: departs });
    } catch (err) {
        next(err);
    }
};
exports.createDepartment = async (req, res, next) => {
    try {
        const newDepart = new DepartmentSchema({
            _id: req.body._id,
            name: req.body.name,
        });
        const newObj = await newDepart.save();
        res.status(200).json({ data: "Department Added ", newObj });
    } catch (err) {
        next(err);
    }
};

exports.updateDepartment = async (req, res, next) => {
    try {
        const updatedDepart = await DepartmentSchema.updateOne(
            { _id: req.body._id },
            { $set: { name: req.body.name } }
        );
        res.status(200).json({ data: "Department Updated", updatedDepart });
    } catch (err) {
        next(err);
    }
};

exports.getOneDepartment = async (req, res, next) => {
    try {
        const depart = await DepartmentSchema.findOne({ _id: req.params.id });
        if (!depart) {
            const error = new Error("Department Not Exist");
            error.status = 404;
            throw error;
        }
        res.status(200).json({ data: depart });
    } catch (err) { next(err); }

};

exports.deleteDepartment = async (req, res, next) => {
    try {
        await DepartmentSchema.deleteOne({ _id: req.params.id });
        res.status(200).json({ data: "Department Deleted" });
    } catch (err) { next(err); }
};
