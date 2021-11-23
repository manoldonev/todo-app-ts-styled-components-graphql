import { useMutation, UseMutationOptions, useQuery, UseQueryOptions } from 'react-query';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };

function fetcher<TData, TVariables>(query: string, variables?: TVariables) {
  return async (): Promise<TData> => {
    const res = await fetch("https://fakeql.com/graphql/0bfe961b5d76d8f8ae63d882a1fadb8b", {
    method: "POST",
      body: JSON.stringify({ query, variables }),
    });

    const json = await res.json();

    if (json.errors) {
      const { message } = json.errors[0];

      throw new Error(message);
    }

    return json.data;
  }
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `DateTime` scalar represents a date and time following the ISO 8601 standard */
  DateTime: any;
  _Any: any;
  _FieldSet: any;
};

export type CreateTodoInput = {
  done: Scalars['Boolean'];
  task: Scalars['String'];
  user_id: Scalars['ID'];
};

export type CreateUserInput = {
  firstname: Scalars['String'];
};

export enum MathOptions {
  Ceil = 'CEIL',
  Floor = 'FLOOR',
  Round = 'ROUND'
}

export type Mutation = {
  __typename?: 'Mutation';
  _createSnapshot: Scalars['Boolean'];
  createTodo: Todo;
  createUser: User;
  deleteTodo: Scalars['ID'];
  deleteUser: Scalars['ID'];
  updateTodo: Todo;
  updateUser: User;
};


export type Mutation_CreateSnapshotArgs = {
  key: Scalars['String'];
};


export type MutationCreateTodoArgs = {
  input: CreateTodoInput;
};


export type MutationCreateUserArgs = {
  input: CreateUserInput;
};


export type MutationDeleteTodoArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['ID'];
};


export type MutationUpdateTodoArgs = {
  id: Scalars['ID'];
  input: UpdateTodoInput;
};


export type MutationUpdateUserArgs = {
  id: Scalars['ID'];
  input: UpdateUserInput;
};

export type Query = {
  __typename?: 'Query';
  _aggregation: Scalars['Float'];
  _entities: Array<Maybe<_Entity>>;
  _service: _Service;
  _typeDefs: Scalars['String'];
  todo?: Maybe<Todo>;
  todos?: Maybe<Array<Maybe<Todo>>>;
  user?: Maybe<User>;
  users?: Maybe<Array<Maybe<User>>>;
};


export type Query_AggregationArgs = {
  field?: Maybe<Scalars['String']>;
  ref?: Maybe<Scalars['String']>;
  stat: Scalars['String'];
  type?: Maybe<Scalars['String']>;
};


export type Query_EntitiesArgs = {
  representations: Array<Scalars['_Any']>;
};


export type QueryTodoArgs = {
  id: Scalars['ID'];
};


export type QueryTodosArgs = {
  dir?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  ref?: Maybe<Scalars['String']>;
  sort?: Maybe<Scalars['String']>;
  where?: Maybe<TodosWhere>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};


export type QueryUsersArgs = {
  dir?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  ref?: Maybe<Scalars['String']>;
  sort?: Maybe<Scalars['String']>;
  where?: Maybe<UsersWhere>;
};

export type Todo = {
  __typename?: 'Todo';
  _boolean: Scalars['Boolean'];
  _float: Scalars['Float'];
  _int: Scalars['Int'];
  _nest: Todo;
  _string: Scalars['String'];
  done: Scalars['Boolean'];
  id: Scalars['ID'];
  task: Scalars['String'];
  user: User;
};


export type Todo_FloatArgs = {
  fixed?: Maybe<Scalars['Int']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
};


export type Todo_IntArgs = {
  max?: Maybe<Scalars['Int']>;
  min?: Maybe<Scalars['Int']>;
};


export type Todo_StringArgs = {
  casing?: Maybe<Scalars['String']>;
  full?: Maybe<Scalars['Boolean']>;
  length?: Maybe<Scalars['Int']>;
  locale?: Maybe<Scalars['String']>;
  max?: Maybe<Scalars['Int']>;
  min?: Maybe<Scalars['Int']>;
  nationality?: Maybe<Scalars['String']>;
  pool?: Maybe<Scalars['String']>;
  sentences?: Maybe<Scalars['Int']>;
  syllables?: Maybe<Scalars['Int']>;
  template?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  words?: Maybe<Scalars['Int']>;
};


export type TodoTaskArgs = {
  length?: Maybe<Scalars['Int']>;
};

