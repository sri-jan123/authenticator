const express=require('express')
const dotenv=require('dotenv')
dotenv.config()
const mongoose=require('mongoose')
const app=express()
const cookieParser=require('cookie-parser')
const cors=require('cors')
const authRoute=require('./routes/auth')

const connectDB=async()=>{
    try{
      await mongoose.connect(process.env.MONGO_URI)
      console.log("database connected")
    }
    catch(err){
      console.log(err)
    }
}

app.use(
  cors({
    origin: "https://authenticator-sand.vercel.app",
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());
app.use('/api/auth',authRoute)


app.listen(process.env.PORT,()=>{
    connectDB()
    console.log(`server running on PORT ${process.env.PORT}`)
})