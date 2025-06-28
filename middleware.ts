import {i18nRouter} from 'next-i18n-router';
import nextI18nextConfig from './next-i18next.config';

export function middleware(request:any){
    return i18nRouter(request, {
        locales: nextI18nextConfig.i18n.locales,
        defaultLocale: nextI18nextConfig.i18n.defaultLocale
    });
}
export const config = {
  matchers:'/((?!api|static|.*\\..**|_next).*)'
};