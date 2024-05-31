const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors');
const dataRouter = require('./server/routes/data');
const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
mongoose.connect("mongodb://127.0.0.1:27017/vega");





app.use('/api/data', dataRouter);
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})
