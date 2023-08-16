## generate utils-shared

```bash
nx generate @nrwl/js:library --name=utils-shared --directory=web --bundler=swc --tags "scope:web"

✔ Which unit test runner would you like to use? · jest
```

## delete files in lib folder

delte files in `libs/web/utils-shared/src/lib`

## create and use file

- create `libs/web/utils-shared/src/lib/rgb-to-data-url.ts`
- fix export on `libs/web/utils-shared/src/index.ts`
- use rgbToDataUrl on `apps/web/app/page.tsx`
