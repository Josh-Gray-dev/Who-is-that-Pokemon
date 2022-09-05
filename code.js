const pokemonName = ""
const pokemonRegion = ""


/* AS A FUNCTION
function pokemonData() {
    return fetch ("https://pokeapi.co/api/v2/generation/1")
                .then (response => response.json())
}
*/
let buttonKanto = document.getElementById("kanto")
let buttonJohto = document.getElementById("johto")
let buttonHoenn = document.getElementById("hoenn")
let buttonSinnoh = document.getElementById("sinnoh")
let buttonUnova = document.getElementById("unova")
let buttonKalos = document.getElementById("kalos")
let buttonAlola = document.getElementById("alola")
let buttonGalar = document.getElementById("galar")
let buttonAllRegion = document.getElementById("random")

let kantoId = Math.ceil(Math.random()*151)
let johtoId = Math.ceil(Math.random()*100)
let hoennId = Math.ceil(Math.random()*135)
let sinnohId = Math.ceil(Math.random()*107)
let unovaId = Math.ceil(Math.random()*156)
let kalosId = Math.ceil(Math.random()*72)
let alolaId = Math.ceil(Math.random()*88)
let galarId = Math.ceil(Math.random()*96)
let randomId = Math.ceil(Math.random()*905)


function newKanto() {
    
}

function kanto() {
return fetch ("https://pokeapi.co/api/v2/generation/1")
               // .then (response => response.json({}))
               // .then (data => {})
               .then(response => response.text())
                .then(regionJSON => {
        const region = JSON.parse(regionJSON)
        console.log(region.main_region)
        console.log(region)
        //console.log(region.pokemon_species)
        //console.log(kantoId)
                })
            }
            
function johto() {
return fetch ("https://pokeapi.co/api/v2/generation/2")
               // .then (response => response.json({}))
               // .then (data => {})
               .then(response => response.text())
                .then(regionJSON => {
        const region = JSON.parse(regionJSON)
        console.log(region.main_region)
                })
            }

function hoenn() {
return fetch ("https://pokeapi.co/api/v2/generation/3")
               // .then (response => response.json({}))
               // .then (data => {})
               .then(response => response.text())
                .then(regionJSON => {
        const region = JSON.parse(regionJSON)
        console.log(region.main_region)
                })
            }

function sinnoh() {
return fetch ("https://pokeapi.co/api/v2/generation/4")
               // .then (response => response.json({}))
               // .then (data => {})
               .then(response => response.text())
                .then(regionJSON => {
        const region = JSON.parse(regionJSON)
        console.log(region.main_region)
                })
            }

function unova() {
return fetch ("https://pokeapi.co/api/v2/generation/5")
               // .then (response => response.json({}))
               // .then (data => {})
               .then(response => response.text())
                .then(regionJSON => {
        const region = JSON.parse(regionJSON)
        console.log(region.main_region)
                })
            }

function kalos() {
return fetch ("https://pokeapi.co/api/v2/generation/6")
               // .then (response => response.json({}))
               // .then (data => {})
               .then(response => response.text())
                .then(regionJSON => {
        const region = JSON.parse(regionJSON)
        console.log(region.main_region)
                })
            }


function alola() {
return fetch ("https://pokeapi.co/api/v2/generation/7")
               // .then (response => response.json({}))
               // .then (data => {})
               .then(response => response.text())
                .then(regionJSON => {
        const region = JSON.parse(regionJSON)
        console.log(region.main_region)
                })
            }


function galar() {
return fetch ("https://pokeapi.co/api/v2/generation/8")
               // .then (response => response.json({}))
               // .then (data => {})
               .then(response => response.text())
                .then(regionJSON => {
        const region = JSON.parse(regionJSON)
        console.log(region.main_region)
                })
            }
/*
let kanto = fetch ("https://pokeapi.co/api/v2/generation/1")
               // .then (response => response.json({}))
               // .then (data => {})
               .then(response => response.text())
                .then(regionJSON => {
        const region = JSON.parse(regionJSON)
        console.log(region.main_region)
                })
*/              
              
function renderImage(url) {
    const img = document.createElement("img")
    img.src = url

    document.body.append(img)
}

console.log(kanto)

function getRegion() {
    
}

console.log(buttonKanto.addEventListener("click", kanto))
console.log(buttonJohto.addEventListener("click", johto))
console.log(buttonHoenn.addEventListener("click", hoenn))
console.log(buttonSinnoh.addEventListener("click", sinnoh))
console.log(buttonUnova.addEventListener("click", unova))
console.log(buttonKalos.addEventListener("click", kalos))
console.log(buttonAlola.addEventListener("click", alola))
console.log(buttonGalar.addEventListener("click", galar))
//console.log(buttonAllRegion.addEventListener("click", allRegions))




fetch ("https://pokeapi.co/api/v2/pokemon/pikachu")
    .then(response => response.text())
    .then(pokemonJSON => {
        const pokemon = JSON.parse(pokemonJSON)

        renderImage(pokemon.sprites.front_default)
        
        console.log(pokemon)
    })

function renderImage(url) {
    const img = document.createElement("img")
    img.src = url
    
    document.body.append(img)
}



