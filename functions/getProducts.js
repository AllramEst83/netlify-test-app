exports.handler = async function (event, context) {
  // You could even handle query parameters
  const { category } = event.queryStringParameters;

  const products = [
    { id: 101, name: "Laptop", category: "electronics" },
    { id: 102, name: "Book", category: "books" },
  ];

  const filteredProducts = category
    ? products.filter((p) => p.category === category)
    : products;

  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(filteredProducts),
  };
};
