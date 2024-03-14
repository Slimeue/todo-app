import { gql } from "@apollo/client";

export const GET_USERS = gql`
  query GetAllUser {
    getAllUsers {
      id
      username
      password
      displayName
    }
  }
`;
