"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addCart = void 0;
const cart_model_1 = require("../models/cart.model");
function addCart(req, res, next) {
    cart_model_1.addNewItem({
        name: req.body.name,
        amount: req.body.amount,
        price: req.body.price,
        prodactId: req.body.prodactId,
        userId: req.body.userId,
        timestamp: req.body.timestamp,
    }).then((resullt) => {
        res.status(200).send(resullt);
    });
}
exports.addCart = addCart;
//# sourceMappingURL=cart.controller.js.map