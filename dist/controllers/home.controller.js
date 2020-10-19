"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHome = void 0;
const prodacts_model_1 = require("../models/prodacts.model");
function getHome(req, res, next) {
    let category = req.query.category;
    let prodactsFilter;
    let validCategories = ["phone", "lap", "pc"];
    if (category && validCategories.includes(category))
        prodactsFilter = prodacts_model_1.GetAllProdactsByCategory(category);
    else
        prodactsFilter = prodacts_model_1.GetAllProdacts();
    prodactsFilter
        .then((prodacts) => {
        req.flash("prodacts", prodacts);
        res.send(prodacts).status(200);
    })
        .catch((err) => {
        res.send(err);
    });
}
exports.getHome = getHome;
//# sourceMappingURL=home.controller.js.map