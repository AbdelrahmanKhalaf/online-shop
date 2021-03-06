"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const home_controller_1 = require("../controllers/home.controller");
const router = express_1.Router();
router.get("/", home_controller_1.getHome);
exports.default = router;
//# sourceMappingURL=home.router.js.map