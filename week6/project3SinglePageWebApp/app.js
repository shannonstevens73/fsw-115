

// async function getData(){
    
//     try {
//         const response = await axios.get("https://rickandmortyapi.com/api/location/") 
//         const name = await axios.get(response.data.name)
//         listHomeWorldToDOM(name, response)
//     }
//     catch(error){
//         console.log(error)
//     }    
// }

// getData()

// function listHomeWorldToDOM(name, obi){
//     const h1 = document.createElement('h1')
//     h1.textContent = response.data.name
//     document.body.appendChild(h1)
    
    // const nameh1 = document.createElement('h1')
    // nameh1.textContent = obi.data.name
    // document.body.appendChild(nameh1)
//}

// axios.get("https://rickandmortyapi.com/api/location/")
//     .then(res => {console.log(res.data.results[1].name)})
//     .catch(err => {console.log(err)})
async function getData(){
    try{
        const response = await axios.get("https://rickandmortyapi.com/api/location/4/")
            listPlanetsToDOM(response)
    }   catch(error){console.log(error)}
}
getData()
listPlanetsToDOM = (response) => {
    const h1 = document.createElement('h1')
    h1.textContent = response.data.name
    document.body.appendChild(h1)
}