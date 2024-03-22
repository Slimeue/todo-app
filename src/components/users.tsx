import { useGetAllUserQuery } from "../../lib/types/apolloComponents";

const Users = () => {
  const { data, loading, error } = useGetAllUserQuery();

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error :(</p>;

  console.log(data);

  return (
    <div>
      <h1>Users</h1>
    </div>
  );
};

export default Users;
