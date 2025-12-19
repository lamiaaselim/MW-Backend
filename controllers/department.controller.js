/**
 * Treat with model
 * Build Business Logic => CRUD Operation on Entity
 */

const DepartmentSchema = require('./../models/department.model')

exports.getAllDepartments = (req, res, next) => {
    // extract query string 
    // console.log(req.query);
    // console.log(req.query.id);
    DepartmentSchema.find({})
        .then((departments) => {
            res.status(200).json({ data: departments })
        })
        .catch((err) => {
            next(err)
        })
}
// break : 4:30 
exports.createDepartment = (req, res, next) => {
    // console.log(req.body);
    let newDepart = new DepartmentSchema({
        _id: req.body._id,
        name: req.body.name
    })
    newDepart.save()
        .then((newObj) => {
            res.status(200).json({ data: "Department Added ", newObj })
        })
        .catch((err) => {
            next(err)
        })
}

exports.updateDepartment = (req, res, next) => {
    DepartmentSchema.updateOne({ _id: req.body._id }, { $set: { name: req.body.name } })
        .then((updatedDepart) => {
            res.status(200).json({ data: "Department Updated", updatedDepart })
        })
        .catch((err) => { next(err) })
}

exports.getOneDepartment = (req, res, next) => {
    // extract parameter
    // console.log(req.params);
    // console.log(req.params.id);
    DepartmentSchema.findOne({ _id: req.params.id })
        .then((depart) => {
            // check if  depart is exist
            if (depart == null) {
                throw new Error('Department not Exist')
            }
            res.status(200).json({ data: depart })
        })
        .catch((err) => { next(err) })
}

exports.deleteDepartment = (req, res, next) => {
    res.status(200).json({ data: "Department Deleted" })
}