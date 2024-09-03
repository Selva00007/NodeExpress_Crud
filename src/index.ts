import express, { Application } from "express";
import cors, { CorsOptions } from "cors";//cross origin resourse sharing
import Routes from"./routes";// refers src -- index.ts

export default class Server {
  constructor(app: Application) {
    // {
    //     console.log("index.ts Called");
    // }
    this.config(app);
    new Routes(app);
  }

  private config(app: Application): void {
    const corsOptions: CorsOptions = {
      origin: "http://localhost:8081"//port which sholud allow(check)
    };

    app.use(cors(corsOptions));
    app.use(express.json());//anytyoe that converting to json r js 
    app.use(express.urlencoded({ extended: true }));//utf-8 --> patern
  }
  
}