export type TodosWhere = {
  and?: Maybe<Array<TodosWhere>>;
  done_eq?: Maybe<Scalars['Boolean']>;
  done_exists?: Maybe<Scalars['Boolean']>;
  id_eq?: Maybe<Scalars['Float']>;
  id_ge?: Maybe<Scalars['Float']>;
  id_gt?: Maybe<Scalars['Float']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_le?: Maybe<Scalars['Float']>;
  id_lt?: Maybe<Scalars['Float']>;
  id_neq?: Maybe<Scalars['Float']>;
  id_nin?: Maybe<Array<Scalars['ID']>>;
  like?: Maybe<Scalars['String']>;
  not?: Maybe<Array<TodosWhere>>;
  or?: Maybe<Array<TodosWhere>>;
  search?: Maybe<Scalars['String']>;
  task_contains?: Maybe<Scalars['String']>;
  task_endswith?: Maybe<Scalars['String']>;
  task_eq?: Maybe<Scalars['String']>;
  task_exists?: Maybe<Scalars['Boolean']>;
  task_in?: Maybe<Array<Scalars['String']>>;
  task_neq?: Maybe<Scalars['String']>;
  task_nin?: Maybe<Array<Scalars['String']>>;
  task_startswith?: Maybe<Scalars['String']>;
  user_and?: Maybe<Array<UsersWhere>>;
  user_firstname_contains?: Maybe<Scalars['String']>;
  user_firstname_endswith?: Maybe<Scalars['String']>;
  user_firstname_eq?: Maybe<Scalars['String']>;
  user_firstname_exists?: Maybe<Scalars['Boolean']>;
  user_firstname_in?: Maybe<Array<Scalars['String']>>;
  user_firstname_neq?: Maybe<Scalars['String']>;
  user_firstname_nin?: Maybe<Array<Scalars['String']>>;
  user_firstname_startswith?: Maybe<Scalars['String']>;
  user_id_eq?: Maybe<Scalars['Float']>;
  user_id_exists?: Maybe<Scalars['Boolean']>;
  user_id_ge?: Maybe<Scalars['Float']>;
  user_id_gt?: Maybe<Scalars['Float']>;
  user_id_in?: Maybe<Array<Scalars['ID']>>;
  user_id_le?: Maybe<Scalars['Float']>;
  user_id_lt?: Maybe<Scalars['Float']>;
  user_id_neq?: Maybe<Scalars['Float']>;
  user_id_nin?: Maybe<Array<Scalars['ID']>>;
  user_like?: Maybe<Scalars['String']>;
  user_not?: Maybe<Array<UsersWhere>>;
  user_or?: Maybe<Array<UsersWhere>>;
  user_search?: Maybe<Scalars['String']>;
};

export type UpdateTodoInput = {
  done?: Maybe<Scalars['Boolean']>;
  task?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['ID']>;
};

export type UpdateUserInput = {
  firstname?: Maybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  _boolean: Scalars['Boolean'];
  _float: Scalars['Float'];
  _int: Scalars['Int'];
  _nest: User;
  _string: Scalars['String'];
  firstname: Scalars['String'];
  id: Scalars['ID'];
  todos?: Maybe<Array<Maybe<Todo>>>;
};


export type User_FloatArgs = {
  fixed?: Maybe<Scalars['Int']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
};


export type User_IntArgs = {
  max?: Maybe<Scalars['Int']>;
  min?: Maybe<Scalars['Int']>;
};


export type User_StringArgs = {
  casing?: Maybe<Scalars['String']>;
  full?: Maybe<Scalars['Boolean']>;
  length?: Maybe<Scalars['Int']>;
  locale?: Maybe<Scalars['String']>;
  max?: Maybe<Scalars['Int']>;
  min?: Maybe<Scalars['Int']>;
  nationality?: Maybe<Scalars['String']>;
  pool?: Maybe<Scalars['String']>;
  sentences?: Maybe<Scalars['Int']>;
  syllables?: Maybe<Scalars['Int']>;
  template?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  words?: Maybe<Scalars['Int']>;
};


export type UserFirstnameArgs = {
  length?: Maybe<Scalars['Int']>;
};


export type UserTodosArgs = {
  dir?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  ref?: Maybe<Scalars['String']>;
  sort?: Maybe<Scalars['String']>;
  where?: Maybe<TodosWhere>;
};

