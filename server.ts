import express, { Application } from "express";//object type -application
import Server from "./src/index.js";

const app: Application = express();//creating obbj
const server: Server = new Server(app);//server-obj --embedding app
const PORT: number = process.env.PORT ? parseInt(process.env.PORT, 10) : 8080;

app
  .listen(PORT, "localhost", function () {
    // {
    //     console.log("server.ts Called");
    // }
    console.log(`Server is running on port ${PORT}.`);
  })
  .on("error", (err: any) => {
    if (err.code === "EADDRINUSE") {
      console.log("Error: address already in use");
    } else {
      console.log(err);
    }
  });
 