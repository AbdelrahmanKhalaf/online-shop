"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDetilsProdact = void 0;
const prodacts_model_1 = require("../models/prodacts.model");
function getDetilsProdact(req, res, next) {
    let id = req.params.id;
    prodacts_model_1.getProdactsById(id).then((prodact) => {
        res.status(200).send(prodact);
    });
}
exports.getDetilsProdact = getDetilsProdact;
//# sourceMappingURL=prodact.controllar.js.map