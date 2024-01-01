const express=require('express')
const dotenv=require('dotenv').config()
const cors=require('cors')
const{mongoose}=require('mongoose')  
const cookieParser=require('cookie-parser')

const ocrRoutes = require('./routes/ocrRoutes');
//initializing express app
const app=express()

//database connection
mongoose.connect(process.env.MONGO_URL)
.then(() => {
    console.log('Connected to DB');
})
.catch((err) => {
    console.log('Error connecting to DB', err.message);
});


app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({extended:false}))
app.use('/',require('./routes/authRoutes'))
app.use('/api', ocrRoutes)
app.use('/tablet', require('./routes/tabRoutes')); 

const port=8000
app.listen(port,()=>console.log(`Server is running on port:${port}`))