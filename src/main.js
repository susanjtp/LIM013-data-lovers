//import example from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
import example from './data.js';
// import data from './data/rickandmorty/rickandmorty.js';


//console.log(example, data);
const root = document.getElementById("root")


const select = document.querySelector(".select")
//addeventlistener recibe dos parametros (un evento y una funcion)
select.addEventListener("change",() =>{
    const portipo = data.pokemon.filter((character) =>{
        return character.type.includes(select.value)

    })

    root.innerHTML = portipo.map(example).join(" ")

}
 ) 
 //que hace filter 
 //que hace include
 //que hace map
 //que hace join