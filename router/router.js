const { renderHome, addUser } = require("../controller/func");
const multer = require("multer");
const express = require("express");
const path = require("path");
const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

router.get("/", renderHome);
router.post("/add", upload.single("file"), addUser);

module.exports = router;
