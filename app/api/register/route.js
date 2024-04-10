
import { NextResponse } from "next/server";
import connectMB from "@/app/lib/mongo";
import userModel from "../../models/User";

export const GET = async (req) => {
  try {
    console.log(req.params);
    await connectMB();
    const newRegister = await userModel.find({});
    return NextResponse.json(newRegister);
  } catch (error) {
    throw new Error(error.message);
  }
}


// export const GET = async (req) => {
//   try {
//     await connectMB();
//     const { id } = req.params; // Fetch the ID from the route parameters
//     console.log("id:-", id);
//     // Fetch the user by ID
//     const user = await userModel.findById(id);
    
//     if (!user) {
//       // If user is not found, return 404
//       return NextResponse.error(new Error("User not found"), { status: 404 });
//     }
    
//     // Return the user
//     return NextResponse.json(user);
//   } catch (error) {
//     throw new Error(error.message);
//   }
// }



export const POST = async (req) => {
      const { fullName,email, password,phoneNumber,isActive} = await req.json();
  
  try {
    await connectMB();
    const newRegister = await userModel.create({
      fullName,
      email,
      password,
      phoneNumber,
      isActive
    });
    
    return NextResponse.json(newRegister);
  } catch (error) {
    throw new Error(error.message);
  }
}
