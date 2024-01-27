import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from "./config/db.js";
import authRoutes from './routes/authRoute.js'
import cors from 'cors'
import categoryRoutes from './routes/CategoryRoutes.js'
import productRoutes from './routes/productRoutes.js'
//configure env
dotenv.config(); //here we have file in our root folder other wise er have to give path in json format ==> {path:""}


//database config
connectDB();

//rest object 
const app=express();


//middleware
app.use(cors());
app.use(express.json())      //phle hum parser ka use krte the ab json ka krte hh
app.use(morgan('dev'))


//routes
app.use('/api/v1/auth',authRoutes);
app.use('/api/v1/category',categoryRoutes);
app.use('/api/v1/product',productRoutes);

//restApi
app.get('/',(req,res)=>{
    res.send("<h1>Welcome to Ecommerce App<h1>");
});


const PORT = process.env.PORT || 8080;   //in case our env file have some error then we give an optional port 8080


//run 
app.listen(PORT,()=>{
    console.log(`server running on ${process.env.Dev_Mode} mode at ${PORT} port`.bgCyan.white)
})