//import example from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
import example from './data.js';
// import data from './data/rickandmorty/rickandmorty.js';


//console.log(example, data);
const root = document.getElementById("root")


const select = document.querySelector(".select")
//addeventlistener recibe dos parametros (un evento y una funcion)
select.addEventListener("change", () => {
    const portipo = data.pokemon.filter((character) => {
        return character.type.includes(select.value)


    })

    root.innerHTML = portipo.map(example).join(" ")

}
)

const pokemones = data.pokemon ;

const imputbusqueda = document.querySelector("#imputbusqueda");
const boton = document.querySelector("#buttonbusqueda");
const resultado = document.querySelector("#resultado");

 const filtrar = ()=>{
    //console.log(imputbusqueda.value);
    resultado.innerHTML="";
    const busqueda = imputbusqueda.value.toLowerCase();

      for (let poke of pokemones){
        let nombre = poke.name.toLocaleLowerCase();
        if (nombre.indexOf(busqueda) !==-1){
            resultado.innerHTML += `
            <li>${poke.name} </li>
            <li>${poke.img} </li>
            `
         }
      }

      if(resultado.innerHTML ===""){
          resultado.innerHTML += `
          <li>pokemon no encontrado</li>`
      }

 
    }

    boton.addEventListener("click", filtrar)
    imputbusqueda.addEventListener("keyup",filtrar)

    filtrar();


/*resultado.innerHTML ="";

    

    for (let poke of pokemones) {
        let nombre = poke.name.toLoweCase();
        if (nombre.indexOf(busqueda) !== -1) {

            resultado.innerHTML += `
           <div class="tarjeta">
            <div class="superior">
              <div class="imagenpokemon">
               <img id="imagenpokemon" src="${poke.img}">
             </div>
             <div class="datosprincipales">
               <div id="name"> ${poke.name} </div>
               <div id="num"> ${poke.num} </div>
              <div id="type"> ${poke.type} </div>
              <div id="cp"> CP ${Object.values(poke.stats)[3]}</div>
              </div>
             </div>
             <div class="inferior">
          <div class="datossecundarios">
           <div class="dato"> Ataque </div>
           <div class="valor"> ${Object.values(poke.stats)[0]} </div>
              </div>
              <div class="datossecundarios">
           <div class="dato"> Defensa </div>
                <div class="valor"> ${Object.values(poke.stats)[1]} </div>
              </div>
                 <div class="datossecundarios">
           <div class="dato"> Salud </div>
           <div class="valor"> ${Object.values(poke.stats)[2]} </div>
               </div>
              <div class="datossecundarios">
           <div class="dato"> Salud </div>
           <div class="valor"> ${Object.values(poke.stats)[2]} </div>
              </div>
                     </div>
               </div>
             `
        }
        
    }
  */






 //que hace filter 
 //que hace include
 //que hace map
 //que hace join