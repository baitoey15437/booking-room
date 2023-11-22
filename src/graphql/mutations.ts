/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createTodo = /* GraphQL */ `mutation CreateTodo(
  $input: CreateTodoInput!
  $condition: ModelTodoConditionInput
) {
  createTodo(input: $input, condition: $condition) {
    id
    name
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateTodoMutationVariables,
  APITypes.CreateTodoMutation
>;
export const updateTodo = /* GraphQL */ `mutation UpdateTodo(
  $input: UpdateTodoInput!
  $condition: ModelTodoConditionInput
) {
  updateTodo(input: $input, condition: $condition) {
    id
    name
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateTodoMutationVariables,
  APITypes.UpdateTodoMutation
>;
export const deleteTodo = /* GraphQL */ `mutation DeleteTodo(
  $input: DeleteTodoInput!
  $condition: ModelTodoConditionInput
) {
  deleteTodo(input: $input, condition: $condition) {
    id
    name
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteTodoMutationVariables,
  APITypes.DeleteTodoMutation
>;
export const createUser = /* GraphQL */ `mutation CreateUser(
  $input: CreateUserInput!
  $condition: ModelUserConditionInput
) {
  createUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateUserMutationVariables,
  APITypes.CreateUserMutation
>;
export const updateUser = /* GraphQL */ `mutation UpdateUser(
  $input: UpdateUserInput!
  $condition: ModelUserConditionInput
) {
  updateUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateUserMutationVariables,
  APITypes.UpdateUserMutation
>;
export const deleteUser = /* GraphQL */ `mutation DeleteUser(
  $input: DeleteUserInput!
  $condition: ModelUserConditionInput
) {
  deleteUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteUserMutationVariables,
  APITypes.DeleteUserMutation
>;
export const createRoom = /* GraphQL */ `mutation CreateRoom(
  $input: CreateRoomInput!
  $condition: ModelRoomConditionInput
) {
  createRoom(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateRoomMutationVariables,
  APITypes.CreateRoomMutation
>;
export const updateRoom = /* GraphQL */ `mutation UpdateRoom(
  $input: UpdateRoomInput!
  $condition: ModelRoomConditionInput
) {
  updateRoom(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateRoomMutationVariables,
  APITypes.UpdateRoomMutation
>;
export const deleteRoom = /* GraphQL */ `mutation DeleteRoom(
  $input: DeleteRoomInput!
  $condition: ModelRoomConditionInput
) {
  deleteRoom(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteRoomMutationVariables,
  APITypes.DeleteRoomMutation
>;
export const createBook = /* GraphQL */ `mutation CreateBook(
  $input: CreateBookInput!
  $condition: ModelBookConditionInput
) {
  createBook(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateBookMutationVariables,
  APITypes.CreateBookMutation
>;
export const updateBook = /* GraphQL */ `mutation UpdateBook(
  $input: UpdateBookInput!
  $condition: ModelBookConditionInput
) {
  updateBook(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateBookMutationVariables,
  APITypes.UpdateBookMutation
>;
export const deleteBook = /* GraphQL */ `mutation DeleteBook(
  $input: DeleteBookInput!
  $condition: ModelBookConditionInput
) {
  deleteBook(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteBookMutationVariables,
  APITypes.DeleteBookMutation
>;
