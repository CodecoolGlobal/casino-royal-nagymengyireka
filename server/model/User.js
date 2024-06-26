import mongoose from "mongoose";
const { Schema, model } = mongoose;

const userSchema = new Schema({
  coin_balance: Number,
  game_history: Array,
  username: String,
  password: String,
  icon: String,
  emailAdress: String,
  age: Number
});

export default model('User', userSchema)

