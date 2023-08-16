import { getGraphqlClient } from '@libs/web/data-access-graphql';
import { webEnv } from '../environments/environment';

const { api } = webEnv;

export const gql = getGraphqlClient(api.gqlUrl);
