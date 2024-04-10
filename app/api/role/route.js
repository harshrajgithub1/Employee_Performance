
import { NextResponse } from "next/server";
import connectMB from "@/app/lib/mongo";
import userRole from "../../models/Role";


export const GET = async (req) => {
    try {
      console.log(req.params);
      await connectMB();
      const newRole = await userRole.find({});
      return NextResponse.json(newRole);
    } catch (error) {
      throw new Error(error.message);
    }
  }


export const POST = async (req) => {
    const { id, name } = await req.json();

try {
  await connectMB();
  const newRegister = await userRole.create({
    id,
    name
  });
  
  return NextResponse.json(newRegister);
} catch (error) {
  throw new Error(error.message);
}
}
