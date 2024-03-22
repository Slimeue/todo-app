"use client";

import { useQuery } from "@apollo/client";
import WithApolloLayout from "../../layouts/WithApolloLayout";
import { useGetAllUserQuery } from "../../lib/types/apolloComponents";
import Users from "@/components/users";
import Login from "@/components/login/login";

export default function Home() {
  return (
    <WithApolloLayout>
      <Users />
      <Login />
    </WithApolloLayout>
  );
}
