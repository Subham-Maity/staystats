const mongoose = require('mongoose');


const connectDB = async () => {
    try {
        const con = await mongoose.connect(process.env.DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log(`MongoDB connected: ${con.connection.host}`);
    } catch (err) {
        throw new Error(err);
    }
}

module.exports = connectDB;