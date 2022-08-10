const multer = require("multer");
const { v4: uuid } = require("uuid");
const mime = require("mime-types");

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "./uploads"),
  filename: (req, file, cb) =>
    cb(null, `${uuid()}.${mime.extension(file.mimetype)}`),
});

module.exports = multer({
  storage,
  fileFilter: (req, file, cb) => {
    ["image/jpeg", "image/png"].includes(file.mimetype)
      ? cb(null, true)
      : cb(new Error("invalid file type"));
  },

  limits: {
    fileSize: 1024 ** 3,
  },
});
