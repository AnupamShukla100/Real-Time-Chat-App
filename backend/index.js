import express from 'express'
import dotenv from "dotenv";
const app=express();
import mongoose from 'mongoose';


dotenv.config();
 const  PORT= process.env.PORT || 3001;
 const URI=process.env.MONGO_URI;

 try{
  mongoose.connect(URI);
  console.log("connected to MONGODB");
 }
  catch(error){
    console.log(error);
  }

app.get('/', (req, res) => {
  res.send('Hello World !')
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
