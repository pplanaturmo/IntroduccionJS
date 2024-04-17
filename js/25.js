//Fetch API con Promises
//https://jsonplaceholder.typicode.com/

// const url = "https://jsonplaceholder.typicode.com/comments";
const url = "https://jsonplaceholder.typicode.com/comments/edfadsaes";

fetch(url)
  .then((response) => {
    console.log(response);
    if (response.ok) {
      return response.json();
    }
    throw new Error("Hay un error");
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error.message);
  });

