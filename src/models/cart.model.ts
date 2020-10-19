import { ObjectID } from "mongodb";
import mongoose, { Schema, disconnect, model } from "mongoose";
const schema = new Schema({
  name: String,
  amount: Number,
  price: Number,
  prodactId: String,
  timestamp: { type: Date, default: Date.now() },
  userId: String,
});
const DB_URL = "mongodb://localhost:27017/online-shop";
const Carts = model("cart", schema);
export function addNewItem(data: any) {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(DB_URL)
      .then(() => {
        let item = new Carts(data);
        return item.save();
      })
      .then((item) => {
        mongoose.disconnect();
        resolve(item);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
