import mongoose from "mongoose";
import express from "express";
mongoose.connect('mongodb+srv://arvamartin:arvamartin02@cluster0.bqytfu8.mongodb.net/');

const app = express();

app.use(express.json());

app.listen(5000, () => {console.log('app is running on port 5000')});