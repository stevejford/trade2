import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const authCookie = request.cookies.get("auth");
  const { pathname } = request.nextUrl;

  // Protected routes that require authentication
  const protectedRoutes = [
    "/homeowner/dashboard",
    "/tradesperson/dashboard",
  ];

  // Public routes that should not be accessible when authenticated
  const publicRoutes = [
    "/login",
    "/signup",
  ];

  if (!authCookie && protectedRoutes.some(route => pathname.startsWith(route))) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (authCookie && publicRoutes.some(route => pathname.startsWith(route))) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/homeowner/:path*",
    "/tradesperson/:path*",
    "/login",
    "/signup",
  ],
};