export type UsersWhere = {
  and?: Maybe<Array<UsersWhere>>;
  firstname_contains?: Maybe<Scalars['String']>;
  firstname_endswith?: Maybe<Scalars['String']>;
  firstname_eq?: Maybe<Scalars['String']>;
  firstname_exists?: Maybe<Scalars['Boolean']>;
  firstname_in?: Maybe<Array<Scalars['String']>>;
  firstname_neq?: Maybe<Scalars['String']>;
  firstname_nin?: Maybe<Array<Scalars['String']>>;
  firstname_startswith?: Maybe<Scalars['String']>;
  id_eq?: Maybe<Scalars['Float']>;
  id_ge?: Maybe<Scalars['Float']>;
  id_gt?: Maybe<Scalars['Float']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_le?: Maybe<Scalars['Float']>;
  id_lt?: Maybe<Scalars['Float']>;
  id_neq?: Maybe<Scalars['Float']>;
  id_nin?: Maybe<Array<Scalars['ID']>>;
  like?: Maybe<Scalars['String']>;
  not?: Maybe<Array<UsersWhere>>;
  or?: Maybe<Array<UsersWhere>>;
  search?: Maybe<Scalars['String']>;
};

export type _Entity = Todo | User;

export type _Service = {
  __typename?: '_Service';
  sdl?: Maybe<Scalars['String']>;
};

export type CreateTodoMutationVariables = Exact<{
  input: CreateTodoInput;
}>;


export type CreateTodoMutation = { __typename?: 'Mutation', createTodo: { __typename?: 'Todo', id: string, task: string, done: boolean } };

export type DeleteTodoMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteTodoMutation = { __typename?: 'Mutation', deleteTodo: string };

export type UpdateTodoMutationVariables = Exact<{
  id: Scalars['ID'];
  input: UpdateTodoInput;
}>;


export type UpdateTodoMutation = { __typename?: 'Mutation', updateTodo: { __typename?: 'Todo', id: string, task: string, done: boolean } };

export type TodosQueryVariables = Exact<{
  page?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  input?: Maybe<TodosWhere>;
  sort?: Maybe<Scalars['String']>;
  direction?: Maybe<Scalars['String']>;
}>;


export type TodosQuery = { __typename?: 'Query', todos?: Array<{ __typename?: 'Todo', id: string, task: string, done: boolean } | null | undefined> | null | undefined };


export const CreateTodoDocument = `
    mutation createTodo($input: CreateTodoInput!) {
  createTodo(input: $input) {
    id
    task
    done
  }
}
    `;
export const useCreateTodoMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<CreateTodoMutation, TError, CreateTodoMutationVariables, TContext>) =>
    useMutation<CreateTodoMutation, TError, CreateTodoMutationVariables, TContext>(
      'createTodo',
      (variables?: CreateTodoMutationVariables) => fetcher<CreateTodoMutation, CreateTodoMutationVariables>(CreateTodoDocument, variables)(),
      options
    );
export const DeleteTodoDocument = `
    mutation deleteTodo($id: ID!) {
  deleteTodo(id: $id)
}
    `;
export const useDeleteTodoMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<DeleteTodoMutation, TError, DeleteTodoMutationVariables, TContext>) =>
    useMutation<DeleteTodoMutation, TError, DeleteTodoMutationVariables, TContext>(
      'deleteTodo',
      (variables?: DeleteTodoMutationVariables) => fetcher<DeleteTodoMutation, DeleteTodoMutationVariables>(DeleteTodoDocument, variables)(),
      options
    );
export const UpdateTodoDocument = `
    mutation updateTodo($id: ID!, $input: UpdateTodoInput!) {
  updateTodo(id: $id, input: $input) {
    id
    task
    done
  }
}
    `;
export const useUpdateTodoMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<UpdateTodoMutation, TError, UpdateTodoMutationVariables, TContext>) =>
    useMutation<UpdateTodoMutation, TError, UpdateTodoMutationVariables, TContext>(
      'updateTodo',
      (variables?: UpdateTodoMutationVariables) => fetcher<UpdateTodoMutation, UpdateTodoMutationVariables>(UpdateTodoDocument, variables)(),
      options
    );
export const TodosDocument = `
    query Todos($page: Int, $limit: Int, $input: TodosWhere, $sort: String, $direction: String) {
  todos(page: $page, limit: $limit, where: $input, sort: $sort, dir: $direction) {
    id
    task
    done
  }
}
    `;
export const useTodosQuery = <
      TData = TodosQuery,
      TError = unknown
    >(
      variables?: TodosQueryVariables,
      options?: UseQueryOptions<TodosQuery, TError, TData>
    ) =>
    useQuery<TodosQuery, TError, TData>(
      variables === undefined ? ['Todos'] : ['Todos', variables],
      fetcher<TodosQuery, TodosQueryVariables>(TodosDocument, variables),
      options
    );