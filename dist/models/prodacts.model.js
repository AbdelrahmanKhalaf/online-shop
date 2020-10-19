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
exports.getProdactsById = exports.GetAllProdactsByCategory = exports.GetAllProdacts = void 0;
const mongoose_1 = __importStar(require("mongoose"));
const schema = new mongoose_1.Schema({
    name: String,
    image: String,
    price: Number,
    description: String,
    category: String,
});
const DB_URL = "mongodb://localhost:27017/online-shop";
const Prodacts = mongoose_1.model("prodact", schema);
function GetAllProdacts() {
    return new Promise((resolve, reject) => {
        mongoose_1.default
            .connect(DB_URL)
            .then(() => {
            return Prodacts.find({});
        })
            .then((products) => {
            mongoose_1.default.disconnect();
            resolve(products);
        })
            .catch((err) => {
            reject(err);
        });
    });
}
exports.GetAllProdacts = GetAllProdacts;
function GetAllProdactsByCategory(category) {
    return new Promise((resolve, reject) => {
        mongoose_1.default
            .connect(DB_URL)
            .then(() => {
            return Prodacts.find({ category: category });
        })
            .then((products) => {
            mongoose_1.default.disconnect();
            resolve(products);
        })
            .catch((err) => {
            reject(err);
        });
    });
}
exports.GetAllProdactsByCategory = GetAllProdactsByCategory;
function getProdactsById(id) {
    return new Promise((resolve, reject) => {
        mongoose_1.default
            .connect(DB_URL)
            .then(() => {
            return Prodacts.findById(id);
        })
            .then((products) => {
            mongoose_1.default.disconnect();
            resolve(products);
        })
            .catch((err) => {
            reject(err);
        });
    });
}
exports.getProdactsById = getProdactsById;
//# sourceMappingURL=prodacts.model.js.map