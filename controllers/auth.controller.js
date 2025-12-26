const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("./../models/user.model");

exports.register = async (req, res, next) => {
    try {
        const { username, email, password } = req.body;

        //1. check if user exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        //2. hash the password
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);

        //3. create user
        const newUser = new User({
            username,
            email,
            password: hashPassword,
        });

        //4. res
        await newUser.save();
        res
            .status(201)
            .json({ message: "User registered successfully", user: newUser });
    } catch (error) {
        next(error);
    }
};
exports.login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        //1. check if user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        //2. check password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }
        //3. create token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: "1d",
        });

        //4. res
        res.status(200).json({ message: "Login successful", token });
    } catch (error) {
        next(error);
    }
};
