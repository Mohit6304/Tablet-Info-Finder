const express = require('express');
const router = express.Router();
const multer = require('multer'); // You might need to install multer: npm install multer

const { performOCR } = require('../controllers/ocrController');

// Set up multer for handling file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Define the OCR route
router.post('/ocr', upload.single('image'), performOCR);

module.exports = router;
