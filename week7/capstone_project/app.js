
const main = document.getElementById("axiosTodo");

let baseURL = "https://api.vschool.io/shannonstevens73/todo/"

function get(){
    axios.get(baseURL)
        .then( response => {
            for (let i = 0; i < response.data.length; i++){
                const title = document.createElement("h3")                
                const description = document.createElement("p")
                const completeBox = document.createElement("input")
                const completeSpan = document.createElement("span")
                const incompleteBox = document.createElement("input")
                const incompleteSpan = document.createElement("span")
                // const editTitle = document.createElement("input")
                // const break2 = document.createElement("br")
                // const editDescription = document.createElement("input")
                // const editButton = document.createElement("button")
                const deleteButton = document.createElement("button")
                deleteButton.className = "deleteButton"
                

                title.textContent = response.data[i].title
                title.style.color = "Navy"    
                title.style.paddingTop = "20px"         
                title.style.borderTop = "2px solid lightgray" 
                completeBox.className = "boxComplete"
                completeBox.type = "checkbox"
                completeSpan.textContent = "Complete"
                incompleteBox.className = "boxIncomplete"
                incompleteBox.type = "checkbox"
                incompleteSpan.textContent = "Incomplete"
                description.textContent = response.data[i].description  
                // editTitle.type = "text"
                // editTitle.name = "title"
                // editTitle.value = response.data[i].title
                // editDescription.type = "text"
                // editDescription.name = "description"
                // editDescription.value = response.data[i].description
                // editButton.textContent = "Edit"   
                // editButton.style.backgroundColor = "lightgray"
                deleteButton.textContent = "Delete"    
                deleteButton.style.backgroundColor = "lightgray"

                document.getElementById("axiosTodo").appendChild(title)                
                document.getElementById("axiosTodo").appendChild(description)
                document.getElementById("axiosTodo").appendChild(completeSpan)
                document.getElementById("axiosTodo").appendChild(completeBox)
                document.getElementById("axiosTodo").appendChild(incompleteSpan)
                document.getElementById("axiosTodo").appendChild(incompleteBox)
                document.getElementById("axiosTodo").appendChild(deleteButton)
                // document.getElementById("form2").appendChild(editTitle)
                // document.getElementById("form2").appendChild(break2)
                // document.getElementById("form2").appendChild(editDescription)
                // document.getElementById("form2").appendChild(editButton)
                // document.getElementById("form2").appendChild(break2)

                // Put 2
                // const editForm = document.form2
                // editForm.addEventListener("submit", (event) => {
                //   event.preventDefault()
                //   id = response.data[i]._id

                //   const editTodo = {
                //     title: editForm.title.value,
                //     description: editForm.description.value
                //   };

                //   axios.put(baseURL + id, editTodo)
                //       .then((response) => console.log(response.data))
                //       .catch((error) => console.log(error))

                // })


                // Put Complete
                if (response.data[i].completed === true) {
                title.classList.add("title")
                }

                var completedTask = {
                  completed: true
                };
                var incompletedTask = {
                  completed: false
                };

                var completedItem = document.getElementsByClassName("boxComplete")                
                  completedItem[i].addEventListener("click", (event) => {
                    event.preventDefault()
                    id = response.data[i]._id
                    axios.put(baseURL + id, completedTask)
                      .then((response) => console.log(response.data))
                      .catch((error) => console.log(error));
                });
              
                // Put Incomplete
                var boxIncomplete = document.getElementsByClassName("boxIncomplete")              
                boxIncomplete[i].addEventListener("click", (event) => {
                  event.preventDefault()
                  id = response.data[i]._id
                  axios.put(baseURL + id, incompletedTask)
                    .then((response) => console.log(response.data))
                    .catch((error) => console.log(error));
                });



                // Delete            
                deleteButton.addEventListener("click", (event) => {
                 event.preventDefault();
                  id = response.data[i]._id;
                  axios
                    .delete(baseURL + id)
                      .then((response) => console.log(response.data))
                      .catch((error) => console.log(error));
                });
  }})
}
get()
   

//Post
const submitButton = document.myForm;

submitButton.addEventListener("submit", function(event) {
  event.preventDefault();
  console.log("hello")
  const newTodo = {
    title: submitButton.title.value,
    description: submitButton.description.value
  };

  axios.post(baseURL, newTodo)
        .then((response) => console.log(response.data))
        .catch((error) => console.log(error));

})



