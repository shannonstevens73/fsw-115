
const main = document.querySelector("#pokemonList");

let url = "https://api.vschool.io/pokemon"

axios.get(url)
    .then( response => {
        for (let i = 0; i < response.data.objects[0].pokemon.length; i++){
            var names = document.createElement("p")
            names.textContent = response.data.objects[0].pokemon[i].name
            document.getElementById("pokemonList").append(names)
    }})
   
