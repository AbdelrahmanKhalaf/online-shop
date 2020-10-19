import { ObjectID } from "mongodb";
import mongoose, { Schema, disconnect, model } from "mongoose";
const schema = new Schema({
  name: String,
  image: String,
  price: Number,
  description: String,
  category: String,
});
const DB_URL = "mongodb://localhost:27017/online-shop";
const Prodacts = model("prodact", schema);
export function GetAllProdacts() {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(DB_URL)
      .then(() => {
        return Prodacts.find({});
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
export function GetAllProdactsByCategory(category: any) {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(DB_URL)
      .then(() => {
        return Prodacts.find({ category: category });
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
export function getProdactsById(id: any) {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(DB_URL)
      .then(() => {
        return Prodacts.findById(id);
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
