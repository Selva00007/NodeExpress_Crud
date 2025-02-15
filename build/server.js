"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express")); //object type -application
const index_js_1 = __importDefault(require("./src/index.js"));
const app = (0, express_1.default)(); //creating obbj
const server = new index_js_1.default(app); //server-obj --embedding app
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 8080;
app
    .listen(PORT, "localhost", function () {
    // {
    //     console.log("server.ts Called");
    // }
    console.log(`Server is running on port ${PORT}.`);
})
    .on("error", (err) => {
    if (err.code === "EADDRINUSE") {
        console.log("Error: address already in use");
    }
    else {
        console.log(err);
    }
});
