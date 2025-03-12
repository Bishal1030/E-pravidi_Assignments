<<<<<<< HEAD
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const warehouseRoutes = require("./routes/warehouseRoutes");
const notificationRoute = require("./routes/notificationRoutes");
const productRoutes = require("./routes/productRoutes");

=======
const express = require('express');
const mongoose = require('mongoose');
const notificationRoute = require('./routes/notification.route.js');
const dotenv = require('dotenv')
>>>>>>> upstream/main

dotenv.config();

const app = express();
<<<<<<< HEAD
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.use("/warehouses", warehouseRoutes.default || warehouseRoutes);
app.use("/api/v1", notificationRoute);
app.use("/", productRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
=======
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Database Connection
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log('Database Connection Error:', err));

app.use('/api/v1', notificationRoute);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
>>>>>>> upstream/main
