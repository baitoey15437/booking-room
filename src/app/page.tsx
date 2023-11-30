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

const client = generateClient();
Amplify.configure(awsconfig);

export const cookiesClient = generateServerClientUsingCookies({
  config,
  cookies
});

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
  const date_start : any = formData.get('datetime_in')?.toString()
  const date_end : any = formData.get('datetime_out')?.toString()

  console.log(date_start);

  const datetime_in = new Date(date_start);
  const datetime_out = new Date(date_end);

  console.log(datetime_in);
  console.log(datetime_out);

  // const { data } = await cookiesClient.graphql({
  //   query: mutations.createBook,
  //   variables: {
  //     input: {
  //       book_id: formData.get('book_id')?.toString() ?? '',
  //       user_id: formData.get('user_id')?.toString() ?? '',
  //       room_id: formData.get('room_id')?.toString() ?? '',
  //       datetime_in: datetime_in ?? null,
  //       datetime_out: datetime_out ?? null,
  //       remark: formData.get('remark')?.toString() ?? ''
  //     }
  //   }
  // });
  // console.log("Created Book: ", data?.createBook )
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

function getDateTime(str : any) {
  const dt = new Date(str);
  const date_time = dt.toLocaleString('en-GB')
  return date_time
}


export default async function Home() {

  const { data, errors } = await cookiesClient.graphql({
    query: queries.listBooks
  });
  const listBooks = data.listBooks.items;

  // var a:number = 1;
  // console.log('aa1 = ' + a)

  // var a = a + 1;
  // console.log('aa4 = ' + a)

  // client.graphql({ query: subscriptions.onDeleteBook }).subscribe({
  //   next: ({ data }) => {
  //     var a:number = a + 1;
  //     console.log('aa2 = ' + a);
  //   },
  //   error: (error) => console.warn(error)
  // });
  
  // console.log('aa3 = ' + a)

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
      <form action={createUser}>
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
      </form><br />

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
      <h1>--- Subscription ---</h1>
      {
        // a == 'true'
        // ? 'Subscriptions Success'
        // : 'NO Subscriptions!'
      }
    
    </main>
  )
}
