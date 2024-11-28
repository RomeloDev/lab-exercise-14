function task1(){
    let element = document.getElementById("myElementId");
    alert(`Output: ${element.textContent} \nYou can also look the output in console.`);
    console.log(`Task 1 Output: ${element.textContent}`);
}

function task2(){
    let spanElements = document.getElementsByTagName("span");
    alert(`Check the output in console.`);
    console.log("Task 2 Output:");
    console.log(spanElements.length);
}

function task3(){
    let parentDiv = document.getElementById("parent");
    let child = parentDiv.childNodes;
    let output = child.length;
    alert(`Check the output in console for more detailed answer.\nLength: ${output}`);
    console.log("Task 3 Output:");
    console.log(child);
}

function task4(){
    let child = document.getElementById("child");
    let parent = child.parentNode;
    console.log("Task 4 Output:");
    console.log(`Parent Node: ${parent.nodeName}`);
    console.log(`Child Node: ${child.nodeName}`);
    alert(`Check the output in console.`);
}

function task5(){
    let parentUl = document.getElementsByTagName("ul")[0]; 
    
    let select = parentUl.childNodes; 
    
    console.log("Task 5 Output:");
    select.forEach((node) => {
        console.log(node.nodeName); 
    });
    alert(`Check the output in console.`);
}

function task6(){
    let parentDiv = document.getElementById("parent");

    let firstChild = parentDiv.firstElementChild;
    let nextSibling = firstChild.nextElementSibling;
    let lastChild = parentDiv.lastElementChild;

    console.log("Task 6 Output:");
    console.log("First child:", firstChild.textContent);
    console.log("Next sibling:", nextSibling.textContent);
    console.log("Last child:", lastChild.textContent);
    alert(`Check the output in console.`);
}