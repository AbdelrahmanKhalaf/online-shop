import { NextFunction, Request, Response } from "express";
import { addNewItem } from "../models/cart.model";
export function addCart(req: Request, res: Response, next: NextFunction) {
  addNewItem({
    name: req.body.name,
    amount: req.body.amount,
    price: req.body.price,
    prodactId: req.body.prodactId,
    userId: req.body.userId,
    timestamp: req.body.timestamp,
  }).then((resullt: any) => {
    res.status(200).send(resullt);
  });
}
