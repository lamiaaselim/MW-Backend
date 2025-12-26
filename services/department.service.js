const DepartmentSchema = require("./../models/department.model");

class DepartmentService {
    static async getAll() {
        return await DepartmentSchema.find({});
    }
    static async create(data) {
        const newObj = new DepartmentSchema({
            _id: data._id,
            name: data.name,
            hidden: data.hidden || false
        })
        return await newObj.save();
    }
    static async update(data) {
        return await DepartmentSchema.updateOne(
            { _id: data._id },
            { $set: { name: data.name, hidden: data.hidden } }
        );
    }
    static async getById(id) {
       const instance = await DepartmentSchema.findOne({ _id: id });
       if (!instance) {
           const error = new Error("Department Not Exist");
           error.status = 404;
           throw error;
       }
       return instance;
    }
    static async deleteById(id) {
       const instance = await DepartmentSchema.findOne({ _id: id });
       if (!instance) {
           const error = new Error("Department Not Exist");
           error.status = 404;
           throw error;
       }
       return instance;
    }
}


module.exports = DepartmentService;