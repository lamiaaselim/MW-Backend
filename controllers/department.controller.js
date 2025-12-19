/**
 * Treat with model
 * Build Business Logic => CRUD Operation on Entity
 */

exports.getAllDepartments = (req, res, next) => {
    // extract query string 
    console.log(req.query);
    console.log(req.query.id);
    res.status(200).json({ data: [{ id: 1, name: "OOP" }, { id: 2, name: "OS" }] })
}
exports.getOneDepartment = (req, res, next) => {
    // extract parameter
    console.log(req.params);
    console.log(req.params.id);
    res.status(200).json({ data: { id: 1, name: "OOP" } })
}

exports.createDepartment = (req, res, next) => {
    console.log(req.body);
    res.status(200).json({ data: "Department Added" })
}
exports.updateDepartment = (req, res, next) => {
    res.status(200).json({ data: "Department Updated" })
}
exports.deleteDepartment = (req, res, next) => {
    res.status(200).json({ data: "Department Deleted" })
}