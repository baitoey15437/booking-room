/* Amplify Params - DO NOT EDIT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

/**
* @type {import('@types/aws-lambda').APIGatewayProxyHandler}
*/

// exports.handler = async (event) => {
//     // ID = B0009
//     const bookID_last = (event.key1).substring(1); // 0009
//     const bookID_new = parseInt(bookID_last) + 1; // 9 + 1 = 10
//     var str_id = "" + bookID_new // 10 is str
//     var pad = "0000"
//     var ans = 'B'+ pad.substring(0, pad.length - str_id.length) + str_id //B0010
//     return {
//     statusCode: 200,
//     bookID: ans,
//     };
// };


exports.handler = async (event) => {
    console.log(`EVENT: ${JSON.stringify(event)}`);
    return {
        statusCode: 200,
    //  Uncomment below to enable CORS requests
    //  headers: {
    //      "Access-Control-Allow-Origin": "*",
    //      "Access-Control-Allow-Headers": "*"
    //  },
        body: JSON.stringify('Hello from Lambda!'),
    };
};

