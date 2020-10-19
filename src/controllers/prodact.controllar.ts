import { NextFunction, Request, Response } from "express";
import { ObjectID } from "mongodb";
import { getProdactsById } from "../models/prodacts.model";

export function getDetilsProdact(
  req: Request,
  res: Response,
  next: NextFunction
) {
  let id: any = req.params.id;
  getProdactsById(id).then((prodact) => {
    res.status(200).send(prodact);
  });
}
