const express = require('express');
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const connectDb = require('./config/connectDB');
const userRoutes = require('./Routes/User.routes');

dotenv.config();

connectDb(); 

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/users', userRoutes);

app.get('/', (req, res) => {
    res.send('Hello World');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
