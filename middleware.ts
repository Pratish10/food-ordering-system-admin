import NextAuth from 'next-auth'

import authConfig from '@/auth.config'

import {
  DEFAULT_LOGIN_REDIRECT,
  apiAuthPrefix,
  authRoutes,
  publicRoutes
} from '@/routes'

const { auth } = NextAuth(authConfig)

export default auth((req) => {
  const { nextUrl } = req
  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  const isLoggedIn = !!req.auth

  const isApiRoutePrefix = nextUrl.pathname.startsWith(apiAuthPrefix)
  const isPublicRoutes = publicRoutes.includes(nextUrl.pathname)
  const isAuthRoute = authRoutes.includes(nextUrl.pathname)

  if (isApiRoutePrefix) return null

  if (isAuthRoute) {
    if (isLoggedIn) {
      return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl))
    }
    return null
  }

  if (!isLoggedIn && !isPublicRoutes) {
    return Response.redirect(new URL('/auth/login', nextUrl))
  }
})

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
}
