import mongoose from "mongoose";

let isConnected = false; // track connection state

export const connection = async () => {
  if (isConnected) {
    console.log("Using existing MongoDB connection");
    return;
  }

  try {
    const db = await mongoose.connect(process.env.MONGO_URI, {
      dbName: "LIBRARY_MANAGEMENT_SYSTEM",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isConnected = db.connections[0].readyState === 1;
    console.log(" Connected to database.");
  } catch (err) {
    console.error(`Error connecting to database: ${err.message}`);
  }
};
