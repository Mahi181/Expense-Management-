const express=require('express')
const cors=require('cors')
const dotenv=require('dotenv')
const morgan=require('morgan')
const colors=require('colors')
const connectDB = require('./config/connectDB')
//rest object
const app=express()

//dot env config
dotenv.config()

//database call
connectDB()

//middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());  //allow cross origin requests       


//routes
// app.get('/',(req,res)=>{
//     res.send('<h1>Hello from server</h1>')
// })
app.use('/api/v1/users',require('./routes/userRoute'))


//port
const PORT = 8080 || process.env.PORT;

//listen server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


