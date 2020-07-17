

const main = document.getElementById("axiosTodo");

let baseURL = "https://api.vschool.io/shannonstevens73/todo/"

function get(){
    axios.get(baseURL)
        .then( response => {
            for (let i = 0; i < response.data.length; i++){
                var title = document.createElement("h3")                
                var description = document.createElement("p")
                var deleteButton = document.createElement("button")
                deleteButton.className = "deleteButton"

                title.textContent = response.data[i].title
                title.style.color = "Navy"    
                title.style.paddingTop = "20px"         
                title.style.borderTop = "2px solid lightgray"   
                description.textContent = response.data[i].description                  
                deleteButton.textContent = "Delete"    
                deleteButton.style.backgroundColor = "lightgray"

                document.getElementById("axiosTodo").appendChild(title)                
                document.getElementById("axiosTodo").appendChild(description)
                document.getElementById("axiosTodo").appendChild(deleteButton)

                if (response.data[i].completed === true) {
                    title.classList.add("title")
                }

        }})
}
get()
   

//Post
const submitButton = document.myForm;

submitButton.addEventListener("submit", function(event) {
  event.preventDefault();

  const newTodo = {
    title: submitButton.title.value,
    description: submitButton.description.value
  };

  axios
    .post(baseURL, newTodo)
        .then((response) => console.log(response.data))
        .catch((error) => console.log(error));

})


