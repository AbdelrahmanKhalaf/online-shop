"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const connect_mongodb_session_1 = __importDefault(require("connect-mongodb-session"));
const express_session_1 = __importDefault(require("express-session"));
const path_1 = __importDefault(require("path"));
const connect_flash_1 = __importDefault(require("connect-flash"));
const home_router_1 = __importDefault(require("./routers/home.router"));
const prodact_router_1 = __importDefault(require("./routers/prodact.router"));
const users_router_1 = __importDefault(require("./routers/users.router"));
const SesstionStore = connect_mongodb_session_1.default(express_session_1.default);
const app = express_1.default();
const Store = new SesstionStore({
    uri: "mongodb://localhost:27017/online-shop",
    collection: "sessions",
});
app
    .use(express_1.default.static(path_1.default.join(__dirname, "../assets/img")))
    .use(express_session_1.default({
    secret: "this is my secrt to hash express ",
    saveUninitialized: false,
    store: Store,
}))
    .use(connect_flash_1.default())
    .use("/online-shop/api", home_router_1.default)
    .use("/online-shop/api", prodact_router_1.default)
    .use("/online-shop/api", users_router_1.default);
const PORT = process.env.PORT || 3000;
app.listen(PORT, "127.0.0.1", () => {
    console.log(`listing now to PORT ${PORT}...`);
});
//# sourceMappingURL=server.js.map