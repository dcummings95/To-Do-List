const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    //If box is empty then let them know they need to add something
    if(inputBox.value === ''){
        alert("You must write something!");
        //Otherwise if they write something create a new list element and then made the innerHTML equal to the value user entered then add to list
    } 
    else {
        //Create element li
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        //Add the cross icon to be on the end of the item
        span.innerHTML = "\u00d7";
        //Add it to the lsit
        li.appendChild(span);
    }
    //Reset the input box to be empty after user adds a task
    inputBox.value = "";

}