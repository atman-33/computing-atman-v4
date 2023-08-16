# NestJS fastify ver

## add feature libary

```bash
nx generate @nrwl/js:library --name=feature-image --directory=api --bundler=swc --tags "scope:api"

✔ Which unit test runner would you like to use? · jest
```

## delete generated files

* `api-feature-image.spec.ts`
* `api-feature-image.ts`

## generate module, controller and service

```bash
nx generate @nx/nest:module --project=api-feature-image --name image

nx generate @nx/nest:controller --project=api-feature-image --name image

nx generate @nx/nest:service --project=api-feature-image --name image
```

## move module etc files to lib folder

* move files
* delete image folders

## update files

* `libs/api/feature-image/src/lib/image.controller.ts`
    - add endpoint
* `libs/api/feature-image/src/lib/image.service.ts`
    - add logic
* `libs/api/feature-image/src/index.ts`
    - fix export
* `apps/api/src/app/app.module.ts`
    - add generated module to imports

_________________________________________________

# Nextjs

## add url and endpoint url

add URL and ENDPOINT on env, and then update files (following)

* `.env.local`
ex.  

```text
OKKINO_WEB_STORAGE_URL=http://localhost:3333/images
OKKINO_WEB_STORAGE_ENDPOINT=localhost:3333/images
OKKINO_WEB_STORAGE_HOSTNAME=localhost:3333
```

* `apps/web/environments/environment.ts`
* `tools/environment/validate-web-env.ts`

## update nextConfig

add images to nextConfig       

 `apps/web/next.config.js`

ex. (localhost ver)  

```ts
const nextConfig = {
  ...,
  images: {
  images: {
    domains: ['localhost'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: String(process.env.OKKINO_WEB_STORAGE_HOSTNAME)
      }
    ]
  }
```

## use Image

 `page.tsx`

ex.  

```tsx
const { storage } = webEnv;

export default async function Page() {
  const { homeBlocks } = await gql.GetHomeImages();

  return homeBlocks.map((homeBlock) => (
      <Image
        className="mx-auto h-24 w-24 rounded-full"
        src={storage.url + '/' + homeBlock.imagePath}
        alt=""
        width="384"
        height="512"
      />
```
