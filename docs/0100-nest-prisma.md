## generate libs data-access-db 

```shell
nx generate @nrwl/js:library --name=data-access-db --directory=api --bundler=swc --tags "scope:api"

✔ Which unit test runner would you like to use? · none
✔ Which bundler would you like to use to build the library? Choose 'none' to skip build setup. · swc
```

delete `api-data-access-db.ts`

## install package

```shell
npm i -D prisma env-cmd
npm i @prisma/client
```

## generate schema.prisma

 `data-access-db/src/lib/schema.prisma`

## generate prisma.service.ts

 `data-access-db/src/lib/prisma.service.ts`

## generate prisma.module.ts

 `data-access-db/src/lib/prisma.module.ts`

## update index.ts

 `data-access-db/src/index.ts`

## update package.json

 `/package.json`

```json
  ...
  },
  "prisma": {
    "schema": "libs/api/data-access-db/src/lib/schema.prisma"
  }
}
```

## create .env.local

add db url to .env.local  

 `/.env.local`

```text
OKKINO_DB_URL=postgresql://postgres:mysecretpassword@localhost:5555/okkino-db?schema=public
```

## create docker-compose

 `/tools/okkino-environment/dev.docker-compose.yml`

```yml
version: '3.9'
services:
  db:
    image: postgres
    ports:
      - '5555:5432'
    volumes:
      - db-data:/var/lib/postgresql/data
    environment:
      POSTGRES_PASSWORD: mysecretpassword
      PGDATA: /var/lib/postgresql/data/pgdata
volumes:
  db-data:
```

## update package.json

add dockers:dev to scripts  

 `/package.json`

```json
  "scripts": {
    "db:dockers:dev": "docker-compose -f tools/okkino-environment/dev.docker-compose.yml up -d --no-recreate --remove-orphans",
    "db:migrate:dev": "npx env-cmd -f .env.local npx prisma migrate dev",
    "db:studio": "npx env-cmd -f .env.local npx prisma studio"
  },
 ```

 ## prisma migration
 migration  
 
 

```shell
npm db:migrate:dev
 ```

> If you want to reset data, at first delete migration folder and then run migrate command.

run prisma studio  

 

```shell
npm db:studio
 ```