import { ApolloProvider } from "@apollo/client";
import React, { ReactNode } from "react";
import { client } from "../lib/apollo/apolloClient";

type IProps = {
  children: ReactNode;
};

const WithApolloLayout: React.FC<IProps> = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default WithApolloLayout;
