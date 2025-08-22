import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const SECRET = process.env.JWT_SECRET!;

export async function POST(req: NextRequest) {
  try {
    const { name, email, password } = await req.json();

    if (!name || !email || !password) {
      return NextResponse.json(
        { message: "All fields are required." },
        { status: 400 }
      );
    }

    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json(
        { message: "User already exists." },
        { status: 409 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    const token = jwt.sign({ userId: newUser.id }, SECRET, {
      expiresIn: "1h",
    });

    return NextResponse.json(
      { message: "Signup successful", token },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Server error",
        error: (error as Error).message,
      },
      { status: 500 }
    );
  }
}
