import multer from "multer";
import Settingsmodel from "../common/settings-model.js";
import fs from "fs"

const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage });
  
export const fileNum =  upload.array('files')

  export const imgUpload =  async (req, res) => {
    try {
      if (!req.files) {
        return res.status(400).json({ error: 'No files uploaded' });
      }
  
      const filenames = req.files.map(files => files.filename);

      const data = {
          fullname: req.body.fullname,
          Imgpath: filenames
      };
      
      const image = await Settingsmodel.create(data);
      return res.status(200).json(image);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }
   