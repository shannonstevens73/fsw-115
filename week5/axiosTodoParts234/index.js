

const main = document.getElementById("axiosTodo");

// Get
axios.get("https://api.vschool.io/sds1973/todo/").then((response) => {
  for (let i = 0; i < response.data.length; i++) {
    const title = document.createElement("h3");
    const price = document.createElement("p");
    const description = document.createElement("p");
    const completeBox = document.createElement("input");
    const completeSpan = document.createElement("span");
    const incompleteBox = document.createElement("input");
    const incompleteSpan = document.createElement("span");
    const deleteButton = document.createElement("button");

    title.textContent = response.data[i].title;
    price.textContent = response.data[i].price;
    description.textContent = response.data[i].description;
    completeBox.className = "boxComplete";
    completeBox.type = "checkbox";
    completeSpan.textContent = "Complete";
    incompleteBox.className = "boxIncomplete";
    incompleteBox.type = "checkbox";
    incompleteSpan.textContent = "Incomplete";
    deleteButton.textContent = "Delete";
    deleteButton.style.backgroundColor = "lightgray";
    deleteButton.className = "deleteButton";

    document.getElementById("axiosTodo").append(title);
    document.getElementById("axiosTodo").append(price);
    document.getElementById("axiosTodo").append(description);
    document.getElementById("axiosTodo").append(completeSpan);
    document.getElementById("axiosTodo").append(completeBox);
    document.getElementById("axiosTodo").append(incompleteSpan);
    document.getElementById("axiosTodo").append(incompleteBox);
    document.getElementById("axiosTodo").append(deleteButton);

    // Put Complete
    if (response.data[i].completed === true) {
      title.classList.add("title");
    }
    var completedTask = {
      completed: true
    };
    var incompletedTask = {
      completed: false
    };
    var completedItem = document.getElementsByClassName("boxComplete");
    for (i = 0; i < completedItem.length; i++)
      completedItem[i].addEventListener("click", (event) => {
        event.preventDefault()
        id = response.data[i]._id
        axios.put("https://api.vschool.io/sds1973/todo/" + id, completedTask)
          .then((response) => console.log(response.data))
          .catch((error) => console.log(error));
      });

      // Put Incomplete
    var boxIncomplete = document.getElementsByClassName("boxIncomplete");
    for (i = 0; i < boxIncomplete.length; i++)
    boxIncomplete[i].addEventListener("click", (event) => {
        event.preventDefault()
        id = response.data[i]._id
        axios.put("https://api.vschool.io/sds1973/todo/" + id, incompletedTask)
          .then((response) => console.log(response.data))
          .catch((error) => console.log(error));
      });

    // Delete
    let removeItem = document.getElementsByClassName("deleteButton");
    for (i = 0; i < removeItem.length; i++)
      removeItem[i].addEventListener("click", (event) => {
        event.preventDefault();
        id = response.data[i]._id;
        axios
          .delete("https://api.vschool.io/sds1973/todo/" + id)
          .then((response) => console.log(response.data))
          .catch((error) => console.log(error));
      });
  }
});

//Post
const submitButton = document.myForm;

submitButton.addEventListener("submit", function (event) {
  event.preventDefault();

  const newTodo = {
    title: submitButton.title.value,
    price: submitButton.price.value,
    description: submitButton.description.value,
  };

  axios
    .post("https://api.vschool.io/sds1973/todo/", newTodo)
    .then((response) => console.log(response.data))
    .catch((error) => console.log(error));
});



// Delete
// var deleteButton = document.getElementById("axiosTodo")

// deleteButton.addEventListener("click", function(response){
//     response.preventDefault()

// axios.get("https://api.vschool.io/sds1973/todo/")
//     .then(function(response) {
//     console.log(response.data)
//     var todoList = response.data;

// var deleteTodo = function(todoList) {
//         axios.delete("https://api.vschool.io/jonsmith/todo/" + todoList._id).then(function(response) {
// })}})
// })

/*


//Put
const putButton = document.putForm

if (incompletBox ===  checked) {

    let _ID = function(id) {

        for (let i = 0; i < response.data.id[i].length; i++) {
            if (response.data.id[i] === checked) {
            _ID = response.data.id[i]
    }   }    }   
}

putButton.addEventListener("submit", function(event){
    event.preventDefault()    

    

    const URL = `https://api.vschool.io/sds1973/todo/${_id}` 
    
    const updates = {
        title: putButton.title.value,
        price: putButton.price.value,
        description: putButton.description.value        
    }   
   
    axios.put(URL, updates)
        .then(response => console.log(response.data))
        .catch(error => console.log(error))    
})



// Delete
deleteButton.addEventListener("click", function(event){
    event.preventDefault()

        let _ID = function(id) {

            for (let i = 0; i < response.data.id[i].length; i++) {
                if (response.data.id[i] === clicked) {
                _ID = response.data[i].id
            }
        }       
    }   
}

*/
