import { flatRoutes } from "remix-flat-routes";

/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  future: {
    v2_errorBoundary: true,
    v2_headers: true,
    v2_meta: true,
    v2_normalizeFormMethod: true,
    v2_routeConvention: true,
  },
  ignoredRouteFiles: ['**/*'],
  routes: async defineRoutes => {
    return flatRoutes('routes', defineRoutes)
  },
  server:
    process.env.NETLIFY || process.env.NETLIFY_LOCAL
      ? "./server.ts"
      : undefined,
  serverBuildPath: ".netlify/functions-internal/server.js",
};
