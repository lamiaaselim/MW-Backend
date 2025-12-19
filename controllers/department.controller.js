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

exports.getOneDepartment = (req, res, next) => {
    // extract parameter
    console.log(req.params);
    console.log(req.params.id);
    res.status(200).json({ data: { id: 1, name: "OOP" } })
}


exports.updateDepartment = (req, res, next) => {
    res.status(200).json({ data: "Department Updated" })
}
exports.deleteDepartment = (req, res, next) => {
    res.status(200).json({ data: "Department Deleted" })
}