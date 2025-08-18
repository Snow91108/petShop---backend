import express from "express";
import mongoose from "mongoose";
import Category from "./category.js";
import User from "./user.js";

const app= express();
app.use(express.json());

// pet schema
const petSchema =new mongoose.Schema({
    petName:{type:String, required:true},
    petAge:{type:Number, required: true },
    price:{type:Number, required: true,},
    petWeight:{type:String, required:true,},
    category :{type: mongoose.Schema.Types.ObjectId, ref:"Category", required:true},
})

const Pet = mongoose.model("Pet", petSchema);
 
//----routes

//Add category
app.post("/category", async (req, res) => {
    const category= new Category(req.body);
    await category.save();
    res.send(category);
})

//show categories
app.get("/category", async (req, res) => {
    const categories = await Category.find();
    res.send(categories);
})

//Delete category
app.delete("/category/:id", async (req, res) => {
    const category = await Category.findByIdAndDelete(req.params.id);
    if (!category) {
        return res.status(404).send("Category not found");
    }
    res.send(category);    
})
//Show pets
app.get("/pet", async (req, res) => {
    const pets = await Pet.find().populate("category");
    res.send(pets);
})

//Add pets
app.post("/pet", async (req, res) => {
    const pets= new Pet(req.body);         
    await pets.save();
    res.send(pets);
})

//delete pets
app.delete("/pet/:id", async (req, res) => {
    const pet = await Pet.findByIdAndDelete(req.params.id);
    if (!pet) {
        return res.status(404).send("Pet not found");
    }
    res.send(pet);
})

//add user
app.post("/user", async (req, res) => {
    const user = await User.find();
    res.send(user);
})


// connect DB and start server
mongoose.connect("mongodb+srv://sachinrv19:PvNCWOTzbIDyOi7h@cluster0.1qoem00.mongodb.net/petShopDB")
.then(()=>{
    console.log("Connected to MongoDB");
    app.listen(3000, () => console.log(`Server is running on port ${3000}`));
    })
    .catch((err) => console.log(err));