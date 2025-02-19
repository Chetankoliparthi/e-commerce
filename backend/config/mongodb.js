import mongoose from "mongoose";
const connectDB = async () => {
    mongoose.connection.on("connected", () => {
        console.log("connected to mongodb");
    });
  await mongoose.connect(`${process.env.mongodb_URL}/ecommerce`);
};
export default connectDB;