import express from "express";
import Workout from "../Model/Workout.js";
import { createWorkout, deleteWorkout, getAllWorkouts, getWorkout, updateWorkout } from "../controllers/workoutController.js";

const router = express.Router();

router.get("/", getAllWorkouts);
router.get("/:id", getWorkout);
router.delete("/:id", deleteWorkout);
router.patch("/:id", updateWorkout);

router.post("/", createWorkout);

export default router;
