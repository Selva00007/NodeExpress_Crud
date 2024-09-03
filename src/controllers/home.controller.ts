import { Request, Response } from "express";

export function welcome(req: Request, res: Response): Response {
    // {
    //     console.log("home.controller.ts Called");
    // }
  return res.json({ message: "Welcome to Selva application." });
}