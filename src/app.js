import  express  from "express"
import cors from "cors"
import cookieParser from "cookie-parser"  // users ka browser se cookies access + set 

const app = express()


app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials:true
}))


app.use(express.json({limit: "16kb" }))


//url change in many types like +  ,  %20 for this reason we use below
app.use(express.urlencoded({extended: true, limit:"16kb"}))


app.use(express.static("public")) //files, folder storing public assets


app.use(cookieParser())  // for cookieparser above



//routes import

import userRouter from './routes/user.routes.js'

app.use("/api/v1/users", userRouter)


// http://localhost:8000/api/v1/users/register

export { app }