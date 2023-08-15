## generate types

```shell
nx generate @nrwl/js:library --name=generated-db-types --directory=api --tags "scope:api"
```

```shell
✔ Which unit test runner would you like to use? · none
✔ Which bundler would you like to use to build the library? Choose 'none' to skip build setup. · swc
```

### install package

```shell
npm i -D prisma-nestjs-graphql
```

### setting generator nestgraphql to schema.prisma

 `libs/api/data-access-db/src/lib/schema.prisma`

### prisma generate

```shell
npx prisma generate
```

_________________________________________________

## generate feature(ex. feature-user)

```shell
nx generate @nrwl/js:library --name=feature-user --directory=api --tags "scope:api"
```

```shell
✔ Which unit test runner would you like to use? · jest
✔ Which bundler would you like to use to build the library? Choose 'none' to skip build setup. · swc
```

### delete files  

* `api-feature-user.spec.ts`
* `api-feature-user.ts`

### generate resolver  

```shell
nx g @nrwl/nest:resource --project=api-feature-user --directory=lib --type="graphql-code-first" --crud --name user
```

### arange 

* move to generated files to lib folder  
* delete user folder
* delete dto folder
* delete entities folder
* fix export in index.ts  

```ts
export * from './lib/user.module';
```

### update user.module.ts

add PrismaModule to user.module.ts  

```ts
...
@Module({
  providers: [UserResolver, UserService],
  imports: [PrismaModule]
})
...
```

### update user.resolver.ts

* change method name: findAll() => users()
* change method name: findOne() => user()
* change args, types as generated-db-types names

### update user.service.ts

* add di PrismaService  
* change methods to use PrismaService
* change args, types as generated-db-types names

> If you need relation to get another table data, not forget to use include! 

### add UserModule to AppModule

add UserModule to AppModule
