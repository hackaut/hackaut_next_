import { prisma } from "@/utils/client";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const users = await prisma.user.findMany();
    return NextResponse.json(
      { message: "Users fetched successfully", users },
      { status: 200 }
    );
  } catch (error) {
    console.error("GET_ALL_USERS error: ", error);
    return NextResponse.json(
      {
        message: "Server error",
        error: (error as Error).message,
      },
      { status: 500 }
    );
  }
}
