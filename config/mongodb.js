import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connection.on("connected", () => {
      console.log("db connected");
    });
    mongoose.connect(`${process.env.MONGO_CONNECTION_URL}/E-commereceBROTOTYPE`);
  } catch (error) {
    console.log("Database connection failed",error)
  }
};

export default connectDB;
