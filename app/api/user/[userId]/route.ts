import { prisma } from "@/utils/client";
import { NextRequest, NextResponse } from "next/server";


export async function GET(req: NextRequest, { params }: {
    params: Promise<{ userId: string }>
}) {
    try {
        const { userId } = await params;

        const user = await prisma.user.findUnique({
            where: { id: userId }
        });
        if (!user) {
            return NextResponse.json(
                { message: "user not found!" },
                { status: 404 }
            )
        }
        
        return NextResponse.json(user, { status: 200 });
    } catch (error) {
        console.error("GET_USER_BY_ID error: ", error);
        return NextResponse.json(
            {
                message: "Server error",
                error: (error as Error).message,
            },
            { status: 500 }
        );
    }
}