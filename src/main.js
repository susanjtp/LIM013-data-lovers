//import example from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
import example from './data.js';
// import data from './data/rickandmorty/rickandmorty.js';
//console.log(example, data);

const botonhome = document.getElementById("homeboton");
const overlay = document.getElementById("overlay");
const homeh = document.getElementById("home");
const cerrarh = document.getElementById("cerrarhome");

botonhome.addEventListener("click", function () {
    overlay.classList.add("active");
    homeh.classList.add("active");  //classList añade una clase en este caso active que hace que se muestre el home
});
cerrarh.addEventListener("click", function () {
    overlay.classList.remove("active");
    homeh.classList.remove("active"); //classList  con remove , quita la opcione de active
});


//-----------------------
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
//const boton = document.querySelector("#buttonbusqueda");

const filtrar = () => {
    const buscar = pokemones.filter((character) => {
        return character.name.startsWith(imputbusqueda.value.toLowerCase()) || character.num.startsWith(imputbusqueda.value)

    })
    root.innerHTML = buscar.map(example).join(" ")
}
//boton.addEventListener("click", filtrar)
imputbusqueda.addEventListener("keyup", filtrar)  // lo utilizo si quiero que aparescan los pokemones y se valla filtrando mientras busco el pokemon
//filtrar();

// usando sort (ordena)
const cualidades = document.querySelector("#cualidades");
cualidades.addEventListener("change", () => {
    console.log(cualidades.value)

    const fuerza = data.pokemon
    data.pokemon === "base-attack"

    fuerza.sort(function (a, b) {
        if (a.value > b.value) {
            return 1
        }
        if (a.value < b.value) {
            return -1
        }
    });
    console.log(fuerza)

}
)



// const ataque= data.pokemon.filter((character) => {

//  return character.stats["base-attack"]


//})




const botonmasinfo = document.querySelectorAll(".masinfo");
const infopokemon = document.querySelector(".masinfopokemon");
const inftarje = document.querySelector(".infotarjeta");

console.log(botonmasinfo)

for (let i = 0; i < botonmasinfo.length; i++) {
    botonmasinfo[i].addEventListener("click", () => {
        infopokemon.classList.add("active");
        inftarje.classList.add("active");
    });

}



    // infopokemon.addEventListener("click", () => {   
    //infopokemon.classList.remove("active");
    //inftarje.classList.remove("active"); //classList  con remove , quita la opcione de active
    //}); 








      //const mas = ()=>{

//}
    //botonmasinfo.addEventListener("click",mas)







 //que hace filter 
 //que hace include
 //que hace map
 //que hace join



