"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const prodact_controllar_1 = require("../controllers/prodact.controllar");
const router = express_1.Router();
router.get("/prodact/:id", prodact_controllar_1.getDetilsProdact);
exports.default = router;
//# sourceMappingURL=prodact.router.js.map