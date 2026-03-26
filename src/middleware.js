import { NextResponse } from "next/server";

export function middleware(request) {
  const token = request.cookies.get("token");

  if (!token && request.nextUrl.pathname.startsWith("/DashBoard")) {
    return NextResponse.redirect(new URL("/LogIn", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/DashBoard/:path*"],
};