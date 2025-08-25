// import { NextRequest, NextResponse } from "next/server";
// import jwt from "jsonwebtoken";

// export function middleware(req: NextRequest) {
//   const token = req.cookies.get("token")?.value;

//   if (!token) {
//     return NextResponse.redirect(new URL("/user/signin", req.url));
//   }

//   try {
//     jwt.verify(token, process.env.JWT_SECRET!);
//     return NextResponse.next();
//   } catch {
//     return NextResponse.redirect(new URL("/user/signin", req.url));
//   }
// }

// export const config = {
//   matcher: ["/resources/:path*"],
// };

// TODO: Implement later after fixing UI...