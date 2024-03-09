import { Schema, models, model } from "mongoose";

const typeSchema = new Schema({
  name: { type: String, required: true, unique: true },
  // Additional fields like createdBy, createdAt, approved etc. can be added based on requirements
});

const Type = models?.Type || model("Type", typeSchema);
