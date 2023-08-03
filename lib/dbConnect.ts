import mongoose from "mongoose";

const uri = process.env.MONGODB_URI as string;

const dbConnect = async () => {
  try {
    const connection = await mongoose.connect(uri);
    return connection;
  } catch (error) {
    return console.log("db connect fail:", error);
  }
};
export default dbConnect;
