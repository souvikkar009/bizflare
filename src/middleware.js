import { NextResponse } from "next/server";
import { getTokenData } from "./helper/getTokenData";

export async function middleware(request) {
  const path = request.nextUrl.pathname;
  const publicPath = path === "/" || path === "/demo";
  const signInToken = request.cookies.get("signInToken")?.value || "";
  if (!signInToken && !publicPath) {
    return NextResponse.redirect(new URL("/", request.url));
  }
  if (signInToken && path === "/demo") {
    return NextResponse.redirect(new URL("/", request.url));
  }
}

export const config = {
  matcher: ["/designAd", "/user/:path*", "/demo"],
};
