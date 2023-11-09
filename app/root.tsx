import type { LinksFunction } from "@remix-run/node";

import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "@remix-run/react";

import "./tailwind.css";

export const links: LinksFunction = () => [
  { href: "/favicon.ico", rel: "icon" },
  { href: "/site.webmanifest", rel: "manifest" },
  {
    href: "/favicons/apple-touch-icon.png",
    rel: "apple-touch-icon",
    sizes: "180x180"
  },
  {
    href: "/favicons/favicon-32x32.png",
    rel: "icon",
    sizes: "32x32",
    type: "image/png"
  },
  {
    href: "/favicons/favicon-16x16.png",
    rel: "icon",
    sizes: "16x16",
    type: "image/png"
  }
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta content="width=device-width,initial-scale=1" name="viewport" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <LiveReload />
        <Scripts />
      </body>
    </html>
  );
}
