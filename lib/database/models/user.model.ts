import { Schema, models } from "mongoose";
export interface useerTypes extends Document {
  clerkId: string;
  email: string;
  username: string;
  photo: string;
  firstName: string;
  lastName: string;
  planId: string;
  creditBalance: Number;
}
const userSchema = new Schema({
  clerkId: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  photo: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  planId: { type: String, required: true },
  creditBalance: { type: Number, required: true },
});
const User = models?.User || model("User", userSchema);
