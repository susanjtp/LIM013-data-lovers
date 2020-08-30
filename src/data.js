// estas funciones son de ejemplo

 const example = (datos) => {
  return `
    <div>
      <p> ${datos.num} ${datos.name}</p>
      <img src="${datos.img}">
      <p>Tipo: ${datos.type}  <br>PC: ${Object.values(datos.stats)[3]}</p>
    </div>
  `
};

export default example
