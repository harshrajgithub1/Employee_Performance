import mongoose from "mongoose";

const userRole = new mongoose.Schema({
  id: { type: String, unique: true },
  name: { type: String, required: true},
  
},
  {
    timestamps: true,
  }
);

const UserRole = mongoose.models.registers || mongoose.model("role", userRole);

export default UserRole;
