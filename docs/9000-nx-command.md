# Common

## serve command

run dev backend  

```shell
nx serve api
```

run dev frontend  

```shell
nx serve web
```

run dev front and back  

```shell
npm run dev
```

## build command

```shell
nx build web
```

## stop listening server

check PID  

```shell
lsof -i :3000
```

kill PID  

```shell
kill <PID>
```

## show affected projects

```shell
nx show projects --affected --target=build --select=projects
```

## run test

```shell
nx run web:test
```

## nx graph

```shell
nx graph
```

## lint fix all

```shell
nx affected:lint --fix --all
```

## nx migrate etc

```shell
nx migrate latest
npx nx migrate --run-migrations
npm i
```

> if you need get latest next.js...

```shell
npm i next@latest
```

_________________________________________________

# Angular

## generate angular module

```
nx generate @nx/angular:module <module-name> --project=web
```

> outside of nx, ng g module <module-name>

## generate angular component

```
nx generate @nx/angular:component <component-name> --project=web
```

> outside of nx, ng g component <component-name>

_________________________________________________

# NestJS

## generate nestjs module

```
nx generate @nx/nest:module app/<module-name> --project=api
```

> outside of nx, nest g module <module-name>

## generate nestjs controller

```
nx generate @nx/nest:controller app/<controller-name> --project=api
```

> outside of nx, nest g controller <controller-name>

## generate nestjs resolver

```
nx generate @nx/nest:resolver app/<resolver-name> --project=api
```

> outside of nx, nest g resolver <resolver-name>

## generate nestjs service

```
nx generate @nx/nest:service app/<service-name> --project=api
```

> outside of nx, nest g service <service-name>
