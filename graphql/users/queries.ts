import { gql } from "@apollo/client";

export const GET_USERS = gql`
  query GetAllUser {
    userQuery {
      getAllUsers {
        id
        username
        displayName
      }
    }
  }
`;
