const container = document.querySelector('.container');
console.log(container);

container.addEventListener('mouseover', ()=>{
    const newElement = createNewElement('h1','Advanced CSS ');
    container.appendchild(newElement);
    console.log('i am currentl hovering');
})

function createNewElement(tagName, text) {
    // create a new element with tagName
    const newElement = document.createElement(tagName);
    // set the textContent to the new element  
    newElement.textContent = text;  
    // return the new element
    return newElement;
}