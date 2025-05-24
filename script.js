let nameText = document.querySelector(".nameText")
let captionText = document.querySelector(".captionText")
let postButton = document.querySelector(".postButton")
let updateButton = document.querySelector(".updateButton")

let allPost = document.querySelector(".allPost")

let indexStore = 0;



postButton.addEventListener("click", ()=>{
 array.push({
 name: nameText.value,
 caption:captionText.value
 })
 allPost.innerHTML = ""
 display()
 nameText.value =""
 captionText.value = ""
})

let array = []

function display(){
array.map(item=>{
  allPost.innerHTML += `<div class="card mt-4" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${item.name}</h5>
    <p class="card-text">${item.caption}</p>
    <button type="button" class="btn btn-primary editButton">Edit</button>
    <button type="button" class="btn btn-danger deleteButton">Delete</button>
  </div>`
})
let deleteButton = document.querySelectorAll(".deleteButton")
let convertButton = Array.from(deleteButton);
  convertButton.map((item, index)=>{
  item.addEventListener("click", ()=>{
    array.splice(index, 1)
    allPost.innerHTML = ""
    display()
  })
})
let editButton = document.querySelectorAll(".editButton")
let convertEditButton = Array.from(editButton);
   convertEditButton.map((item, index)=>{
   item.addEventListener("click", ()=>{
    nameText.value = array[index].name
    captionText.value = array[index].caption
   
    postButton.style.display = "none"
    updateButton.style.display = "block"

   indexStore = index
   
    
  })
})

}


 updateButton.addEventListener("click", ()=>{
  array[indexStore].name = nameText.value
  array[indexStore].caption = captionText.value
  allPost.innerHTML =""
  display()
  nameText.value = ""
  captionText.value =""
  
  updateButton.style.display = "none"
  postButton.style.display = "block"
})





