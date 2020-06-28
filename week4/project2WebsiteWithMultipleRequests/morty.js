
// Rick and Morty API

 function GetAPIButtonRandM() {axios.get("https://rickandmortyapi.com/api/character")
 .then( response => {
     for (let i = 0; i < response.data.results.length; i++){
     var name = document.createElement("h3")
     var status = document.createElement("p")
     var species = document.createElement("p")

     name.textContent = response.data.results[i].name
     status.textContent = response.data.results[i].status
     species.textContent = response.data.results[i].species

     document.getElementById("RandMaxiosTodo").append(name)
     document.getElementById("RandMaxiosTodo").append(status)
     document.getElementById("RandMaxiosTodo").append(species)

}})}

var RandMAPI = document.getElementById("RickandMortyButton")
RandMAPI.addEventListener("click", GetAPIButtonRandM)