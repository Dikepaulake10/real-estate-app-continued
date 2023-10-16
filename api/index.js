import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRouter from './routes/auth.route.js'
import userRouter from './routes/user.route.js'
dotenv.config();

mongoose.connect(process.env.MONGO).then(() => {
    console.log('connected to database');
})
.catch((err)=> {
    console.log(err)
})

const app = express();
app.use(express.json())

app.listen(3000,()=>{
    console.log('Server is  running on port 3000')
})


app.use("/api/user", userRouter)
app.use("/api/auth", authRouter)

app.use((err,res,req,next ) =>{
    const statusCode = err.statusCode || 500
    const message = err.message || 'Internal Server Error'
    return res.status(statusCode).json({
        success:false,
        statusCode,
        message
    })
}
)