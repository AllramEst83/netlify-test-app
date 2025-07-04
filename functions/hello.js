// The handler function is the entry point for your serverless function.
exports.handler = async function (event, context) {
  // We'll get our secret message from an environment variable.
  const mySecret = process.env.MY_SECRET_MESSAGE;

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      message: `Hello from the server! The secret is: ${mySecret}`,
    }),
  };
};
