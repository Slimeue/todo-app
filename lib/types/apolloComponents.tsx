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

export type CreateSettingsInput = {
  recieveEmails?: InputMaybe<Scalars['Boolean']['input']>;
  recieveNotifcations?: InputMaybe<Scalars['Boolean']['input']>;
  userId: Scalars['Int']['input'];
};

export type CreateUserArgs = {
  displayName?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createTodo: Todo;
  createUser: User;
  createUserSettings: UserSetting;
  deleteTodo: Todo;
  updateTodo: Todo;
};


export type MutationCreateTodoArgs = {
  input: TodoCreateInput;
};


export type MutationCreateUserArgs = {
  createUserData: CreateUserArgs;
};


export type MutationCreateUserSettingsArgs = {
  createUserSettingsData: CreateSettingsInput;
};


export type MutationDeleteTodoArgs = {
  id: Scalars['String']['input'];
};


export type MutationUpdateTodoArgs = {
  input: TodoUpdateInput;
};

export type Query = {
  __typename?: 'Query';
  /** Get all users */
  getAllUsers: Array<User>;
  getTodos?: Maybe<Array<Maybe<Todo>>>;
  /** Get user by id */
  getUserById?: Maybe<User>;
};


export type QueryGetUserByIdArgs = {
  id: Scalars['ID']['input'];
  username: Scalars['String']['input'];
};

export type Todo = {
  __typename?: 'Todo';
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  priority: Scalars['String']['output'];
  status: Scalars['String']['output'];
  title: Scalars['String']['output'];
  userId: Scalars['ID']['output'];
};

export type User = {
  __typename?: 'User';
  displayName?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  password: Scalars['String']['output'];
  settings?: Maybe<UserSetting>;
  todos?: Maybe<Array<Todo>>;
  username: Scalars['String']['output'];
};

export type UserSetting = {
  __typename?: 'UserSetting';
  recieveEmails: Scalars['Boolean']['output'];
  recieveNotifcations: Scalars['Boolean']['output'];
  userId: Scalars['ID']['output'];
};

export type TodoCreateInput = {
  description: Scalars['String']['input'];
  priority: Scalars['String']['input'];
  status: Scalars['String']['input'];
  title: Scalars['String']['input'];
  userId: Scalars['ID']['input'];
};

export type TodoUpdateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  priority?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type GetAllUserQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllUserQuery = { __typename?: 'Query', getAllUsers: Array<{ __typename?: 'User', id: string, username: string, password: string, displayName?: string | null }> };


export const GetAllUserDocument = gql`
    query GetAllUser {
  getAllUsers {
    id
    username
    password
    displayName
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