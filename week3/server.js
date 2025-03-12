const express = require('express');
const mongoose = require('mongoose');
const notificationRoute = require('./routes/notification.route.js');
const dotenv = require('dotenv')

dotenv.config();

const app = express();
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
