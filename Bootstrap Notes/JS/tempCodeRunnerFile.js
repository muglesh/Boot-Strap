async function secAsync() {
        let response = await fetch('https://jsonplaceholder.typicode.com/todos/1'); // keeps the code below until this is done

        let data = await response.json();

        // console.log(response); //will have to wait till the data is recived
        console.log(data);
    }
    secAsync();