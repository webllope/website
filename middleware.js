export const config = {
  // Only run the middleware on the root
  matcher: "/",
};

export default function middleware(request) {
  const url = new URL(request.url);
  // FIXME: this is a ñapa to avoid not found page on "/" when deployed to Vercel
  if (url.pathname === "/") {
    url.pathname = "/es";
  }
  return Response.redirect(url);
}
