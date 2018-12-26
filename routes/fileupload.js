const express = require('express')
const router = express.Router()
const { upload } = require('../multer-s3-fileupload/s3UploadClient')

// Upload a file
router.post('/upload', upload.fields([
  { name: 'image', maxCount: 1 },
  { name: 'video', maxCount: 1 },
  { name: 'attachment', maxCount: 1 }
]), (req, res) => {
  if (!req.files) res.status(400).json({ error: 'No files were uploaded.' })

  res.status(201).json({
    message: 'Successfully uploaded ' + req.files.length + ' files!',
    files: req.files
  })
})

module.exports = router
