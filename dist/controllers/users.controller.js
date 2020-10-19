"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFristUser = void 0;
const users_model_1 = require("../models/users.model");
function getFristUser(req, res, next) {
    users_model_1.GetOneUser().then((user) => {
        const prodacts = req.flash("prodacts");
        res.status(200).send({ fristUser: user, prodacts: prodacts });
    });
}
exports.getFristUser = getFristUser;
//# sourceMappingURL=users.controller.js.map