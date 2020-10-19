import express, { Application, Router } from "express";
import sessionMongo from "connect-mongodb-session";
import session from "express-session";
import path from "path";
import flash from "connect-flash";
import HomeRouter from "./routers/home.router";
import ProdactRouter from "./routers/prodact.router";
import Users from "./routers/users.router";
const SesstionStore = sessionMongo(session);
const app: Application = express();
const Store = new SesstionStore({
  uri: "mongodb://localhost:27017/online-shop",
  collection: "sessions",
});
app
  .use(express.static(path.join(__dirname, "../assets/img")))
  .use(
    session({
      secret: "this is my secrt to hash express ",
      saveUninitialized: false,
      store: Store,
    })
  )
  .use(flash())
  .use("/online-shop/api", HomeRouter)
  .use("/online-shop/api", ProdactRouter)
  .use("/online-shop/api", Users);
const PORT: any = process.env.PORT || 3000;
app.listen(PORT, "127.0.0.1", () => {
  console.log(`listing now to PORT ${PORT}...`);
});
/// becrypt.compare => to Comparison encrypt
