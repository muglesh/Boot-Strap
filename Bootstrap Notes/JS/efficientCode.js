// code 1
const t1 = performance.now();

for(let i = 0; i < 100; i++){
    let para = document.createElement('p');
    para.textContent = "para " + i;
    document.body.appendChild(para);
}

const t2 = performance.now();

console.log(t2 - t1);


// code 2 - more efficient
const t3 = performance.now();

let myDiv = document.createElement('div');
for(let i = 0; i < 100; i++){
    let para = document.createElement('p');
    para.textContent = "para" + i;
    myDiv.appendChild(para);
}
document.body.appendChild(myDiv);

const t4 = performance.now();

console.log(t4 - t3);


// Reflow - process of calculating the position, dimensions of some element
    // it is computationally intensive

// Repaint - process of displaying the content/elements pixel by pixel
    // it is faster than reflow

// document fragment - light weight document-object
    // it does not reflow or repaint on addition element to it
    const t5 = performance.now();

    let docFragment = document.createDocumentFragment();

    for(let i = 1; i <= 100; i++){
        let para = document.createElement('p');
        para.textContent = "para" + i;
        docFragment.appendChild(para);
    }

    document.body.appendChild(docFragment);

    const t6 = performance.now();

    console.log(t6 - t5);