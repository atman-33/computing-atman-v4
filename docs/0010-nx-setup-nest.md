## change to your choice of directory

open shell

```shell
cd ~/Sites
```

> ~/Sites is example

## install yarn (if you like yarn)

```shell
npm i -g yarn
```

## create nx workspace Nestjs app

```shell
npx create-nx-workspace@latest

✔ Where would you like to create your workspace? · computing-atman-v4
✔ Which stack do you want to use? · node
✔ What framework should be used? · nest
✔ Integrated monorepo, or standalone project? · integrated
✔ Application name · api
✔ Would you like to generate a Dockerfile? [https://docs.docker.com/] · No
✔ Enable distributed caching to make your CI faster · No
```

## add scope:api tag

 `apps/api/project.json`

```json
  "tags": [
    "scope:api"
  ]
```

## add start scripts

 `package.json`

```json
  ...
  "scripts": {
    "sereve:all": "npx concurrently --kill-others-on-fail \"npm:start:*\"",
    "----START----": "-------------------------",
    "start:api": "nx serve api",
    "start:web": "nx serve web",
   "----NX SECTION----": "-------------------------",
    "build": "nx build",
    "test": "nx test",    
    "----TOOLS SECTION----": "-------------------------",
    "verify": "nx affected:lint --fix --all && nx format:write && nx format:check && nx affected --target=lint --fix --parallel=3 && npx nx affected --target=test --parallel=3 && nx affected --target=build --parallel=3 --exclude=web"
  ...
```