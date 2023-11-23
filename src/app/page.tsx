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
  const { data } = await cookiesClient.graphql({
    query: mutations.createBook,
    variables: {
      input: {
        book_id: formData.get('book_id')?.toString() ?? '',
        user_id: formData.get('user_id')?.toString() ?? '',
        room_id: formData.get('room_id')?.toString() ?? '',
        datetime_in: formData.get('datetime_in')?.toString() ?? '',
        datetime_out: formData.get('datetime_out')?.toString() ?? '',
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


export default async function Home() {

  const { data, errors } = await cookiesClient.graphql({
    query: queries.listBooks
  });
  const listBooks = data.listBooks.items;

  // client.graphql({ query: subscriptions.onDeleteBook }).subscribe({
  //   next: ({ data }) => {const show = '<h1> Subscriptions Success </h1>';},
  //   error: (error) => console.warn(error)
  // });

  return (
    <main className=" min-h-screen p-24">
      {(!listBooks || listBooks.length === 0 || errors) && (
        <div>
          <p>No todos, please add one.</p>
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
          <th>--Delete(Mutation)</th>
        </tr>
        {listBooks.map((listBook) => {
          return (
            <tr>
              <td style={{ listStyle: 'none' }}>{listBook.id}</td>
              <td style={{ listStyle: 'none' }}>{listBook.book_id}</td>
              <td style={{ listStyle: 'none' }}>{listBook.user_id}</td>
              <td style={{ listStyle: 'none' }}>{listBook.room_id}</td>
              <td style={{ listStyle: 'none' }}>{listBook.datetime_in}</td>
              <td style={{ listStyle: 'none' }}>{listBook.datetime_out}</td>
              <td style={{ listStyle: 'none' }}>{listBook.remark}</td>
              <td>
                <form action={deleteBook}>
                  <button type="submit" name="id" value={listBook.id} >ลบ</button>
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

    </main>
  )
}
