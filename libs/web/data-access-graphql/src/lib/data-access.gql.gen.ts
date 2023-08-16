import * as Types from './types';

import { GraphQLClient } from 'graphql-request';
import { GraphQLClientRequestHeaders } from 'graphql-request/build/cjs/types';
import { gql } from 'graphql-request';
export type GetUsersVariables = Types.Exact<{ [key: string]: never; }>;


export type GetUsers = { __typename?: 'Query', users: Array<{ __typename?: 'User', id: string, email: string, name?: string | null }> };

export type GetHomeImagesVariables = Types.Exact<{ [key: string]: never; }>;


export type GetHomeImages = { __typename?: 'Query', homeBlocks: Array<{ __typename?: 'HomeBlock', id: string, navigationPath: string, image: { __typename?: 'Image', title?: string | null, imagePath: string, rgbBackground: { __typename?: 'RgbColor', r: number, g: number, b: number } } }> };


export const GetUsersDocument = /*#__PURE__*/ gql`
    query GetUsers {
  users {
    id
    email
    name
  }
}
    `;
export const GetHomeImagesDocument = /*#__PURE__*/ gql`
    query GetHomeImages {
  homeBlocks {
    id
    navigationPath
    image {
      title
      imagePath
      rgbBackground {
        r
        g
        b
      }
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    GetUsers(variables?: GetUsersVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetUsers> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetUsers>(GetUsersDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetUsers', 'query');
    },
    GetHomeImages(variables?: GetHomeImagesVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetHomeImages> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetHomeImages>(GetHomeImagesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetHomeImages', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;