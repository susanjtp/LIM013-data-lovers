//import example from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
import example from './data.js';
// import data from './data/rickandmorty/rickandmorty.js';
//console.log(example, data);
const root = document.getElementById("root")
const inicio = () => {
    const datainicial = data.pokemon;
    root.innerHTML = datainicial.map(example).join("")
}
inicio();

const select = document.querySelector(".select")
//addeventlistener recibe dos parametros (un evento y una funcion)
select.addEventListener("change", () => {
    //console.log(select.value)
    if (select.value === "all-types") {
        const dat = data.pokemon
      //  console.log(dat);
        root.innerHTML = dat.map(example).join("")
    }
    else {

        const portipo = data.pokemon.filter((character) => {
            return character.type.includes(select.value)
        })


        root.innerHTML = portipo.map(example).join("")
    }
})




//filtro de filtro

//const fuerza =data.pokemon.filter((character) => {
// return character.base-attack.includes(select.value)

//} );




//funcion para buscador

const pokemones = data.pokemon;
const imputbusqueda = document.querySelector("#imputbusqueda");
const boton = document.querySelector("#buttonbusqueda");

const filtrar = () => {
    const buscar = pokemones.filter((character) => {
        return character.name.startsWith(imputbusqueda.value.toLowerCase()) || character.num.startsWith(imputbusqueda.value)

    })
    root.innerHTML = buscar.map(example).join(" ")
}
boton.addEventListener("click", filtrar)
imputbusqueda.addEventListener("keyup", filtrar)  // lo utilizo si quiero que aparescan los pokemones y se valla filtrando mientras busco el pokemon
//filtrar();

// usando sort (ordena)
const cualidades = document.querySelector("#cualidades");
cualidades.addEventListener("change", () => {
    console.log(cualidades.value)
       
                const fuerza = data.pokemon
                data.pokemon === "base-attack"
                fuerza.sort(function (a,b){
                    if(a.value >b.value ){
                        return 1
                    }
                    if(a.value < b.value){
                        return -1
                    }
                });
                console.log(fuerza)
            
    }
    )
    
    

   // const ataque= data.pokemon.filter((character) => {
        
      //  return character.stats["base-attack"]


    //})
    


  








 //que hace filter 
 //que hace include
 //que hace map
 //que hace join