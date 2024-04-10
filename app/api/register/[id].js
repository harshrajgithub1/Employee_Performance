// pages/api/resource/[id].js

import { NextResponse } from "next/server";
import connectMB from "@/app/lib/mongo";
import userModel from "../../../models/User"; // Update the path as per your file structure

export const DELETE = async (req) => 
{
  try {
    await connectMB();
    const { id } = req.params; // Fetch the ID from the route parameters
    
    // Find the user by ID
    const user = await userModel.findById(id);
    
    if (!user) {
      // If user is not found, return 404
      return NextResponse.error(new Error("User not found"), { status: 404 });
    }
    
    // Delete the user
    await userModel.findByIdAndDelete(id);
    
    // Return success response
    return NextResponse.json({ message: "User deleted successfully" });
  } catch (error) {
    throw new Error(error.message);
  }
}

export const GET = async (req) => {
    try {
      await connectMB();
      const { id } = req.params; // Fetch the ID from the route parameters
      
      // Fetch the user by ID
      const user = await userModel.findById(id);
      
      if (!user) {
        // If user is not found, return 404
        return NextResponse.error(new Error("User not found"), { status: 404 });
      }
      
      // Return the user
      return NextResponse.json(user);
    } catch (error) {
      throw new Error(error.message);
    }
  }