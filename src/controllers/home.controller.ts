import { Request, Response, NextFunction } from "express";
import {
  GetAllProdacts,
  GetAllProdactsByCategory,
} from "../models/prodacts.model";
export function getHome(req: Request, res: Response, next: NextFunction) {
  let category = req.query.category;
  let prodactsFilter;
  let validCategories: any[] = ["phone", "lap", "pc"];
  if (category && validCategories.includes(category))
    prodactsFilter = GetAllProdactsByCategory(category);
  else prodactsFilter = GetAllProdacts();
  prodactsFilter
    .then((prodacts: any) => {
      req.flash("prodacts", prodacts);
      res.send(prodacts).status(200);
    })
    .catch((err) => {
      res.send(err);
    });
}
