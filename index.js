const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const urlRoutes = require('./routes/urlRoutes');
const PORT = process.env.PORT || 8080;
require('dotenv').config();

app.use(cors());
app.use(express.json());

app.use('/', urlRoutes);

mongoose.connect(process.env.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => console.log(err));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
