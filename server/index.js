require('dotenv').config();
const express = require('express');
const app = express();
const connectDB = require('./config/dbConnection');
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Hello World!');
    }
);

(async () => 
    await connectDB()
        .then(() => {
            app.listen(PORT, () => {
                console.log(`Server is live on http://localhost:${PORT}`);
            }
        );
    }).catch(err => {
        throw new Error(err);
    })
)();