import { gql } from "@apollo/client";

export const GET_TODO = gql`
  query GetAllTodos($input: TodoPaginationInput!) {
    todoQuery {
      getTodosByUserId(input: $input) {
        items {
          title
          description
          status
          priority
          userId
        }
      }
    }
  }
`;
