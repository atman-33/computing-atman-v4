import { getGraphqlClient } from '@libs/web/data-access-graphql';
import { webAdminEnv } from '../environments/environment';

const { api } = webAdminEnv;

export const gql = getGraphqlClient(api.gqlUrl);
