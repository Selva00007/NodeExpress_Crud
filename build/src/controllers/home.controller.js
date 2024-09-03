"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.welcome = welcome;
function welcome(req, res) {
    // {
    //     console.log("home.controller.ts Called");
    // }
    return res.json({ message: "Welcome to Selva application." });
}
