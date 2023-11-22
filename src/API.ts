/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateTodoInput = {
  id?: string | null,
  name: string,
  description?: string | null,
};

export type ModelTodoConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelTodoConditionInput | null > | null,
  or?: Array< ModelTodoConditionInput | null > | null,
  not?: ModelTodoConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Todo = {
  __typename: "Todo",
  id: string,
  name: string,
  description?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateTodoInput = {
  id: string,
  name?: string | null,
  description?: string | null,
};

export type DeleteTodoInput = {
  id: string,
};

export type CreateUserInput = {
  user_id: string,
  user_name: string,
  description?: string | null,
  id?: string | null,
};

export type ModelUserConditionInput = {
  user_id?: ModelIDInput | null,
  user_name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type user = {
  __typename: "user",
  user_id: string,
  user_name: string,
  description?: string | null,
  books?: ModelbookConnection | null,
  id: string,
  createdAt: string,
  updatedAt: string,
};

export type ModelbookConnection = {
  __typename: "ModelbookConnection",
  items:  Array<book | null >,
  nextToken?: string | null,
};

export type book = {
  __typename: "book",
  book_id: string,
  user_id: string,
  room_id: string,
  datetime_in?: string | null,
  datetime_out?: string | null,
  remark?: string | null,
  id: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateUserInput = {
  user_id?: string | null,
  user_name?: string | null,
  description?: string | null,
  id: string,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateRoomInput = {
  room_id: string,
  room_name: string,
  description?: string | null,
  id?: string | null,
};

export type ModelRoomConditionInput = {
  room_id?: ModelIDInput | null,
  room_name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelRoomConditionInput | null > | null,
  or?: Array< ModelRoomConditionInput | null > | null,
  not?: ModelRoomConditionInput | null,
};

export type room = {
  __typename: "room",
  room_id: string,
  room_name: string,
  description?: string | null,
  books?: ModelbookConnection | null,
  id: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateRoomInput = {
  room_id?: string | null,
  room_name?: string | null,
  description?: string | null,
  id: string,
};

export type DeleteRoomInput = {
  id: string,
};

export type CreateBookInput = {
  book_id: string,
  user_id: string,
  room_id: string,
  datetime_in?: string | null,
  datetime_out?: string | null,
  remark?: string | null,
  id?: string | null,
};

export type ModelBookConditionInput = {
  book_id?: ModelIDInput | null,
  user_id?: ModelIDInput | null,
  room_id?: ModelIDInput | null,
  datetime_in?: ModelStringInput | null,
  datetime_out?: ModelStringInput | null,
  remark?: ModelStringInput | null,
  and?: Array< ModelBookConditionInput | null > | null,
  or?: Array< ModelBookConditionInput | null > | null,
  not?: ModelBookConditionInput | null,
};

export type UpdateBookInput = {
  book_id?: string | null,
  user_id?: string | null,
  room_id?: string | null,
  datetime_in?: string | null,
  datetime_out?: string | null,
  remark?: string | null,
  id: string,
};

export type DeleteBookInput = {
  id: string,
};

export type ModelTodoFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelTodoFilterInput | null > | null,
  or?: Array< ModelTodoFilterInput | null > | null,
  not?: ModelTodoFilterInput | null,
};

export type ModelTodoConnection = {
  __typename: "ModelTodoConnection",
  items:  Array<Todo | null >,
  nextToken?: string | null,
};

export type ModelUserFilterInput = {
  user_id?: ModelIDInput | null,
  user_name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<user | null >,
  nextToken?: string | null,
};

export type ModelRoomFilterInput = {
  room_id?: ModelIDInput | null,
  room_name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelRoomFilterInput | null > | null,
  or?: Array< ModelRoomFilterInput | null > | null,
  not?: ModelRoomFilterInput | null,
};

export type ModelRoomConnection = {
  __typename: "ModelRoomConnection",
  items:  Array<room | null >,
  nextToken?: string | null,
};

export type ModelBookFilterInput = {
  book_id?: ModelIDInput | null,
  user_id?: ModelIDInput | null,
  room_id?: ModelIDInput | null,
  datetime_in?: ModelStringInput | null,
  datetime_out?: ModelStringInput | null,
  remark?: ModelStringInput | null,
  and?: Array< ModelBookFilterInput | null > | null,
  or?: Array< ModelBookFilterInput | null > | null,
  not?: ModelBookFilterInput | null,
};

export type ModelBookConnection = {
  __typename: "ModelBookConnection",
  items:  Array<book | null >,
  nextToken?: string | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelbookFilterInput = {
  book_id?: ModelIDInput | null,
  user_id?: ModelIDInput | null,
  room_id?: ModelIDInput | null,
  datetime_in?: ModelStringInput | null,
  datetime_out?: ModelStringInput | null,
  remark?: ModelStringInput | null,
  and?: Array< ModelbookFilterInput | null > | null,
  or?: Array< ModelbookFilterInput | null > | null,
  not?: ModelbookFilterInput | null,
};

export type ModelSubscriptionTodoFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionTodoFilterInput | null > | null,
  or?: Array< ModelSubscriptionTodoFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionUserFilterInput = {
  user_id?: ModelSubscriptionIDInput | null,
  user_name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
};

export type ModelSubscriptionRoomFilterInput = {
  room_id?: ModelSubscriptionIDInput | null,
  room_name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionRoomFilterInput | null > | null,
  or?: Array< ModelSubscriptionRoomFilterInput | null > | null,
};

export type ModelSubscriptionBookFilterInput = {
  book_id?: ModelSubscriptionIDInput | null,
  user_id?: ModelSubscriptionIDInput | null,
  room_id?: ModelSubscriptionIDInput | null,
  datetime_in?: ModelSubscriptionStringInput | null,
  datetime_out?: ModelSubscriptionStringInput | null,
  remark?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionBookFilterInput | null > | null,
  or?: Array< ModelSubscriptionBookFilterInput | null > | null,
};

export type CreateTodoMutationVariables = {
  input: CreateTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type CreateTodoMutation = {
  createTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTodoMutationVariables = {
  input: UpdateTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type UpdateTodoMutation = {
  updateTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTodoMutationVariables = {
  input: DeleteTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type DeleteTodoMutation = {
  deleteTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "user",
    user_id: string,
    user_name: string,
    description?: string | null,
    books?:  {
      __typename: "ModelbookConnection",
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "user",
    user_id: string,
    user_name: string,
    description?: string | null,
    books?:  {
      __typename: "ModelbookConnection",
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "user",
    user_id: string,
    user_name: string,
    description?: string | null,
    books?:  {
      __typename: "ModelbookConnection",
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateRoomMutationVariables = {
  input: CreateRoomInput,
  condition?: ModelRoomConditionInput | null,
};

export type CreateRoomMutation = {
  createRoom?:  {
    __typename: "room",
    room_id: string,
    room_name: string,
    description?: string | null,
    books?:  {
      __typename: "ModelbookConnection",
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateRoomMutationVariables = {
  input: UpdateRoomInput,
  condition?: ModelRoomConditionInput | null,
};

export type UpdateRoomMutation = {
  updateRoom?:  {
    __typename: "room",
    room_id: string,
    room_name: string,
    description?: string | null,
    books?:  {
      __typename: "ModelbookConnection",
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteRoomMutationVariables = {
  input: DeleteRoomInput,
  condition?: ModelRoomConditionInput | null,
};

export type DeleteRoomMutation = {
  deleteRoom?:  {
    __typename: "room",
    room_id: string,
    room_name: string,
    description?: string | null,
    books?:  {
      __typename: "ModelbookConnection",
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateBookMutationVariables = {
  input: CreateBookInput,
  condition?: ModelBookConditionInput | null,
};

export type CreateBookMutation = {
  createBook?:  {
    __typename: "book",
    book_id: string,
    user_id: string,
    room_id: string,
    datetime_in?: string | null,
    datetime_out?: string | null,
    remark?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateBookMutationVariables = {
  input: UpdateBookInput,
  condition?: ModelBookConditionInput | null,
};

export type UpdateBookMutation = {
  updateBook?:  {
    __typename: "book",
    book_id: string,
    user_id: string,
    room_id: string,
    datetime_in?: string | null,
    datetime_out?: string | null,
    remark?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteBookMutationVariables = {
  input: DeleteBookInput,
  condition?: ModelBookConditionInput | null,
};

export type DeleteBookMutation = {
  deleteBook?:  {
    __typename: "book",
    book_id: string,
    user_id: string,
    room_id: string,
    datetime_in?: string | null,
    datetime_out?: string | null,
    remark?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetTodoQueryVariables = {
  id: string,
};

export type GetTodoQuery = {
  getTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTodosQueryVariables = {
  filter?: ModelTodoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTodosQuery = {
  listTodos?:  {
    __typename: "ModelTodoConnection",
    items:  Array< {
      __typename: "Todo",
      id: string,
      name: string,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "user",
    user_id: string,
    user_name: string,
    description?: string | null,
    books?:  {
      __typename: "ModelbookConnection",
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "user",
      user_id: string,
      user_name: string,
      description?: string | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetRoomQueryVariables = {
  id: string,
};

export type GetRoomQuery = {
  getRoom?:  {
    __typename: "room",
    room_id: string,
    room_name: string,
    description?: string | null,
    books?:  {
      __typename: "ModelbookConnection",
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListRoomsQueryVariables = {
  filter?: ModelRoomFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRoomsQuery = {
  listRooms?:  {
    __typename: "ModelRoomConnection",
    items:  Array< {
      __typename: "room",
      room_id: string,
      room_name: string,
      description?: string | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetBookQueryVariables = {
  id: string,
};

export type GetBookQuery = {
  getBook?:  {
    __typename: "book",
    book_id: string,
    user_id: string,
    room_id: string,
    datetime_in?: string | null,
    datetime_out?: string | null,
    remark?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListBooksQueryVariables = {
  filter?: ModelBookFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBooksQuery = {
  listBooks?:  {
    __typename: "ModelBookConnection",
    items:  Array< {
      __typename: "book",
      book_id: string,
      user_id: string,
      room_id: string,
      datetime_in?: string | null,
      datetime_out?: string | null,
      remark?: string | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type BooksByUser_idQueryVariables = {
  user_id: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelbookFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type BooksByUser_idQuery = {
  booksByUser_id?:  {
    __typename: "ModelbookConnection",
    items:  Array< {
      __typename: "book",
      book_id: string,
      user_id: string,
      room_id: string,
      datetime_in?: string | null,
      datetime_out?: string | null,
      remark?: string | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type BooksByRoom_idQueryVariables = {
  room_id: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelbookFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type BooksByRoom_idQuery = {
  booksByRoom_id?:  {
    __typename: "ModelbookConnection",
    items:  Array< {
      __typename: "book",
      book_id: string,
      user_id: string,
      room_id: string,
      datetime_in?: string | null,
      datetime_out?: string | null,
      remark?: string | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateTodoSubscriptionVariables = {
  filter?: ModelSubscriptionTodoFilterInput | null,
};

export type OnCreateTodoSubscription = {
  onCreateTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTodoSubscriptionVariables = {
  filter?: ModelSubscriptionTodoFilterInput | null,
};

export type OnUpdateTodoSubscription = {
  onUpdateTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTodoSubscriptionVariables = {
  filter?: ModelSubscriptionTodoFilterInput | null,
};

export type OnDeleteTodoSubscription = {
  onDeleteTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "user",
    user_id: string,
    user_name: string,
    description?: string | null,
    books?:  {
      __typename: "ModelbookConnection",
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "user",
    user_id: string,
    user_name: string,
    description?: string | null,
    books?:  {
      __typename: "ModelbookConnection",
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "user",
    user_id: string,
    user_name: string,
    description?: string | null,
    books?:  {
      __typename: "ModelbookConnection",
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateRoomSubscriptionVariables = {
  filter?: ModelSubscriptionRoomFilterInput | null,
};

export type OnCreateRoomSubscription = {
  onCreateRoom?:  {
    __typename: "room",
    room_id: string,
    room_name: string,
    description?: string | null,
    books?:  {
      __typename: "ModelbookConnection",
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateRoomSubscriptionVariables = {
  filter?: ModelSubscriptionRoomFilterInput | null,
};

export type OnUpdateRoomSubscription = {
  onUpdateRoom?:  {
    __typename: "room",
    room_id: string,
    room_name: string,
    description?: string | null,
    books?:  {
      __typename: "ModelbookConnection",
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteRoomSubscriptionVariables = {
  filter?: ModelSubscriptionRoomFilterInput | null,
};

export type OnDeleteRoomSubscription = {
  onDeleteRoom?:  {
    __typename: "room",
    room_id: string,
    room_name: string,
    description?: string | null,
    books?:  {
      __typename: "ModelbookConnection",
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateBookSubscriptionVariables = {
  filter?: ModelSubscriptionBookFilterInput | null,
};

export type OnCreateBookSubscription = {
  onCreateBook?:  {
    __typename: "book",
    book_id: string,
    user_id: string,
    room_id: string,
    datetime_in?: string | null,
    datetime_out?: string | null,
    remark?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateBookSubscriptionVariables = {
  filter?: ModelSubscriptionBookFilterInput | null,
};

export type OnUpdateBookSubscription = {
  onUpdateBook?:  {
    __typename: "book",
    book_id: string,
    user_id: string,
    room_id: string,
    datetime_in?: string | null,
    datetime_out?: string | null,
    remark?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteBookSubscriptionVariables = {
  filter?: ModelSubscriptionBookFilterInput | null,
};

export type OnDeleteBookSubscription = {
  onDeleteBook?:  {
    __typename: "book",
    book_id: string,
    user_id: string,
    room_id: string,
    datetime_in?: string | null,
    datetime_out?: string | null,
    remark?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
