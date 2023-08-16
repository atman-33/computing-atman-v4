import { gql } from '../data-access/graphql-client';

export default async function Index() {
  const { users } = await gql.GetUsers();

  return users.map((user) => {
    return (
      <div key={user.id} className="text-yellow-500">
        {user.name}
      </div>
    );
  });
}
