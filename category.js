import express from "express";
import mongoose from "mongoose";

const categorySchema= new mongoose.Schema({
     petType:{
        type:String,
        required:true,
    },
    id:{
        type:String,
        required:true,
        unique:true,
    }
});





export default mongoose.model("Category", categorySchema);