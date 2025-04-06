// closure 
//  it is the comibination of a function and (required data or lexical scope or surrounding state)

// case 1 :
let outerFunc = () => {
    {
        let name = "muglesh";
    }
    let name = "mugi";
    let innerFunc = () =>{
        let name = "babu"; 
        console.log(name); // uses the name that in the closest block
    }
    innerFunc();
}
outerFunc();

// case 2 :
function outer(){
    let name = "mugi";
    function inner(){
        console.log(name);
    }
    return inner;
}

let temp = outer;
temp();// still prints "mugi" even if the scope of the name variable is completed
// this is because the reference of name variable binds with the function
// that is the space for name variable is not freed