import express from "express";
import mongoose from "mongoose";

const userSchema =new mongoose.Schema({
    username:{
        type:string,
        required: true,
    },
    phoneNo:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true
    }
})