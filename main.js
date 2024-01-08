import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import loginRoutings from "./login/index.js"
import courseRoutings from "./courses/index.js"
import imgUploadRoutings from "./image-upload/index.js"
import verifyToken from "./jwt/verifytoken.js"
const app = express()
dotenv.config()

mongoose.connect(process.env.DB_URL)
    .then( console.log('db connected'))
    .catch(err =>{
            console.log('error',err)
    })

app.use(express.json());
app.use('/admin', loginRoutings);
app.use('/courses', courseRoutings);
app.use('/img', imgUploadRoutings)
app.use(verifyToken)

app.listen(5000,()=>{
    console.log(`port on ${process.env.port}`)
});



