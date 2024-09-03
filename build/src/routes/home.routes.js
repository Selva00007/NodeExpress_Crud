"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const home_controller_1 = require("../controllers/home.controller");
class HomeRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.intializeRoutes();
    }
    intializeRoutes() {
        // {
        //     console.log("home.routes.ts Called");
        // }
        this.router.get("/", home_controller_1.welcome);
    }
}
exports.default = new HomeRoutes().router;
