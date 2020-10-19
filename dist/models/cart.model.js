"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addNewItem = void 0;
const mongoose_1 = __importStar(require("mongoose"));
const schema = new mongoose_1.Schema({
    name: String,
    amount: Number,
    price: Number,
    prodactId: String,
    timestamp: { type: Date, default: Date.now() },
    userId: String,
});
const DB_URL = "mongodb://localhost:27017/online-shop";
const Carts = mongoose_1.model("cart", schema);
function addNewItem(data) {
    return new Promise((resolve, reject) => {
        mongoose_1.default
            .connect(DB_URL)
            .then(() => {
            let item = new Carts(data);
            return item.save();
        })
            .then((item) => {
            mongoose_1.default.disconnect();
            resolve(item);
        })
            .catch((err) => {
            reject(err);
        });
    });
}
exports.addNewItem = addNewItem;
//# sourceMappingURL=cart.model.js.map