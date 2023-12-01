import { Amplify } from 'aws-amplify';
import { generateServerClientUsingCookies } from '@aws-amplify/adapter-nextjs/api';
import { generateClient } from 'aws-amplify/api';
import awsconfig from '@/aws-exports';
import { cookies } from 'next/headers';
import config from '@/amplifyconfiguration.json';
import { revalidatePath } from 'next/cache';
import * as queries from '@/graphql/queries';
import * as mutations from '@/graphql/mutations';
import * as subscriptions from '@/graphql/subscriptions';
import { InvokeCommand, LambdaClient, LogType } from "@aws-sdk/client-lambda";

const client = generateClient();
Amplify.configure(awsconfig);

export const cookiesClient = generateServerClientUsingCookies({
  config,
  cookies
});

const invoke = async (funcName : any, payload : any) => {
  "use server"
  const client = new LambdaClient({});
  const command = new InvokeCommand({
    FunctionName: funcName,
    Payload: JSON.stringify(payload),
    LogType: LogType.Tail,
  });
  const { Payload, LogResult } = await client.send(command);
  const result = Buffer.from(Payload).toString();
  const logs = Buffer.from(LogResult, "base64").toString();
  return { logs, result };
};
/** snippet-end:[javascript.v3.lambda.actions.Invoke] */

async function createUser(formData: FormData) {
  "use server"
  const { data } = await cookiesClient.graphql({
    query: mutations.createUser,
    variables: {
      input: {
        user_id: formData.get('user_id')?.toString() ?? '',
        user_name: formData.get('user_name')?.toString() ?? '',
        description: formData.get('description')?.toString() ?? ''
      }
    }
  });
  console.log("Created User: ", data?.createUser )
  revalidatePath('/');
}

async function createRoom(formData: FormData) {
  "use server"
  const { data } = await cookiesClient.graphql({
    query: mutations.createRoom,
    variables: {
      input: {
        room_id: formData.get('room_id')?.toString() ?? '',
        room_name: formData.get('room_name')?.toString() ?? '',
        description: formData.get('description')?.toString() ?? ''
      }
    }
  });
  console.log("Created Room: ", data?.createRoom )
  revalidatePath('/');
}

async function createBook(formData: FormData) {
  "use server"
  //convert date 30/11/2023T13:00 to 2023-11-30T06:00:00.000Z
  const date_start : any = formData.get('datetime_in')?.toString()
  const date_end : any = formData.get('datetime_out')?.toString()
  const datetime_in = new Date(date_start);
  const datetime_out = new Date(date_end);



  const { data } = await cookiesClient.graphql({
    query: mutations.createBook,
    variables: {
      input: {
        book_id: formData.get('book_id')?.toString() ?? '',
        user_id: formData.get('user_id')?.toString() ?? '',
        room_id: formData.get('room_id')?.toString() ?? '',
        datetime_in: datetime_in ?? null,
        datetime_out: datetime_out ?? null,
        remark: formData.get('remark')?.toString() ?? ''
      }
    }
  });
  console.log("Created Book: ", data?.createBook )
  revalidatePath('/');
}

async function deleteBook(formData: FormData) {
  "use server"
  const { data } = await cookiesClient.graphql({
    query: mutations.deleteBook,
    variables: {
      input: {
        id: formData.get('id')?.toString() ?? '',
      }
    }
  });
  console.log("Delete Book: ", data?.deleteBook )
  revalidatePath('/');
}

const getDateTime = (str : any) => {
  //convert date 2023-11-30T06:00:00.000Z to 30/11/2023, 13:00:00
  const dt = new Date(str); //any to date
  const date_time = dt.toLocaleString('en-GB')// 24 hr.
  return date_time
}


const QueryRoomAvailable = async (formData: FormData) => {
  "use server"
  const date_start : any = formData.get('datetime_in')?.toString()
  const date_end : any = formData.get('datetime_out')?.toString()
  const datetime_in = new Date(date_start);
  const datetime_out = new Date(date_end);
  const funcName = 'nextamplifiedquerybook-dev';
  const payload = {
    "key1": datetime_in,
    "key2": datetime_out
  };
  const data = (await invoke(funcName,payload)).result;
  console.log(data);
  //return data
}

export default async function Home() {

  const { data, errors } = await cookiesClient.graphql({
    query: queries.listBooks
  });
  const listBooks = data.listBooks.items;

  // client.graphql({ query: subscriptions.onDeleteBook }).subscribe({
  //   next: ({ data }) => { console.log('Subscriptions Succes')},
  //   error: (error) => console.warn(error)
  // });

  return (
    <main className=" min-h-screen p-24">
      {(!listBooks || listBooks.length === 0 || errors) && (
        <div>
          <p>No Booking, please add one.</p>
        </div>
      )}
    <h1>--- Query ---</h1>
    <table>
      <tbody>
        <tr>
          <th>ID</th>
          <th>Book ID</th>
          <th>User</th>
          <th>Room</th>
          <th>Start Time</th>
          <th>End Time</th>
          <th>Remark</th>
          <th></th>
        </tr>
        {listBooks.map((listBook) => {
          return (
            <tr>
              <td>{listBook.id}</td>
              <td>{listBook.book_id}</td>
              <td>{listBook.user_id}</td>
              <td>{listBook.room_id}</td>
              <td>{getDateTime(listBook.datetime_in)}</td>
              <td>{getDateTime(listBook.datetime_out)}</td>
              <td>{listBook.remark}</td>
              <td>
                <form action={deleteBook}>
                  <button type="submit" name="id" value={listBook.id} >delete</button>
                </form>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
<br />
<h1>--- Mutation ---</h1>
      {/* <form action={createUser}>
        createUser <br />
        id<input name="user_id" /> <br />
        name<input name="user_name" /> <br />
        description<input name="description" />
        <button type="submit"> เพิ่ม</button>
      </form><br />

      <form action={createRoom}>
        createRoom <br />
        id<input name="room_id" /> <br />
        name<input name="room_name" /> <br />
        description<input name="description" />
        <button type="submit"> เพิ่ม</button>
      </form><br /> */}

      <form action={createBook}>
      createBook <br />
        id_book<input name="book_id" /> <br />
        user_id<input name="user_id" /> <br />
        room_id<input name="room_id" /> <br />
        datetime_in<input type="datetime-local" name="datetime_in" /> <br />
        datetime_out<input type="datetime-local" name="datetime_out" /> <br />
        remark<input name="remark" />
        <button type="submit"> เพิ่ม</button>
      </form> <br />
      {/* <h1>--- Subscription ---</h1> */}
      {/* {
        a == 'true'
        ? 'Subscriptions Success'
        : 'NO Subscriptions!'
      } */}

      <form action={QueryRoomAvailable}>
      QueryRoomAvailable <br />
        datetime_in<input type="datetime-local" name="datetime_in" /> <br />
        datetime_out<input type="datetime-local" name="datetime_out" /> <br />
        <button type="submit"> ค้นหา</button>
      </form> <br />

    </main>
  )
}
