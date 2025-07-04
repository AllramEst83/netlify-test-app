document.getElementById("call-function").addEventListener("click", () => {
  const responseElement = document.getElementById("response");
  responseElement.textContent = "Calling function...";

  // Functions are available at the /.netlify/functions/ path
  fetch("/.netlify/functions/hello")
    .then((response) => response.json())
    .then((data) => {
      responseElement.textContent = data.message;
    })
    .catch((error) => {
      console.error("Error calling function:", error);
      responseElement.textContent = "Error calling function.";
    });
});
