// estas funciones son de ejemplo

const example = (datos) => {
  return `
    <div class="tarjeta">
      <div class="superior">
        <div class="imagenpokemon">
          <img id="imagenpokemon" src="${datos.img}">
        </div>
        <div class="datosprincipales">
           <div id="name"> ${datos.name} </div>
           <div id="num"> ${datos.num} </div>
           <div id="type"> ${datos.type} </div>
           <div id="cp"> CP ${Object.values(datos.stats)[3]}</div>
        </div>
      </div>
      <div class="inferior">
        <div class="datossecundarios">
           <div class="dato"> Ataque </div>
           <div class="valor"> ${Object.values(datos.stats)[0]} </div>
        </div>
         <div class="datossecundarios">
           <div class="dato"> Defensa </div>
           <div class="valor"> ${Object.values(datos.stats)[1]} </div>
        </div>
        <div class="datossecundarios">
           <div class="dato"> Salud </div>
           <div class="valor"> ${Object.values(datos.stats)[2]} </div>
        </div>
        <div class="datossecundarios">
           <div class="dato"> Salud </div>
           <div class="valor"> ${Object.values(datos.stats)[2]} </div>
        </div>
        <div class="buttonmas">
           <button type="submit" class="masinfo">+</button>
        </div>
      </div>
    </div>
  `
};

export default example
