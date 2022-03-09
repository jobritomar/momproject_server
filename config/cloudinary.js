// config/cloudinary.config.js

const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');

cloudinary.config({ 
  cloud_name: 'de7dp4ftq', 
  api_key: '586157881142473', 
  api_secret: 'rf-RJoQlzhPxv5tyEh_yqmGUHBs' 
});


const storage = new CloudinaryStorage({
  // cloudinary: cloudinary,
  cloudinary,
  params: {
    allowed_formats: ['jpg', 'png'],
    folder: "momproject" // The name of the folder in cloudinary
    // resource_type: 'raw' => this is in case you want to upload other type of files, not just images
  }
});

//                     storage: storage
module.exports = multer({ storage });
