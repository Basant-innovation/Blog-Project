const express = require("express");
const postsRouter = require("./routes/posts");
const usersRouter = require("./routes/users");
const app = express();
const port = 5000;

//connection to moongoose we have to move it to db file after working
const mongoose = require("mongoose");
const { dBUrl } = require("./config");

app.use(express.json());
app.use("/posts", postsRouter);
app.use("/users", usersRouter);

app.get("/", (req, res) => {
  res.send("hello");
});

//connection to moongoose we have to move it to db file after working
mongoose
  .connect(dBUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("Connected To mongoose successfully!"))
  .catch((err) => console.error(err));

app.listen(port, () =>
  console.log(`blog app listening at http://localhost:${port}`)
);
