import mongoose from "mongoose";

const connectMB = async () => {
  try {
    const DB_OPTIONS = {
      dbName: "Employee_Performance",
    };

    await mongoose.connect("mongodb://localhost:27017", DB_OPTIONS);
    console.log("Connected to MongoDB harsh");
  } catch (error) {
    throw new Error("Connection failed! " + error);
  }
};

export default connectMB;
