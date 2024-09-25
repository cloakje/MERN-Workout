import express from 'express';
import { createBook, getAllBooks } from '../controller/bookController.js';

const router = express.Router();

// Endpoint om alle boeken op te halen
router.get('/', getAllBooks);

// Endpoint om een nieuw book toe te voegen
router.post('/', createBook);

export default router;