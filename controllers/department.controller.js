/**
 * Treat with model
 * Build Business Logic => CRUD Operation on Entity
 * Break => 3:40
 */

const DepartmentSchema = require("./../models/department.model");
const DepartmentService = require("./../services/department.service");

exports.getAllDepartments = async (req, res, next) => {
    try {
        const departs = await DepartmentService.getAll();
        res.status(200).json({ data: departs });
    } catch (err) {
        next(err);
    }
};
exports.createDepartment = async (req, res, next) => {
    try {
        const newDepart = await DepartmentService.create(req.body);
        res.status(200).json({ data: "Department Added ", newDepart });
    } catch (err) {
        next(err);
    }
};

exports.updateDepartment = async (req, res, next) => {
    try {
        const updatedDepart = await DepartmentService.update(req.body);
        res.status(200).json({ data: "Department Updated", updatedDepart });
    } catch (err) {
        next(err);
    }
};

exports.getOneDepartment = async (req, res, next) => {
    try {
        const depart = await DepartmentService.getById(req.params.id);
        res.status(200).json({ data: depart });
    } catch (err) { next(err); }

};

exports.deleteDepartment = async (req, res, next) => {
    try {
        const depart = await DepartmentService.deleteById(req.params.id);
        res.status(200).json({ data: "Department Deleted", depart });
    } catch (err) { next(err); }
};

exports.getAllDepartmentsView = async (req, res, next) => {
    try {
        const departs = await DepartmentSchema.find({});
        res.render("departments/index", {
            title: "Departments List",
            departs
        })
    }
    catch (err) { next(err); }
}
exports.getOneDepartmentView = async (req, res, next) => {
    try {
        const depart = await DepartmentSchema.findOne({ _id: req.params.id });
        if (!depart) {
            const error = new Error("Department Not Exist");
            error.status = 404;
            throw error;
        }
        res.render("departments/details", {
            title: "Department Details",
            depart
        })
    } catch (err) { next(err); }

}