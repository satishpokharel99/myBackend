import dotenv from "dotenv"
import connectDB from './db/index.js'
dotenv.config() 

console.log("MONGO URI:", process.env.MONGODB_URI);



connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`Server is running at port: ${process.env.PORT}`)
    })
    app.on("error", (error)=>{
        console.log("ERR:", error);
        throw error;
    })
})
.catch((err) => {
    console.log("Mongodb db connnection failed!!!", err)
})