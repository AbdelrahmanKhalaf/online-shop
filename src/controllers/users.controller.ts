import { NextFunction, Request, Response } from "express";
import { ObjectID } from "mongodb";
import { GetOneUser } from "../models/users.model";
export function getFristUser(req: Request, res: Response, next: NextFunction) {
  GetOneUser().then((user) => {
    const prodacts = req.flash("prodacts");
    res.status(200).send({ fristUser: user, prodacts: prodacts });
  });
}
