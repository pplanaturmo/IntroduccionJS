//Fetch API con Async/Await
//https://jsonplaceholder.typicode.com/

// const url = "https://jsonplaceholder.typicode.com/comments/edfadsaes";

// fetch(url)
//   .then((response) => {
//     console.log(response);
//     if (response.ok) {
//       return response.json();
//     }
//     throw new Error("Hay un error");
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error.message);
//   });

const url = "https://jsonplaceholder.typicode.com/comments";

const consultarAPI = async () => {
try {
    const response = await fetch(url)
    if(!response.ok){
        throw new Error("falla aqui")
    }

    const data = await response.json()
    console.log(data)
    
} catch (error) {
    console.log(error.message)
}

};

consultarAPI();