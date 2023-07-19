const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const checkAuth = (req, res, next) => {
    const { authToken } = req.headers;
    if (!authToken) {
        return res.status(401).json({
            message: "You are not authorized to access this resource"
        });
    } else{
        try {
            const {id} = jwt.verify(authToken, process.env.JWT_SECRET);
            const user = User.findById(id);
            if(!user) {
                return res.status(401).json({
                    message: "You are not authorized to access this resource"
                });
            }
            next();
        } catch (error) {
            return res.status(401).json({
                message: "You are not authorized to access this resource"
            });
        }
    }
}

module.exports = checkAuth;