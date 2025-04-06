// anything that happens in a browsers are called event
// use monitorEvent(document) to see all events happening
// use unmonitorEvent(document) to stop it

// event target is the entity on which the event occurs

// event listener is the location where the action for some event is written
    // use addEventListener() and removeEventListener()
    // eventTarget.addEventListener(event, function/ action);

// each event is associated with actions


function changeText(event){
    event.preventDefault(); // prevents default action
    let ele = document.getElementById("para1");
    ele.textContent = "Do not touch";
    console.log(event.type);
}

let para = document.getElementById("para1");
para.addEventListener("click", changeText); // always in bubbling phase

// phases of event
    // capturing phase - goiung to the target (useCapture true to be used in AEL)
    // at target phase
    // bubbling phase - going back to the root heirarchy

// event object

