const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: {
      type: String,
      minlength: [3, "Username must be at least of 3 characters"],
      required: [true, "Username is required"],
    },
    title: {
      type: String,
      required: [true, "Title is required"],
    },
    password: {
      type: String,
      minlength: [8, "Password should have a minimum length of 8"],
      required: [true, "Passowrd is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
    },
    imgUrl: {
      type: String,
    },
    following: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
