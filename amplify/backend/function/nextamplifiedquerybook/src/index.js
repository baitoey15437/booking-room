import { default as fetch, Request } from 'node-fetch';
  
const GRAPHQL_ENDPOINT = 'https://v5nz6gsc2fc2jhyqgvcwqkfyg4.appsync-api.ap-southeast-1.amazonaws.com/graphql';
const GRAPHQL_API_KEY = 'da2-ihuk3cncl5fwrljuo2llbvgvy4';


function Query(query, variables){
  
  /** @type {import('node-fetch').RequestInit} */
  let options = {
    method: 'POST',
    headers: {
      'x-api-key': GRAPHQL_API_KEY,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ query, variables })
  };
  return(options);
}

function GetBook(start_time,end_time){
  // List Book by room and time
  var variables = {
      filter: {
            or:[
                 { and :[{ datetime_in: { ge : start_time }},{ datetime_in: { le : end_time }}]},
                 { and :[{ datetime_out: { ge : start_time }},{ datetime_out: { le : end_time }}]}
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
  
  return({query,variables});
}

function GetRoom(text){
    var variables = {
          filter: {and: text}
        };   
    const query = /* GraphQL */ `
    query LIST_ROOM ($filter: ModelRoomFilterInput){
      listRooms (filter: $filter)
      {
        items {
          room_id
          room_name
          description
        }
      }
    }
  `;
  return({query,variables});
}


/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
export const handler = async (event) => {
  console.log(`EVENT: ${JSON.stringify(event)}`);
  
// input value
  const start_time = event.key1;
  const end_time = event.key2;
  

  var query = GetBook(start_time,end_time).query;
  var variables = GetBook(start_time,end_time).variables;
  
  var options = Query(query, variables);
  
  var request = new Request(GRAPHQL_ENDPOINT, options);

  var statusCode = 200;
  var body;
  var response;
  
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
  var text = [];
  if (items.length == 0){
    console.log("available room");
  }else {
    for (let i = 0; i < items.length; i++) {
      text[i] = { 
        room_id: {
          ne: items[i].room_id
          }
        };
    }
  }
  console.log(text);
  console.log(typeof text);
  
  var query = GetRoom(text).query;
  var variables = GetRoom(text).variables;
  
  var options = Query(query, variables);
  
  var request = new Request(GRAPHQL_ENDPOINT, options);
  
  response = await fetch(request);
  body = await response.json();
  
  console.log(body.data.listRooms.items);

  // var statusCode = 200;
  // var body;
  // var response;
  
  // try {
  //   response = await fetch(request);
  //   body = await response.json();
  //   if (body.errors) statusCode = 400;
  // } catch (error) {
  //   statusCode = 400;
  //   body = {
  //     errors: [
  //       {
  //         status: response.status,
  //         message: error.message,
  //         stack: error.stack
  //       }
  //     ]
  //   };
  // }

  return {
    statusCode,
    body: JSON.stringify(body)
  };
};
