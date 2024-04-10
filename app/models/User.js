import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phoneNumber: { type: String, unique: true },
  isActive: { type: Boolean , required: true },
},
  {
    timestamps: true,
  }
);

const UserModel = mongoose.models.registers || mongoose.model("registers", userSchema);

export default UserModel;
