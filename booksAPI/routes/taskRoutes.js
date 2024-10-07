import express from 'express';
import { getAllTasks, createTask } from '../controller/taskController.js';

const router = express.Router();

// Endpoint om alle taken op te halen
router.get('/', getAllTasks);

// Endpoint om een nieuwe taak toe te voegen
router.post('/', createTask);

export default router;