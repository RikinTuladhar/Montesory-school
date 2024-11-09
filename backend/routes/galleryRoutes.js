const express = require('express');
const router = express.Router();
const { uploadFiles, saveFilesToGallery, getGallery, deleteGalleryItem } = require('../controllers/galleryController');

router.post('/upload', uploadFiles, saveFilesToGallery);
router.get('/', getGallery);
router.delete('/:id', deleteGalleryItem);

module.exports = router;