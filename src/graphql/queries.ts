/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getTodo = /* GraphQL */ `query GetTodo($id: ID!) {
  getTodo(id: $id) {
    id
    name
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetTodoQueryVariables, APITypes.GetTodoQuery>;
export const listTodos = /* GraphQL */ `query ListTodos(
  $filter: ModelTodoFilterInput
  $limit: Int
  $nextToken: String
) {
  listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListTodosQueryVariables, APITypes.ListTodosQuery>;
export const getUser = /* GraphQL */ `query GetUser($id: ID!) {
  getUser(id: $id) {
    user_id
    user_name
    description
    books {
      nextToken
      __typename
    }
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetUserQueryVariables, APITypes.GetUserQuery>;
export const listUsers = /* GraphQL */ `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      user_id
      user_name
      description
      id
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListUsersQueryVariables, APITypes.ListUsersQuery>;
export const getRoom = /* GraphQL */ `query GetRoom($id: ID!) {
  getRoom(id: $id) {
    room_id
    room_name
    description
    books {
      nextToken
      __typename
    }
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetRoomQueryVariables, APITypes.GetRoomQuery>;
export const listRooms = /* GraphQL */ `query ListRooms(
  $filter: ModelRoomFilterInput
  $limit: Int
  $nextToken: String
) {
  listRooms(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      room_id
      room_name
      description
      id
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListRoomsQueryVariables, APITypes.ListRoomsQuery>;
export const getBook = /* GraphQL */ `query GetBook($id: ID!) {
  getBook(id: $id) {
    book_id
    user_id
    room_id
    datetime_in
    datetime_out
    remark
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetBookQueryVariables, APITypes.GetBookQuery>;
export const listBooks = /* GraphQL */ `query ListBooks(
  $filter: ModelBookFilterInput
  $limit: Int
  $nextToken: String
) {
  listBooks(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      book_id
      user_id
      room_id
      datetime_in
      datetime_out
      remark
      id
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListBooksQueryVariables, APITypes.ListBooksQuery>;
export const booksByUser_id = /* GraphQL */ `query BooksByUser_id(
  $user_id: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelbookFilterInput
  $limit: Int
  $nextToken: String
) {
  booksByUser_id(
    user_id: $user_id
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      book_id
      user_id
      room_id
      datetime_in
      datetime_out
      remark
      id
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.BooksByUser_idQueryVariables,
  APITypes.BooksByUser_idQuery
>;
export const booksByRoom_id = /* GraphQL */ `query BooksByRoom_id(
  $room_id: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelbookFilterInput
  $limit: Int
  $nextToken: String
) {
  booksByRoom_id(
    room_id: $room_id
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      book_id
      user_id
      room_id
      datetime_in
      datetime_out
      remark
      id
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.BooksByRoom_idQueryVariables,
  APITypes.BooksByRoom_idQuery
>;
