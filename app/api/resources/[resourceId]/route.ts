import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/utils/client";

// GET resource by ID
export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ resourceId: string }> }
) {
  try {
    const { resourceId } = await params;
    const resource = await prisma.resource.findUnique({
      where: { id: resourceId },
      include: { author: true },
    });

    if (!resource) {
      return NextResponse.json({ message: "Resource not found" }, { status: 404 });
    }

    return NextResponse.json(resource, { status: 200 });
  } catch (error) {
    console.error("GET_RESOURCE error:", error);
    return NextResponse.json(
      { message: "Server error", error: (error as Error).message },
      { status: 500 }
    );
  }
}

// PATCH - update resource(partial)
export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ resourceId: string }> }
) {
  try {
    const body = await req.json();
    const { resourceId } = await params;

    const resource = await prisma.resource.findUnique({
      where: { id: resourceId }
    });
    if (!resource) {
      return NextResponse.json(
        { message: "Resource not found!" },
        { status: 404 }
      )
    }

    const updated = await prisma.resource.update({
      where: { id: resourceId },
      data: body,
    });

    return NextResponse.json(updated, { status: 200 });
  } catch (error) {
    console.error("UPDATE_RESOURCE error:", error);
    return NextResponse.json(
      { message: "Server error", error: (error as Error).message },
      { status: 500 }
    );
  }
}

// DELETE resource
export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ resourceId: string }> }
) {
  try {
    const { resourceId } = await params;
    await prisma.resource.delete({
      where: { id: resourceId },
    });

    return NextResponse.json({ message: "Resource deleted" }, { status: 200 });
  } catch (error) {
    console.error("DELETE_RESOURCE error:", error);
    return NextResponse.json(
      { message: "Server error", error: (error as Error).message },
      { status: 500 }
    );
  }
}
