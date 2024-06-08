import { locales } from "./lib/i18n";

import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 检查请求路径是否是静态资源或多语言路径
  if (
    pathname.startsWith("/media/") || // 确保 media 路径不受中间件影响
    pathname.startsWith("/api/") ||
    locales.some((locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`)
  ) {
    return NextResponse.next(); // 允许请求继续
  }

  request.nextUrl.pathname = `/`;
  return Response.redirect(request.nextUrl);
}

export const config = {
  matcher: ["/((?!_next)(?!.*\\.(?:ico|png|svg|jpg|jpeg|xml|txt)$)(?!/api).*)"],
};
