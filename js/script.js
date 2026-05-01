const lugares = {
  Medellin: [
    { nombre: "Parque Arví", imagen: "./imagenes/Parque_Arvi.jpg" },
    { nombre: "Jardín Botánico", imagen: "./imagenes/Jardin_Botanico_Med.jpg" },
    { nombre: "Comuna 13", imagen: "./imagenes/Comuna13.jpg" }
  ],

  Cali: [
    { nombre: "Cristo Rey", imagen: "./imagenes/CRey_MarcaAgua.jpg" },
    { nombre: "Zoológico de Cali", imagen: "./imagenes/Cali_Zoo.jpg" },
    { nombre: "Bulevar del Río", imagen: "./imagenes/Cali_citylights.jpg" }
  ],

  Armenia: [
    { nombre: "Parque del Café", imagen: "./imagenes/Parque_del_Cafe.jpg" },
    { nombre: "Recuca", imagen: "./imagenes/Recuca.jpg" },
    { nombre: "Valle del Cocora", imagen: "./imagenes/Valle_del_Cocora.jpg" }
  ],

  Bogota: [
    { nombre: "Monserrate", imagen: "./imagenes/Monserrate.jpg" },
    { nombre: "Museo del Oro", imagen: "./imagenes/Museo_del_Oro.jpg" },
    { nombre: "La Candelaria", imagen: "./imagenes/La_Candelaria_Bogota.jpg" }
  ],

  Barranquilla: [
    { nombre: "Malecón del Río", imagen: "./imagenes/Malecon_del_Rio_Barranq.jpg" },
    { nombre: "Gran Malecón", imagen: "./imagenes/Gran_Malecon.jpg" },
    { nombre: "Ventana al Mundo", imagen: "./imagenes/Ventana_al_Mundo_Barranq.jpg" }
  ]
};

const select = document.getElementById("ciudadSelect");
const contenedor = document.getElementById("listaLugares");

select.addEventListener("change", function () {
  const ciudad = this.value;
  contenedor.innerHTML = "";

  if (lugares[ciudad]) {
    lugares[ciudad].forEach(lugar => {
      const card = `
        <div class="col-md-4 mb-3">
          <div class="card">
            <img src="${lugar.imagen}" class="card-img-top" alt="${lugar.nombre}">
            <div class="card-body text-center">
              <h5>${lugar.nombre}</h5>
            </div>
          </div>
        </div>
      `;
      contenedor.innerHTML += card;
    });
  }
});