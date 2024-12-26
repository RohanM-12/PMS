import mongoose from "mongoose";

const connectDB = async (url) => {
  try {
    console.log(url);
    const conn = await mongoose.connect(url, {});
    console.log(`connected to Mongodb database ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error in mongodb ${error}`);
  }
};
export default connectDB;
