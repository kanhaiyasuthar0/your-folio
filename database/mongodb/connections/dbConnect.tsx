import mongoose from "mongoose";

// Assuming ConnectionObject and MongoUri are defined correctly in your interfaces
import { ConnectionObject, MongoUri } from "@/database/interfaces/connection";

const connection: ConnectionObject = {};

async function dbConnect(): Promise<void> {
  if (connection.isConnected) {
    // Already connected
    return;
  }

  if (mongoose.connections[0]?.readyState) {
    // Use existing connection
    connection.isConnected = mongoose.connections[0].readyState;
    return;
  }

  // Validate environment variable or configuration
  const myMongoUri: MongoUri = process.env.MONGODB_URI as MongoUri;
  if (!myMongoUri) {
    throw new Error("MONGODB_URI is not defined");
  }

  try {
    const db = await mongoose.connect(myMongoUri, {
      serverSelectionTimeoutMS: 30000, // Increase the server selection timeout
    });
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    console.error("Database connection error:", error);
    throw error; // Rethrow or handle as needed
  }
}

export default dbConnect;
