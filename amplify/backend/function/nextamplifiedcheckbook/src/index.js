import { default as fetch, Request } from 'node-fetch';

const GRAPHQL_ENDPOINT = 'https://v5nz6gsc2fc2jhyqgvcwqkfyg4.appsync-api.ap-southeast-1.amazonaws.com/graphql';
const GRAPHQL_API_KEY = 'da2-ihuk3cncl5fwrljuo2llbvgvy4';

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
export const handler = async (event) => {
  console.log(`EVENT: ${JSON.stringify(event)}`);
  
// input value
  var room = event.key1;
  var start_time = event.key2;
  var end_time = event.key3;

// List Book by room and time
  var variables = {
      filter: {
        and: [
            {or:[
                  { and :[{ datetime_in: { ge : start_time }},{ datetime_in: { le : end_time }}]},
                  { and :[{ datetime_out: { ge : start_time }},{ datetime_out: { le : end_time }}]}
                ]
            },
            {room_id: { eq : room }}
          ]
        }
      };        
  const query = /* GraphQL */ `
    query LIST_BOOK($filter: ModelBookFilterInput) {
        listBooks(filter: $filter)
          {
            items {
                room_id
                book_id
                datetime_in
                datetime_out
              }
          }
        }
      `;
      
  /** @type {import('node-fetch').RequestInit} */
  const options = {
    method: 'POST',
    headers: {
      'x-api-key': GRAPHQL_API_KEY,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ query, variables })
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
  
  var items = body.data.listBooks.items;
  console.log(items);
  console.log(items.length);
  
  if (items.length == 0){
    console.log("available room");
  }else {
    console.log("Not available");
  }
  
  return {
    statusCode,
    body: JSON.stringify(body)
  };
};