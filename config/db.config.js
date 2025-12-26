const mongoose = require("mongoose")

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URI)
        console.log("DB Connected Successfully")
    } catch (error) {
        console.log("DB Connection Failed: ", error);
        process.exit(1);
    }
}

module.exports = connectDB;