"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors")); //cross origin resourse sharing
const routes_1 = __importDefault(require("./routes")); // refers src -- index.ts
class Server {
    constructor(app) {
        // {
        //     console.log("index.ts Called");
        // }
        this.config(app);
        new routes_1.default(app);
    }
    config(app) {
        const corsOptions = {
            origin: "http://localhost:8081" //port which sholud allow(check)
        };
        app.use((0, cors_1.default)(corsOptions));
        app.use(express_1.default.json()); //anytyoe that converting to json r js 
        app.use(express_1.default.urlencoded({ extended: true })); //utf-8 --> patern
    }
}
exports.default = Server;
