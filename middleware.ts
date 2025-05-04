import createMiddleware from 'next-intl/middleware';

const intlMiddleware = createMiddleware({
  locales: ['en', 'zh'],
  defaultLocale: 'en'
});

export default intlMiddleware;

export const config = {
  matcher: ['/', '/(zh|en)/:path*']
};
