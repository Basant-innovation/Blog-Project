const express = require("express");
var cors = require("cors");
const multer = require("multer");
const path = require("path");

const port = 5000;

const mongoose = require("mongoose");
const { dBUrl } = require("./config");

const postsRouter = require("./routes/posts");
const usersRouter = require("./routes/users");

const app = express();

//image uplaod
const storage = multer.diskStorage({
  destination: "./public/uploads/",
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "" + Date.now() + path.extname(file.originalname)
    );
  },
});

var upload = multer({ storage: storage, limits: { fileSize: 1000000 } }).single(
  "image"
);

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(upload);
app.use(cors());
app.use("/posts", postsRouter);
app.use("/users", usersRouter);

app.get("/", (req, res) => {
  res.send("home");
});

mongoose
  .connect(dBUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("Connected To mongoose successfully!"))
  .catch((err) => console.error(err));

app.listen(process.env.PORT || port, () =>
  console.log(`blog app listening at http://localhost:${port}`)
);
