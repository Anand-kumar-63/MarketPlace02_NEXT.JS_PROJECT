import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import createMiddleware from 'next-intl/middleware';
import { routing } from '../i18n/routing';

const intlMiddleware = createMiddleware(routing);

// export default function middleware(request: NextRequest) {
// //   const { pathname } = request.nextUrl;

// //   // Redirect from "/" to default locale (e.g., "/en")
// //   if (pathname === '/') {
// //     const url = request.nextUrl.clone();
// //     url.pathname = '/en';
// //     return NextResponse.redirect(url);
// //   }

//   // Otherwise use next-intl middleware
//   return intlMiddleware(request);
// }

export const config = {
  // Match all pathnames except for:
  // - those starting with `/api`, `/trpc`, `/_next`, or `/_vercel`
  // - those containing a dot (e.g. `favicon.ico`)
  matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)',
};
