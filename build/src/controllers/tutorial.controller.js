"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tutorial_repository_1 = __importDefault(require("../repository/tutorial.repository"));
class TutorialController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // {
            //     console.log("tutorial.controller.ts Called");
            // }
            try {
                // res.status(201).json({
                //   message: "create OK",
                //   reqBody: req.body
                // });
                const tutorial = req.body;
                const savedTutorial = yield tutorial_repository_1.default.save(tutorial);
                res.status(201).send(savedTutorial);
            }
            catch (err) {
                res.status(500).json({
                    message: "Internal Server Error!"
                });
            }
        });
    }
    findAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const title = typeof req.query.title === "string" ? req.query.title : "";
            try {
                // res.status(200).json({
                //   message: "findAll OK"
                // });
                const tutorials = yield tutorial_repository_1.default.retrieveAll({
                    title: title,
                    published: false
                });
                res.status(200).send(tutorials);
            }
            catch (err) {
                res.status(500).json({
                    message: "Internal Server Error!"
                });
            }
        });
    }
    findOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = parseInt(req.params.id);
            try {
                // res.status(200).json({
                //   message: "findOne OK",
                //   reqParamId: req.params.id
                // });
                const tutorial = yield tutorial_repository_1.default.retrieveById(id);
                if (tutorial)
                    res.status(200).send(tutorial);
                else
                    res.status(404).send({
                        message: `Cannot find Tutorial with id=${id}.`
                    });
            }
            catch (err) {
                res.status(500).json({
                    message: "Internal Server Error!"
                });
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let tutorial = req.body;
            tutorial.id = parseInt(req.params.id);
            try {
                // res.status(200).json({
                //   message: "update OK",
                //   reqParamId: req.params.id,
                //   reqBody: req.body
                // });
                const num = yield tutorial_repository_1.default.update(tutorial);
                if (num == 1) {
                    res.send({
                        message: "Tutorial was updated successfully."
                    });
                }
                else {
                    res.send({
                        message: `Cannot update Tutorial with id=${tutorial.id}. Maybe Tutorial was not found or req.body is empty!`
                    });
                }
            }
            catch (err) {
                res.status(500).json({
                    message: "Internal Server Error!"
                });
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = parseInt(req.params.id);
            try {
                const num = yield tutorial_repository_1.default.delete(id);
                // res.status(200).json({
                //   message: "delete OK",
                //   reqParamId: req.params.id
                // });
                if (num == 1) {
                    res.send({
                        message: "Tutorial was deleted successfully!"
                    });
                }
                else {
                    res.send({
                        message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`,
                    });
                }
            }
            catch (err) {
                res.status(500).json({
                    message: "Internal Server Error!"
                });
            }
        });
    }
}
exports.default = TutorialController;
