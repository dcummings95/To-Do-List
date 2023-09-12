const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    //If box is empty then let them know they need to add something
    if(inputBox.value === ''){
        alert("You must write something!");
        //Otherwise if they write something create a new list element and then made the innerHTML equal to the value user entered then add to list
    } 
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
    }
}