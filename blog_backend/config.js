require("dotenv").config();

const dBUrl = process.env.MONGODB_URL;

module.exports = dBUrl;
