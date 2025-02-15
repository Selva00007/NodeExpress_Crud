"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const home_routes_1 = __importDefault(require("./home.routes"));
const tutorial_routes_1 = __importDefault(require("./tutorial.routes"));
class Routes {
    constructor(app) {
        // {
        //     console.log("Routes/index.ts Called");
        // }
        app.use("/api", home_routes_1.default); //reqMapping
        app.use("/api/tutorials", tutorial_routes_1.default);
    }
}
exports.default = Routes;
