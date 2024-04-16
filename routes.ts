/**
 * Public routes accessible to all users.
 * @type {string[]}
 */
export const publicRoutes = ['/auth/new-verification']

/**
 * An array of Authentication routes
 * @type {string[]}
 */
export const authRoutes = [
  '/auth/login',
  '/auth/register',
  '/auth/reset-password',
  '/auth/new-password'
]

/**
 * Prefix for API authentication routes.
 * These routes are used for API authentication purposes
 * @type {string}
 */
export const apiAuthPrefix = '/api/auth'

/**
 * Default redirect path after loggedIn
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = '/'
