const express= require('express');
const joi= require('joi');
const bodyparser= require('body-parser');
require('dotenv').config();
    


const app = express();
const PORT= process.env.PORT|| 3000;




app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.listen((PORT)=>{
console.log(`the app is running on port of ${PORT}`);
})