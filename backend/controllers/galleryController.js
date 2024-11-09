const asyncHandler = require('express-async-handler');
const multer = require('multer');
const path = require('path');
const Gallery = require('../models/galleryModel'); 

// Setup Multer Storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, '../frontend/public/gallery');  // Path to save uploaded files
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Unique file name
  }
});

const upload = multer({ storage: storage });

// Controller for uploading files (1 or many)
const uploadFiles = upload.array('files'); // Handles multiple file uploads, field name is 'files'

// Controller to save files to the gallery
const saveFilesToGallery = asyncHandler(async (req, res) => {
  // Check if files were uploaded
  if (!req.files || req.files.length === 0) {
    return res.status(400).json({ message: 'No files uploaded' });
  }

  // Validate file types
  const validFileTypes = ['image/png', 'image/jpeg', 'image/jpg'];
  const invalidFiles = req.files.filter(file => !validFileTypes.includes(file.mimetype));
  if (invalidFiles.length > 0) {
    return res.status(400).json({ message: `Invalid file types: ${invalidFiles.map(file => file.originalname).join(', ')}` });
  }

  // Create an array of gallery entries for each uploaded file
  const galleryItems = req.files.map(file => {
    return {
      filePath: file.path,
      fileName: file.filename,
    };
  });

  // Save all gallery entries to the database
  await Gallery.insertMany(galleryItems);

  res.status(201).json({ message: 'Files uploaded and saved to gallery', galleryItems });
});

const getGallery = asyncHandler(async (req, res) => {
  try {
    const galleryItems = await Gallery.find({});
    if (galleryItems.length === 0) {
      return res.status(404).json({ message: 'No gallery items found' });
    }
    res.status(200).json(galleryItems);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving gallery items', error });
  }
});
const deleteGalleryItem = asyncHandler(async (req, res) => {
  const { id } = req.params;

  try {
    const galleryItem = await Gallery.findByIdAndDelete(id);
    if (!galleryItem) {
      return res.status(404).json({ message: 'Gallery item not found' });
    }

    res.status(200).json({ message: 'Gallery item deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting gallery item', error });
  }
});

module.exports = { uploadFiles, saveFilesToGallery, getGallery, deleteGalleryItem };
