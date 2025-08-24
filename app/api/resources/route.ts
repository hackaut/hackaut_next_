// /app/api/resources/route.ts
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/utils/client";

// GET all resources
export async function GET() {
  try {
    const resources = await prisma.resource.findMany({
      include: { author: true },
    });

    return NextResponse.json(resources, { status: 200 }); // filter-out based on selected fields
  } catch (error) {
    console.error("GET_RESOURCES error:", error);
    return NextResponse.json(
      { message: "Server error", error: (error as Error).message },
      { status: 500 }
    );
  }
}

// POST - create new resource
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, type, link, keywords, authorId } = body;

    if (!name || !type || !authorId || !link) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    const resource = await prisma.resource.create({
      data: {
        name,
        type,
        link,
        keywords,
        authorId,
      },
    });

    return NextResponse.json(resource, { status: 201 });
  } catch (error) {
    console.error("CREATE_RESOURCE error:", error);
    return NextResponse.json(
      { message: "Server error", error: (error as Error).message },
      { status: 500 }
    );
  }
}
