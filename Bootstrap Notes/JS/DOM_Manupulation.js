// window object is the global object that is at the top of heirarchy
    // it is created by the browser and everything comes under this
    window.console.log;ongamepadconnected("hello") // actual code

// DOM - document object model
    // html code is converted to js object which is called document
    // characters -> tags -> tokens -> nodes -> DOM(tree like struct)


// BOM - Browser object model
    // any interactions with the browser other than hmtl part

// changing html in js

    // access elements
    document.getElementById("fpara");
    document.getElementsByClassName("Class1"); // gives a array of elements
    document.getElementsByTagName("p");

    document.querySelector("#id") // use . for class and nothing for tags(only the first element is returned)
    document.querySelectorAll(".class1") // returns all the elements

    // update elements
        // setAttribute
        fheading.setAttribute("class", "c1");

        // className
        fheading.className = "c1 c2";

        // classlist
        fheading.classList.add("c3");
        fheading.classlist.remove("c2");
        fheading.classlist.toggle("c1"); // adds is not present, else remove
        fheading.classList.contains("c4"); // return true if c4 is in the list

        // innerHTML - gives the code inside a element
        let button = $0;
        button.innerHTML // get element
        button.innerHTML = "<p> hello </p>" // set element

        // outerHTML
        
        // textContent - gives the text as it is in the HTML code

        // innerText - gives the text that will be rendered

    // add elements
        let fheading = document.createElement("h1"); // create element 
        fheading.textContent = "this is muglesh"; 
        let bodyTag = document.querySelector("body");
        bodyTag.appendChild(fheading); // add element to the body

        // using insertAdjacentElement - use position or content 
            // options for position - beforeBegin, afterBegin, beforEnd, afterEnd

    // remove element - needs child and parent
        // parent.removeChild(child);

    
// chaning CSS using js
    // properties - 
    // .style (for single style),
    // .style.cssText (multiple),
    // .setAttribute()  // removes the previous value completely and sets it
    // .className
        fheading.style.backgroundColor = "blue";

        fheading.style.cssText = "background-color : red; padding : 1rem;";

        fheading.style.setAttribute("style" , "background-color : yellow; padding : 1rem;");
