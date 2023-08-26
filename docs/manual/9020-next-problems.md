## Not get /public/{image file}

* If you can use i18n and middleware.ts, you add image files to middleware.ts

*how to use publid files as not apply i18n*

1. create `public/static``

ex.  

```text
/public/static/favicon.ico
              /logo.svg
```

2. change `apps/web/middleware.ts`

add *static* to matcher.

```ts
export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|static).*)']
};
```
