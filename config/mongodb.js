import mongoose from "mongoose";

const connectDB = () => {
    mongoose.connection.on("connected",()=>{
        console.log("db connected")
    })
  mongoose.connect(`${process.env.MONGO_CONNECTION_URL}/E-commerece BROTOTYPE`);
};

export default connectDB;
