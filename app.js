const userInput= document.querySelector("#user-input");
const btn=document.querySelector("#btn");
const userTask=document.querySelector("#task");

function handleEvent(){
    if(userInput.value!==""){
        let itemContainer=document.createElement("div");
        let itemCheck=document.createElement("i");
        let itemText=document.createElement("p");
        let itemDelete=document.createElement("span");
    
        //adding child in parent container
        itemContainer.appendChild(itemCheck);
        itemContainer.appendChild(itemText);
        itemContainer.appendChild(itemDelete);
    
        //adding class to child and parent
        itemContainer.classList.add("items")
        itemCheck.classList.add("fa-regular","fa-circle-check")
        itemDelete.classList.add("delete")
    
        //adding user input into itemText element
        itemText.textContent=userInput.value;
        itemDelete.innerHTML="&#10006"
    
        userTask.appendChild(itemContainer);
    
        userInput.value="";
        saveData();
    }
    else{
        alert("You must write something")
    }
}

function saveData(){
    localStorage.setItem("data",userTask.innerHTML);
}

function showList(){
    userTask.innerHTML=localStorage.getItem("data");
}

userTask.addEventListener("click",(evt) =>{
    if(evt.target.tagName==="I"){
        evt.target.classList.toggle("check")
        saveData()
    }
    else if(evt.target.tagName==="SPAN"){
        evt.target.parentElement.remove();
        saveData()
    }
})

btn.addEventListener("click",handleEvent);
window.addEventListener("keydown",(evt) =>{
    if(evt.key==="Enter")
        handleEvent();
});

showList();