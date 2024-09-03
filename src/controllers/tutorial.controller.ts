import { Request, Response } from "express";
import Tutorial from "../models/tutorial.models";
import tutorialRepository from "../repository/tutorial.repository";

export default class TutorialController {
    
  async create(req: Request, res: Response) {
    // {
    //     console.log("tutorial.controller.ts Called");
    // }
    try {
      // res.status(201).json({
      //   message: "create OK",
      //   reqBody: req.body
      // });
      const tutorial: Tutorial = req.body;
      const savedTutorial = await tutorialRepository.save(tutorial);

      res.status(201).send(savedTutorial);
    } catch (err) {
      res.status(500).json({
        message: "Internal Server Error!"
      });
    }
  }

  async findAll(req: Request, res: Response) {
    const title = typeof req.query.title === "string" ? req.query.title : "";
    try {
      // res.status(200).json({
      //   message: "findAll OK"
      // });
      const tutorials = await tutorialRepository.retrieveAll({
        title: title,
        published: false
      });

      res.status(200).send(tutorials);
    } catch (err) {
      res.status(500).json({
        message: "Internal Server Error!"
      });
    }
  }

  async findOne(req: Request, res: Response) {
    const id: number = parseInt(req.params.id);
    try {
      // res.status(200).json({
      //   message: "findOne OK",
      //   reqParamId: req.params.id
      // });
      const tutorial = await tutorialRepository.retrieveById(id);

      if (tutorial) res.status(200).send(tutorial);
      else
        res.status(404).send({
          message: `Cannot find Tutorial with id=${id}.`
        });
    } catch (err) {
      res.status(500).json({
        message: "Internal Server Error!"
      });
    }
  }

  async update(req: Request, res: Response) {
    let tutorial: Tutorial = req.body;
    tutorial.id = parseInt(req.params.id);
    try {
      // res.status(200).json({
      //   message: "update OK",
      //   reqParamId: req.params.id,
      //   reqBody: req.body
      // });
      const num = await tutorialRepository.update(tutorial);

      if (num == 1) {
        res.send({
          message: "Tutorial was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Tutorial with id=${tutorial.id}. Maybe Tutorial was not found or req.body is empty!`
        });
      }
    } catch (err) {
      res.status(500).json({
        message: "Internal Server Error!"
      });
    }
  }

  async delete(req: Request, res: Response) {
    const id: number = parseInt(req.params.id);

    try {
      const num = await tutorialRepository.delete(id);

      // res.status(200).json({
      //   message: "delete OK",
      //   reqParamId: req.params.id
      // });
      if (num == 1) {
        res.send({
          message: "Tutorial was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`,
        });
      }

    } catch (err) {
      res.status(500).json({
        message: "Internal Server Error!"
      });
    }
  }
}
