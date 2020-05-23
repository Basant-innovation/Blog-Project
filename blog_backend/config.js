require("dotenv").config();

const dBUrl = process.env.MONGODB_URL;
const tokenSecret = process.env.TOKEN_SECRET;

module.exports = { dBUrl, tokenSecret };
