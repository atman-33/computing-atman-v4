## create next admin app

```bash
nx g @nx/next:app web-admin

✔ Would you like to use the App Router (recommended)? (Y/n) · true
```

## add scope:web tags

`apps/web-admin/project.json`

## delete api folder

delte `apps/web-admin/app/api`

## delte global.css and module.css

- delte `apps/web-admin/app/global.css`
- delte `apps/web-admin/app/page.module.css`
- fix import in `apps/web-admin/app/layout.tsx`

```ts
import '../styles/global.css';
```

## add script in package.json

`package.json`

```json
    "start:web-admin": "nx serve web-admin --port 3000",
```

## copy paste somefiles frome web

paste from web to web-admin

- apps/web/data-access
- apps/web/environments
- apps/web/postcss.config.js
- apps/web/tailwind.config.js
- apps/web/styles

## update files

- apps/web-admin/tailwind.config.js
- apps/web-admin/environments/environment.ts
- apps/web-admin/data-access/graphql-client.ts
- apps/web-admin/next.config.js

## update page.tsx

`apps/web-admin/app/page.tsx`

---

# Auth by Clerk.com

## create application at clerk.com

- move to https://dashboard.clerk.com/

- create new app

  - application name => okkino-dev
  - sign in => Google

- copy keys and paste to .env.local

ex.

```text
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_bW9yYWwtY2hpZ2dlci0zOC5jbGVyay5hY2NvdW50cy5kZXYk
CLERK_SECRET_KEY=sk_test_18CZx3gPbqU45EJd0sKf3kfGLUVh4Ytm28rBL2ofB2
```

## install packates

```bash
npm install @clerk/nextjs
```

## update layout.tsx

`apps/web-admin/app/layout.tsx`

> do it by Mount ClerkProvider manual at https://clerk.com/docs/nextjs/get-started-with-nextjs

## create middleware

`apps/web-admin/middleware.ts`

```ts
import { authMiddleware } from '@clerk/nextjs';
import { NextResponse } from 'next/server';

export default authMiddleware({
  publicRoutes: ['/sign-in'],
  afterAuth(auth, req, evt) {
    // handle users who aren't authenticated
    if (!auth.userId && !auth.isPublicRoute) {
      const signInUrl = new URL('/sign-in', req.url);
      return NextResponse.redirect(signInUrl);
    }
  }
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api)(.*)']
};
```

## create folder sign-in

`apps/web-admin/app/sign-in`

and then

- create page.tsx

## install packages to use daisyui

```bash
npm i -D daisyui
```

update `apps/web-admin/tailwind.config.js`

ex. apply lofi theme

```ts
/* eslint-disable unicorn/prefer-module */
const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('node:path');

module.exports = {
  content: [
    join(__dirname, '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'),
    ...createGlobPatternsForDependencies(__dirname)
  ],
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['lofi']
  }
};
```

## create folder dashboard

_use daisyui_

`apps/web-admin/app/dashboard`

- create layout.tsx

> reference url  
> https://daisyui.com/components/drawer/

- create page.tsx

---

# use cookies

## gql with cookie (Next)

`apps/web-admin/app/dashboard/page.tsx`

```tsx
export default async function DashboardPage() {
  const { products } = await gql.GetProducts({}, { cookie: String(await cookies()) });
  ...
```

## install packages

```bash
npm i @fastify/cookie
```

## apply cookie to main.ts (Nest)

`apps/api/src/main.ts`

add regiester cookie

```ts
import cookie from '@fastify/cookie';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter());

  await app.register(cookie);
  ...
```

---

# Auth Guard

## install jsonwebtoken

```bash
npm i jsonwebtoken
npm i --save-dev @types/jsonwebtoken
```

## generate feature auth

```bash
nx generate @nrwl/js:library --name=feature-auth --directory=api --bundler=swc --tags "scope:api"

✔ Which unit test runner would you like to use? · jest
```

- delete files in `libs/api/feature-auth/src/lib`
- create `libs/api/feature-auth/src/lib/auth.guard.ts`
- fix export in `libs/api/feature-auth/src/index.ts`
- apply AuthGuard to resolver method.  
  ex. `libs/api/feature-product/src/lib/product.resolver.ts`

## get api keys from clerk.com

move to `clerk.com > {your app} > API Keys > Advanced > JWT public key > PEM public key`

- copy the key and paste .env.local
  `CLERK_JWT_VERIFICATION_KEY`
