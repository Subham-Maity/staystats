const dotenv = require("dotenv");
// dotenv.config({ path: "prod.env" });
dotenv.config({ path: "dev.env" });
console.log("ENV : ", process.env.NODE_ENV);

const express = require("express");
const cors = require("cors");
const app = express();
const connectDB = require("./config/dbConnection");
const PORT = process.env.PORT || 5000;
const checkAuth = require("./middlewares/authMiddleware")

app.use(express.json());
app.use(cors());

// Routes import
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const hotelRoutes = require("./routes/hotelRoutes");
const bookingRoutes = require("./routes/bookingsRoutes");

app.use("/", authRoutes);
app.use(checkAuth)
app.use("/", userRoutes);
app.use("/", hotelRoutes);
app.use("/", bookingRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});


(async () =>
  await connectDB()
    .then(() => {
      app.listen(PORT, () => {
        console.log(`Server is live on http://localhost:${PORT}`);
      });
    })
    .catch((err) => {
        console.log("Error: ", err);
      throw new Error(err);
    }))();
