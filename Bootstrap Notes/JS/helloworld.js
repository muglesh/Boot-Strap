console.log("hello world");

// creating variables
    // using var (only for local variables and not used now adays)
    // var is not block scoped
    function add(){
        var a = 1;
        // redeclaration is possible with var
        var b = 10;
        {
            c = 20;
        }
        console.log(c);
        console.log(a + b);
    }
add()
    // using let
    {
        let a = 10;
        // redeclaration is not allowed and is also dynamically typed language
        
    }
    // using const
    const f = 10;
    // updation and redeclaration is not posiible

// datatypes
    // premitive datatypes and non premitive datatypes
    // premitive - number, string, boolean, undefined, null, bigint, symbol

    // falscy values in JS - false, 0, Nan, null, undefined, "", '', ``, 0n

// operators
    // lose equality(==) vs strict equality(===)
    console.log("5" == 5);  //true
    console.log("5" === 5); //false
    // lose unequality(!=) vs strict equality(!==)

// Arrays
    let arr = [1, 2, 3, 4];

    let brr = new Array(1, "ten", true);

    console.log(typeof(arr));
    // operations - push(push back), pop(remove end), shift(remove first element)
        // unshift (add at start), slice(subarray), splice(replace range of elements with a given value)
        // map(performs a function on all the elements of the array)
        // filter (perform filter and then retrive elements)
        // reduce (perform a mathamical operation on  each element)
        // sort(inplace)
        // indexOf (gives the first index of element, if not -1)
        // find  (returns the first element that satisfies a condition, if not undefined)
        // forEach
    arr.splice(1, 3, 10);
    console.log(arr);

    arr.map((number)=>{
        console.log(number*number);
    })

    let evenArr = arr.filter((number) =>{
        if(number % 2 === 0){
            return true;
        }
    })

    let sum = arr.reduce((acc , cur ) =>{
        return cur + acc;//cur is next element to acc(if acc not initialised, the cur takes second element)
    }, 0);//intial value of acc(if not given takes the first value)

    arr.sort();
    let exp = [1, 38, 10, 15];
    exp.sort((a, b) => b - a); // descending order
    console.log(exp);


    arr = [1, 3, 4, 5, 6, 6]
    console.log(arr.indexOf(10));

    arr = [1, 3, 4, 5, 6, 6]
    console.log(arr.find((number) => number < 2));

    arr = [1, 3, 4, 5, 6, 6]
    arr.forEach((value, index) => {
        console.log(`value : ${value} and index : ${index}`);
    });



    obj = {
        name : "mugi",
        "full name" : "muglesh babu",
        age : 20,
        weight : 68
    }
    for(let k in obj){ //for in loop is used on enumerable objects
        console.log(k , ":", obj[k]);
    }

    arr = [123, "mugi", null]
    for(let i of arr){ // for of loop is used on iterable objects - strings, arrays etc
        console.log(i);
    }


// functions
    // basic syntax:
        // function functionName(parameters){
        // body
        // return returnValue;
        // }
    // function expression
        // let functionName = function(parameters){
        // body
        // }
    // arrow function
        // let functionName = (parameters) =>{
        // body
        // }


// function Hoistinng - process of pushing a function to the top of the current scope
// only on basic functions not on function expressions

// variable hoisting - only the declaration is done but the value is not given
    // only done on (var) only
// ex:
    console.log(age)
    var age = 25;


function solve(){
    return function(x){
        return x + 1;
    }
}
let inc = solve()
console.log(inc(10))

// variable scope
    // global(anywhere in the enitre code), function(inside function only), block


// temporal dead zone
    // part of code till where a variable taht is not declared is used

    console.log(x) // start of temporal dead zone
    console.log("hello") //end of tdz
    let x = 100;

// class - blueprint of an object (defines the properties and behaviour of objects)

    class human{
        occupation = "student"; // public
        #wt = 70; //private member
        #name;
        age;
        constructor(age, name){ // constructor
            this.age = age;
            this.#name = name;
        }
        get getWeight(){
            return this.#wt;
        }
        set setWeight(wt){
            this.#wt = wt
        }
    }
    let mugi = new human(20, "mugi");
    console.log(mugi.age)

    // getter and setter functions are used to acess private members


// in-built objects
    // MATH - (PI, min(), max(), round(),
        //  floor(), ceil(), abs(), random(), sqrt(), pow(), sin(), cos(), tan())
    // Date - 

    let today = new Date();
    let birthday = new Date(2004, 8, 11) // monthIndex = month - 1
    console.log(today);
    console.log(birthday);
    birthday.getDay();

// object cloning
class Exp{
    name;
    age;
    constructor(name, age){
        this.age = age;
        this.name = name;
    }
}
let obj1 = new Exp("mugi", 20);
obj1.uid = 71346;

let clone1 = {...obj1}; // spread operator
console.log(clone1);

let clone2 = Object.assign({}, obj1);  //assign funtion of Object object
console.log(clone2);

let clone3 = {}; // using iterations
for(let k in obj1){
    let key = k;
    let value = obj1[k];
    clone3[key] = value;
}
console.log(clone3);


// error handling - use try catch block
try{
    console.log("in the try block");
    console.log(x); // error -> refference error
    console.log("end of try"); // does not execute
}
catch(e){
    console.log("inside catch block");
    throw new Error("declare the variable to use"); // custom error
}
finally{
    console.log("finally is always executed");
}