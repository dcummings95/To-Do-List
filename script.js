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
    //Save data whenever a task is added
    saveData()
}
//add event listeners for the actions the user chooses
listContainer.addEventListener("click", function(e){
    //If user clicks on the list element so whatever they had on their list then toggle checked so they can cross it out but keep it on
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData()
    }
    //if user clicks on the x then remove the element from the list
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData()
    }
}, false);

function saveData(){
    //Save whatever data is inside of the list container into the browser
    localStorage.setItem("data", listContainer.innerHTML)
}

function showTask(){
    //Get all the data
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask()