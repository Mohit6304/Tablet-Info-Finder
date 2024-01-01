const vision = require('@google-cloud/vision');
const client = new vision.ImageAnnotatorClient({
    keyFilename:'./keyfile.json'
  });
const performOCR = async (req, res) => {
  try {
    const imageBuffer = req.file.buffer; // Assuming you're using multer or a similar middleware for file uploads

    const request = {
      image: { content: imageBuffer.toString('base64') },
    };

    const [result] = await client.textDetection(request);
    const textAnnotations = result.textAnnotations;
    const extractedText = textAnnotations ? textAnnotations[0].description : 'No text found';

    res.json({ text: extractedText });
  } catch (error) {
    console.error('Error performing OCR:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { performOCR };
