import { ObjectID } from "mongodb";
import mongoose, { Schema, disconnect, model } from "mongoose";
const schema = new Schema({
  name: String,
  image: String,
  phone: Number,
  email: String,
  address: String,
});
const DB_URL = "mongodb://localhost:27017/online-shop";
const Users = model("user", schema);
export function GetOneUser() {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(DB_URL)
      .then(() => {
        return Users.findOne({});
      })
      .then((products) => {
        mongoose.disconnect();
        resolve(products);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
