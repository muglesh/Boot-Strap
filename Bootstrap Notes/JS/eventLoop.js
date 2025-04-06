// synchronous code 
    // code where all statements are executed without any waiting

// Asynchronous code
    // code where there is uncertainity in the time of its execution
    function myName(){
        console.log("mugi");
    }
    setTimeout(myName, 3000); // there is not gaurentee that this will execute after 3sec

// blocking of a thread 
    // when some part of the code is waiting for respones from someother part
    console.log("start");
    setTimeout(myName, 5000);
    console.log("end"); // this is blocke because it waits for the above line to execute after 5sec


// Event loops - handles async code (it enables js to do async code even if it is single threaded languange)
    // call stack - a entry of a process is made in this when it is called

    // Browser - any async code in call stack is given to this

    // callback queue - once the timeout is completed in the browser then it is given to this
        // the process in queue will be given to stack when the stack is empty


// Promise - it is a object which handles the returning value or completion state of async codes
    // it allows async methods to return values like sync methods
    // async code gives a promise that it will return a value, so contain the async code in a promise
    // there are three states - pending(initial state), fullfilled(operation completed successfully), rejected(operation failed)

    let firstProm = new Promise((resolve, reject) =>{
        // async code;
        setTimeout(myUid => {
            console.log("22bai71346");
        }, 5000);
        resolve(1001) // goes to fullfilled stae;
        reject(new Error("recjected")) // goes to rejected state
    });

    console.log(firstProm);

    // ex2
    let prom2 = new Promise((resolve, reject)=>{
        let x = true;
        if(x){
            resolve("promise resolved");
        }
        else{
            reject("promise rejected");
        }
    });

    prom2.then((message) => { // when the promise is resolved
        console.log(message);
        return "second message";
    }).then((message) => {  // promise chaining
        console.log(message);
    }).catch((message) => { // when the promise is rejected
        console.error(message);
    }).finally((message) =>{ // everytime
        console.log("this is in finally");
    })

    // promise all - combines multiple promises and is only resolvced when all the promises are resolved
        let p1 = new Promise((resolve, reject) =>{
            setTimeout(resolve("first resolved"), 1000, "first");
        });

        let p2 = new Promise((resolve, reject) =>{
            setTimeout(resolve("second resolved"), 4000, "second");
        });

        let p3 = new Promise((resolve, reject) =>{
            setTimeout(resolve("third resolved"), 5000, "third");
        });

        let p4 = Promise.all([p1, p2, p3]);
        p4.then((values) => {
            console.log(values);
        });


// async await - it is used to make async code to work like sync code
    // used to handle promises

async function firstAsync() { // creating async function (always returns a promise)
    setTimeout(() => {
        console.log("inside async function");
    }, 3000);
}
firstAsync();

// fetch API - it provides a interface to fetching some resource
    // requests in fetch API can be get, put, post, delete etc...

    async function secAsync() {
        let response = await fetch('https://jsonplaceholder.typicode.com/todos/1'); // keeps the code below until this is done

        let data = await response.json();

        console.log(response); //will have to wait till the data is recived
        console.log(data);
    }
    secAsync();
    // scenario :
        // prepare url / API endpoint -> sync 
        // fetch data -> network call -> async
        // process data -> sync 
