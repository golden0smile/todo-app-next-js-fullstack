import { ConnectDb } from "@/lib/config/db";
import Todomodel from "@/lib/models/Todomodel";
import { NextResponse } from "next/server";

const LoadDB = async () => {
  // Connect to your database here
  await ConnectDb();
};

LoadDB();
export async function GET(request) {
  try {

    const todo = await Todomodel.find({});
    if (todo.length === 0) {
      return NextResponse.json({ data: [], msg: "No data found", status: 204 });
    }
    return NextResponse.json({ data: todo, msg: "Successful", status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Internal Server Error", status: 500 });
  }
}

//for add todo
export async function POST(request) {
  // console.log(await request.json())
  const { title, description } = await request.json();
  await Todomodel.create({ title, description });
  return NextResponse.json({ msg: "todo created" });
}

//for delete todo
export async function DELETE(request) {
  const  mongoID  = request.nextUrl.searchParams.get("id");
  await Todomodel.findByIdAndDelete(mongoID);
  return NextResponse.json({ msg: "todo deleted" });
}

//for update todo
export async function PUT(request) {
  const {id, title, description } = await request.json();
 const temp=await Todomodel.findByIdAndUpdate(id, { title, description });
  if(!temp) return NextResponse.json({ msg: "No todo found" });
  return NextResponse.json({ msg: "todo updated" });
}
