import { Application } from "express";
import homeRoutes from "./home.routes";
import tutorialRoutes from "./tutorial.routes";

export default class Routes {
  constructor(app: Application) {
    // {
    //     console.log("Routes/index.ts Called");
    // }
    app.use("/api", homeRoutes);//reqMapping
    app.use("/api/tutorials",tutorialRoutes);
  }
}
