import express from "express";
import dotenv from "dotenv";
import workoutRouter from "./routes/workoutRoutes.js";
import mongoose from "mongoose";



// laat variabelen uit het .env-bestand
dotenv.config();
//maak een express applicatie
const app = express();

//middelware om JSON-verzoeken te parsen 
app.use(express.json());

//routes
app.use("/api/workouts", workoutRouter);

//connect to db
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    //listen for requests
    app.listen(process.env.PORT, () => {
      console.log("listening to port 4000 ", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });


