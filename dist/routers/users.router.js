"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_controller_1 = require("../controllers/users.controller");
const router = express_1.Router();
router.get("/user", users_controller_1.getFristUser);
exports.default = router;
//# sourceMappingURL=users.router.js.map