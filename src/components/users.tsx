import {
  useGetAllTodosQuery,
  useGetAllUserQuery,
} from "../../lib/types/apolloComponents";
import { Todos, workSpaces } from "./helpers";

const Users = () => {
  const { data, loading, error } = useGetAllTodosQuery({
    variables: {
      input: {
        page: 1,
        limit: 10,
        //TODO pagination // TODO refactor this is only testing of the query.
      },
    },
  });

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error :(</p>;

  console.log(data);
  const users = (data?.todoQuery?.getTodosByUserId?.items as Todos[]) || [];

  return (
    <div>
      <h1>
        {users.map((user) => (
          <text key={user.title}>{user.title} </text>
        ))}
      </h1>
    </div>
  );
};

export default Users;
