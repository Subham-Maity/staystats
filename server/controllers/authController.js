const bcrypt = require('bcryptjs');
const User = require('../models/userModel');
const generateJWT = require('../config/generateToken');


const signup = async (req, res) => {
    const {username, password} = req.body;

    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = await User.create({
            username,
            password: hashedPassword
        });

        const jwt = generateJWT(newUser._id);
        res.status(200).json({message: "User created successfully", user: newUser,jwt: jwt});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const login = async (req, res) => {
    const {username, password} = req.body;

    try {
        
        const user = await User.findOne({username: username});

        if(!user) {
            res.status(404).json({message: "User not found"});
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password);

        if(!isPasswordCorrect) {
            res.status(400).json({message: "Invalid credentials"});
        }

        const jwt = generateJWT(user._id);

        res.status(200).json({message: "Login successful", user: user, jwt: jwt});

    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

module.exports = {
    signup,
    login
}