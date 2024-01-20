const mongoose = require("mongoose");
const { DB_NAME } = require("../constants.js");
require("dotenv").config();

const CONNECTING_URL = process.env.CONNECTING_URL;

// Establish a connection to MongoDB
const connectDB = async () => {
  try {
    console.log(`${process.env.CONNECTING_URL}/${DB_NAME}`);
    const connectingInstance = await mongoose.connect(`${CONNECTING_URL}/${DB_NAME}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB is Connected ${connectingInstance.connection.host}`);
  } catch (error) {
    console.log(`MongoDB connection failed`, error);
    process.exit(1);
  }
};

module.exports = {
    connectDB
}
console.log(connectDB);
console.log(CONNECTING_URL);
console.log(DB_NAME);
