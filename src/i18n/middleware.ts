import createMiddleware from 'next-intl/middleware';
import {routing} from './routing';

export default createMiddleware(routing);

export const config = {
  // 匹配所有路径，除了 api、_next、_vercel、favicon.ico 等
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};