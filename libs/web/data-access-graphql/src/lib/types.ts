export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type HomeBlockCountAggregate = {
  __typename?: 'HomeBlockCountAggregate';
  _all: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  imageId: Scalars['Int']['output'];
  navigationPath: Scalars['Int']['output'];
};

export type HomeBlockMaxAggregate = {
  __typename?: 'HomeBlockMaxAggregate';
  id?: Maybe<Scalars['String']['output']>;
  imageId?: Maybe<Scalars['String']['output']>;
  navigationPath?: Maybe<Scalars['String']['output']>;
};

export type HomeBlockMinAggregate = {
  __typename?: 'HomeBlockMinAggregate';
  id?: Maybe<Scalars['String']['output']>;
  imageId?: Maybe<Scalars['String']['output']>;
  navigationPath?: Maybe<Scalars['String']['output']>;
};

export type Image = {
  __typename?: 'Image';
  id: Scalars['ID']['output'];
  imagePath: Scalars['String']['output'];
  rgbBackground: RgbColor;
  rgbBackgroundId: Scalars['String']['output'];
  title?: Maybe<Scalars['String']['output']>;
};

export type ImageCountAggregate = {
  __typename?: 'ImageCountAggregate';
  _all: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  imagePath: Scalars['Int']['output'];
  rgbBackgroundId: Scalars['Int']['output'];
  title: Scalars['Int']['output'];
};

export type ImageMaxAggregate = {
  __typename?: 'ImageMaxAggregate';
  id?: Maybe<Scalars['String']['output']>;
  imagePath?: Maybe<Scalars['String']['output']>;
  rgbBackgroundId?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type ImageMinAggregate = {
  __typename?: 'ImageMinAggregate';
  id?: Maybe<Scalars['String']['output']>;
  imagePath?: Maybe<Scalars['String']['output']>;
  rgbBackgroundId?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createUser: User;
  removeUser: User;
  updateUser: User;
};


export type MutationCreateUserArgs = {
  data: UserCreateInput;
};


export type MutationRemoveUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationUpdateUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type ProductAvgAggregate = {
  __typename?: 'ProductAvgAggregate';
  discountPrice?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
};

export type ProductCategory = {
  __typename?: 'ProductCategory';
  _count: ProductCategoryCount;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type ProductCategoryCount = {
  __typename?: 'ProductCategoryCount';
  products: Scalars['Int']['output'];
};

export type ProductCategoryCountAggregate = {
  __typename?: 'ProductCategoryCountAggregate';
  _all: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
};

export type ProductCategoryMaxAggregate = {
  __typename?: 'ProductCategoryMaxAggregate';
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type ProductCategoryMinAggregate = {
  __typename?: 'ProductCategoryMinAggregate';
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type ProductCount = {
  __typename?: 'ProductCount';
  availableColors: Scalars['Int']['output'];
  images: Scalars['Int']['output'];
  productCategories: Scalars['Int']['output'];
  productLengths: Scalars['Int']['output'];
  productSizes: Scalars['Int']['output'];
};

export type ProductCountAggregate = {
  __typename?: 'ProductCountAggregate';
  _all: Scalars['Int']['output'];
  description: Scalars['Int']['output'];
  discountPrice: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  price: Scalars['Int']['output'];
};

export type ProductLength = {
  __typename?: 'ProductLength';
  _count: ProductLengthCount;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type ProductLengthCount = {
  __typename?: 'ProductLengthCount';
  products: Scalars['Int']['output'];
};

export type ProductLengthCountAggregate = {
  __typename?: 'ProductLengthCountAggregate';
  _all: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
};

export type ProductLengthMaxAggregate = {
  __typename?: 'ProductLengthMaxAggregate';
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type ProductLengthMinAggregate = {
  __typename?: 'ProductLengthMinAggregate';
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type ProductMaxAggregate = {
  __typename?: 'ProductMaxAggregate';
  description?: Maybe<Scalars['String']['output']>;
  discountPrice?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Int']['output']>;
};

export type ProductMinAggregate = {
  __typename?: 'ProductMinAggregate';
  description?: Maybe<Scalars['String']['output']>;
  discountPrice?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Int']['output']>;
};

export type ProductSize = {
  __typename?: 'ProductSize';
  _count: ProductSizeCount;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type ProductSizeCount = {
  __typename?: 'ProductSizeCount';
  products: Scalars['Int']['output'];
};

export type ProductSizeCountAggregate = {
  __typename?: 'ProductSizeCountAggregate';
  _all: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
};

export type ProductSizeMaxAggregate = {
  __typename?: 'ProductSizeMaxAggregate';
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type ProductSizeMinAggregate = {
  __typename?: 'ProductSizeMinAggregate';
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type ProductSumAggregate = {
  __typename?: 'ProductSumAggregate';
  discountPrice?: Maybe<Scalars['Int']['output']>;
  price?: Maybe<Scalars['Int']['output']>;
};

export type Query = {
  __typename?: 'Query';
  user: User;
  users: Array<User>;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type RgbColor = {
  __typename?: 'RgbColor';
  _count: RgbColorCount;
  b: Scalars['Int']['output'];
  g: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  r: Scalars['Int']['output'];
};

export type RgbColorAvgAggregate = {
  __typename?: 'RgbColorAvgAggregate';
  b?: Maybe<Scalars['Float']['output']>;
  g?: Maybe<Scalars['Float']['output']>;
  r?: Maybe<Scalars['Float']['output']>;
};

export type RgbColorCount = {
  __typename?: 'RgbColorCount';
  Image: Scalars['Int']['output'];
  products: Scalars['Int']['output'];
};

export type RgbColorCountAggregate = {
  __typename?: 'RgbColorCountAggregate';
  _all: Scalars['Int']['output'];
  b: Scalars['Int']['output'];
  g: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  r: Scalars['Int']['output'];
};

export type RgbColorMaxAggregate = {
  __typename?: 'RgbColorMaxAggregate';
  b?: Maybe<Scalars['Int']['output']>;
  g?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  r?: Maybe<Scalars['Int']['output']>;
};

export type RgbColorMinAggregate = {
  __typename?: 'RgbColorMinAggregate';
  b?: Maybe<Scalars['Int']['output']>;
  g?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  r?: Maybe<Scalars['Int']['output']>;
};

export type RgbColorSumAggregate = {
  __typename?: 'RgbColorSumAggregate';
  b?: Maybe<Scalars['Int']['output']>;
  g?: Maybe<Scalars['Int']['output']>;
  r?: Maybe<Scalars['Int']['output']>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<StringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
};

export type UserCountAggregate = {
  __typename?: 'UserCountAggregate';
  _all: Scalars['Int']['output'];
  email: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
};

export type UserCreateInput = {
  email: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
};

export type UserMaxAggregate = {
  __typename?: 'UserMaxAggregate';
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type UserMinAggregate = {
  __typename?: 'UserMinAggregate';
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type UserUpdateInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  password?: InputMaybe<StringFilter>;
};

export type UserWhereUniqueInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<StringFilter>;
  password?: InputMaybe<StringFilter>;
};
