import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type CreateUserArgs = {
  displayName?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type Meta = {
  __typename?: 'Meta';
  limit: Scalars['Float']['output'];
  page: Scalars['Float']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createTodo: Todo;
  createTodoCategory: TodoCategory;
  createUser: User;
  createWorkSpace: WorkSpace;
  deleteTodo: Todo;
  updateTodo: Todo;
  updateTodoCategory: TodoCategory;
};


export type MutationCreateTodoArgs = {
  input: TodoCreateInput;
};


export type MutationCreateTodoCategoryArgs = {
  input: TodoCategoryCreateInput;
};


export type MutationCreateUserArgs = {
  createUserData: CreateUserArgs;
};


export type MutationCreateWorkSpaceArgs = {
  input: WorkSpaceCreateInput;
};


export type MutationDeleteTodoArgs = {
  id: Scalars['String']['input'];
};


export type MutationUpdateTodoArgs = {
  input: TodoUpdateInput;
};


export type MutationUpdateTodoCategoryArgs = {
  input: TodoCategoryUpdateInput;
};

export type Query = {
  __typename?: 'Query';
  todoCategoryQuery?: Maybe<TodoCategory>;
  todoQuery?: Maybe<Todo>;
  userQuery: User;
};

export enum Role {
  Admin = 'ADMIN',
  Member = 'MEMBER',
  Owner = 'OWNER',
  User = 'USER'
}

export type Todo = {
  __typename?: 'Todo';
  category?: Maybe<Scalars['String']['output']>;
  categoryId?: Maybe<Scalars['ID']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  getTodo?: Maybe<Todo>;
  getTodosByUserId?: Maybe<TodoSearch>;
  id: Scalars['ID']['output'];
  priority: Scalars['String']['output'];
  status: Scalars['String']['output'];
  title: Scalars['String']['output'];
  userId: Scalars['ID']['output'];
};


export type TodoGetTodoArgs = {
  id: Scalars['String']['input'];
};


export type TodoGetTodosByUserIdArgs = {
  input: TodoPaginationInput;
};

export type TodoCategory = {
  __typename?: 'TodoCategory';
  description?: Maybe<Scalars['String']['output']>;
  getTodoCategories?: Maybe<TodoCategorySearch>;
  getTodoCategory?: Maybe<TodoCategory>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  userId: Scalars['ID']['output'];
};


export type TodoCategoryGetTodoCategoriesArgs = {
  input: TodoCategoryPaginationInput;
};


export type TodoCategoryGetTodoCategoryArgs = {
  id: Scalars['String']['input'];
};

export type TodoCategoryCreateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type TodoCategoryPaginationInput = {
  accountId?: InputMaybe<Scalars['String']['input']>;
  limit?: Scalars['Float']['input'];
  orderBy?: InputMaybe<Scalars['String']['input']>;
  page?: Scalars['Float']['input'];
  search?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type TodoCategorySearch = {
  __typename?: 'TodoCategorySearch';
  items?: Maybe<Array<TodoCategory>>;
  meta: Meta;
};

export type TodoCategoryUpdateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};

export type TodoPaginationInput = {
  accountId?: InputMaybe<Scalars['String']['input']>;
  limit?: Scalars['Float']['input'];
  orderBy?: InputMaybe<Scalars['String']['input']>;
  page?: Scalars['Float']['input'];
  search?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type TodoSearch = {
  __typename?: 'TodoSearch';
  items?: Maybe<Array<Todo>>;
  meta: Meta;
};

export type User = {
  __typename?: 'User';
  displayName?: Maybe<Scalars['String']['output']>;
  getAllUsers?: Maybe<Array<User>>;
  getUserById?: Maybe<User>;
  id: Scalars['ID']['output'];
  password: Scalars['String']['output'];
  roles: Array<Role>;
  salt: Scalars['String']['output'];
  username: Scalars['String']['output'];
  workSpaces?: Maybe<Array<WorkSpace>>;
};


export type UserGetUserByIdArgs = {
  id: Scalars['ID']['input'];
  username: Scalars['String']['input'];
};

export type WorkSpace = {
  __typename?: 'WorkSpace';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  ownerId: Scalars['String']['output'];
};

export type WorkSpaceCreateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  ownerId: Scalars['String']['input'];
};

export type TodoCreateInput = {
  categoryId?: InputMaybe<Scalars['ID']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  priority: Scalars['String']['input'];
  status: Scalars['String']['input'];
  title: Scalars['String']['input'];
  userId: Scalars['ID']['input'];
};

export type TodoUpdateInput = {
  categoryId?: InputMaybe<Scalars['ID']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  priority?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type GetAllTodosQueryVariables = Exact<{
  input: TodoPaginationInput;
}>;


export type GetAllTodosQuery = { __typename?: 'Query', todoQuery?: { __typename?: 'Todo', getTodosByUserId?: { __typename?: 'TodoSearch', items?: Array<{ __typename?: 'Todo', title: string, description?: string | null, status: string, priority: string, userId: string }> | null } | null } | null };

export type GetAllUserQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllUserQuery = { __typename?: 'Query', userQuery: { __typename?: 'User', getAllUsers?: Array<{ __typename?: 'User', id: string, username: string, displayName?: string | null }> | null } };


export const GetAllTodosDocument = gql`
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

/**
 * __useGetAllTodosQuery__
 *
 * To run a query within a React component, call `useGetAllTodosQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllTodosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllTodosQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetAllTodosQuery(baseOptions: Apollo.QueryHookOptions<GetAllTodosQuery, GetAllTodosQueryVariables> & ({ variables: GetAllTodosQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllTodosQuery, GetAllTodosQueryVariables>(GetAllTodosDocument, options);
      }
export function useGetAllTodosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllTodosQuery, GetAllTodosQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllTodosQuery, GetAllTodosQueryVariables>(GetAllTodosDocument, options);
        }
export function useGetAllTodosSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllTodosQuery, GetAllTodosQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllTodosQuery, GetAllTodosQueryVariables>(GetAllTodosDocument, options);
        }
export type GetAllTodosQueryHookResult = ReturnType<typeof useGetAllTodosQuery>;
export type GetAllTodosLazyQueryHookResult = ReturnType<typeof useGetAllTodosLazyQuery>;
export type GetAllTodosSuspenseQueryHookResult = ReturnType<typeof useGetAllTodosSuspenseQuery>;
export type GetAllTodosQueryResult = Apollo.QueryResult<GetAllTodosQuery, GetAllTodosQueryVariables>;
export const GetAllUserDocument = gql`
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

/**
 * __useGetAllUserQuery__
 *
 * To run a query within a React component, call `useGetAllUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllUserQuery(baseOptions?: Apollo.QueryHookOptions<GetAllUserQuery, GetAllUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllUserQuery, GetAllUserQueryVariables>(GetAllUserDocument, options);
      }
export function useGetAllUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllUserQuery, GetAllUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllUserQuery, GetAllUserQueryVariables>(GetAllUserDocument, options);
        }
export function useGetAllUserSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllUserQuery, GetAllUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllUserQuery, GetAllUserQueryVariables>(GetAllUserDocument, options);
        }
export type GetAllUserQueryHookResult = ReturnType<typeof useGetAllUserQuery>;
export type GetAllUserLazyQueryHookResult = ReturnType<typeof useGetAllUserLazyQuery>;
export type GetAllUserSuspenseQueryHookResult = ReturnType<typeof useGetAllUserSuspenseQuery>;
export type GetAllUserQueryResult = Apollo.QueryResult<GetAllUserQuery, GetAllUserQueryVariables>;