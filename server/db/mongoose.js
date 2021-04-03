require('dotenv').config({path:'./config/dev.env'})
const mongoose=require('mongoose')

const connectDB=async ()=>{
    try{
        const conn=await mongoose.connect(process.env.MONGODB_URI,{
            useNewUrlParser:true,
            useCreateIndex:true,
            useUnifiedTopology:true,
            useFindAndModify:false
        })
        console.log(`MongoDB connected at ${conn.connection.host}`)
    }
    catch(e){
        console.log('Database cannot be connected : ',e)
    }
}
connectDB()