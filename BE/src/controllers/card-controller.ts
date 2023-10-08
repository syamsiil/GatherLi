import { Request, Response } from "express";
import threadController from "./thread-controller";
import cardService from "../services/card-service";

class CardController {
  async find(req: Request, res: Response) {
    try {
      const loginSession = res.locals.loginSession;

      const response = await cardService.find(req.query, loginSession);
      return res.status(200).json(response);
    } catch (error) {
      console.log("ini erorr", error);
      return res
        .status(500)
        .json({ error: "Error while getting find Card controller" });
    }
  }

  async findOne(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const loginSession = res.locals.loginSession;

      const response = await cardService.findOne(id);
      return res.status(200).json(response);
    } catch (error) {
      return res.status(500).json({
        error: "Error getting findOne Card Controller",
      });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const loginSession = res.locals.loginSession;

      const response = await cardService.delete(id);
      return res.status(200).json(response);
    } catch (err) {
      return res.status(500).json({
        error: "Error delete card",
      });
    }
  }

  create(req: Request, res: Response) {
    cardService.create(req, res);
  }
}
export default new CardController();
