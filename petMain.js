import express from "express";
import mongoose from "mongoose";
import Category from "./category.js";


const petSchema =new mongoose.Schema({
    petName:{
        type:String,
        required:true
    },
    petAge:{
        type:Number,
        required: true
    },
    price:{
        type:Number,
        required: true,
    },
    petWeight:{
        type:Number,
        required:true,
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required:true
    }
})

export default mongoose.model("Pet", petSchema);


