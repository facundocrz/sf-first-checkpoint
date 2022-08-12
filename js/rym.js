const URL = "https://rickandmortyapi.com/api/character"

const loading = () => {
    let container = document.querySelector("#charactersContainer")
    loadCard = `<div class="card" aria-hidden="true" style="width: 18rem">
                    <img src="..." class="card-img-top" alt="...">
                    <div class="card-body">
                    <h5 class="card-title placeholder-glow">
                        <span class="placeholder col-6"></span>
                    </h5>
                    <p class="card-text placeholder-glow">
                        <span class="placeholder col-7"></span>
                        <span class="placeholder col-4"></span>
                        <span class="placeholder col-4"></span>
                        <span class="placeholder col-6"></span>
                        <span class="placeholder col-8"></span>
                    </p>
                    </div>
                </div>`
  for(let i = 1; i <= 42; i++){
    container.innerHTML += loadCard
  }

}

const getCharacters = async (URL) => {
    let characters = []
    try{
        loading()
        for(let i = 1; i <= 42; i++){
            const res = await fetch(`${URL}?page=${i}`)
            const data = await res.json()
            characters = characters.concat(data.results)
        }
        return characters
       
    }catch(err){
        console.log(err)
    }
}

const addCharacters = async (data) => {
    const container = document.querySelector("#charactersContainer")
    const charactersData = (await data).map(character => {
        return `<div class="card" style="width: 18rem;">
                    <img src="${character.image}" class="card-img-top" alt="${character.name}">
                    <div class="card-body">
                        <h5 class="card-title">${character.name}</h5>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">${character.status}</li>
                        <li class="list-group-item">${character.species}</li>
                        <li class="list-group-item">${character.gender}</li>
                    </ul>
                </div>`
    }).join("")
    container.innerHTML = charactersData
}

addCharacters(getCharacters(URL))