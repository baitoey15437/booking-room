import { default as fetch, Request } from 'node-fetch';

const GRAPHQL_ENDPOINT = 'https://v5nz6gsc2fc2jhyqgvcwqkfyg4.appsync-api.ap-southeast-1.amazonaws.com/graphql';
const GRAPHQL_API_KEY = 'da2-ihuk3cncl5fwrljuo2llbvgvy4';

function GetQuery(event_key,data_input) {
    switch(event_key) {
        case 'CREATE':
            var variables = {input: data_input};
            var query = /* GraphQL */ `
            mutation CREATE_BOOK($input: CreateBookInput!) {
                createBook(input: $input) {
                    book_id
                    user_id
                    room_id
                    datetime_in
                    datetime_out
                    remark
                }
            }`;
            break;
            
        case 'READ':
            var variables = '';
            var query = /* GraphQL */ `
            query LIST_BOOK {
                listBooks {
                  items {
                      book_id
                      user_id
                      room_id
                      datetime_in
                      datetime_out
                      remark
                  }
                }
              }`;
            break;
            
        case 'UPDATE':
            var variables = {input: data_input};
            var query = /* GraphQL */ `
            mutation UPDATE_BOOK($input: UpdateBookInput!) {
                updateBook(input: $input) {
                    id
                    user_id
                    room_id
                    datetime_in
                    datetime_out
                    remark
                }
            }`;
            break;
            
        case 'DELETE':
            var variables = {input: data_input};
            var query = /* GraphQL */ `
            mutation DELETE_BOOK($input: DeleteBookInput!) {
                deleteBook(input: $input) {
                    id
                }
            }
            `;
            break;
        default:
            console.log('No');
    }
    return({query,variables});
}

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
export const handler = async (event) => {
  console.log(`EVENT: ${JSON.stringify(event)}`);
  
  const event_key = event.key1;
  const data_input = event.key2;
    
    var query = GetQuery(event_key,data_input).query;
    var variables = GetQuery(event_key,data_input).variables;

  /** @type {import('node-fetch').RequestInit} */
    const options = {
    method: 'POST',
    headers: {
      'x-api-key': GRAPHQL_API_KEY,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ query,variables })
  };
  

  const request = new Request(GRAPHQL_ENDPOINT, options);
  
  let statusCode = 200;
  let body;
  let response;

  try {
    response = await fetch(request);
    body = await response.json();
    if (body.errors) statusCode = 400;
  } catch (error) {
    statusCode = 400;
    body = {
      errors: [
        {
          status: response.status,
          message: error.message,
          stack: error.stack
        }
      ]
    };
  }

  return {
    statusCode,
    body: JSON.stringify(body)
  };
};

// var variables = {
            //     room_id:  'R005'
            //   };
            // var query = /* GraphQL */ `
            // query BooksByRoom_id($room_id: ID!) {
            //     booksByRoom_id(room_id: $room_id) {
            //       items {
            //           room_id
            //           datetime_in
            //           datetime_out
            //           remark
            //       }
            //     }
            //   }
            // `;