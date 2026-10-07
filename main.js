
let sucursales = [
    "Neuquén",
    "Centenario",
    "Plottier"
];

const listaSucursales = document.getElementById("listaSucursales");
const input = document.getElementById("nuevaSucursal");
const boton = document.getElementById("agregarSucursal");

// Recuperar las sucursales guardadas
const datosGuardados = localStorage.getItem("sucursales");

if (datosGuardados) {
    sucursales = JSON.parse(datosGuardados);
}


// Función para mostrar las sucursales
function mostrarSucursales() {

    listaSucursales.innerHTML = "";

    sucursales.forEach((sucursal, indice) => {

        const circulo = document.createElement("div");
        circulo.classList.add("circulo-sucursal");

        // Nombre de la sucursal
        const nombre = document.createElement("span");
        nombre.textContent = sucursal;

        // Botón eliminar
        const eliminar = document.createElement("button");
        eliminar.textContent = "x";
        eliminar.classList.add("btn-eliminar");

        // Cuando se hace clic en eliminar
        eliminar.addEventListener("click", function() {

            sucursales.splice(indice, 1);

            localStorage.setItem(
                "sucursales",
                JSON.stringify(sucursales)
            );

            mostrarSucursales();
        });

        circulo.appendChild(nombre);
        circulo.appendChild(eliminar);

        listaSucursales.appendChild(circulo);
    });
}


// Agregar una nueva sucursal
boton.addEventListener("click", function() {

    const nuevaSucursal = input.value.trim();

    if (nuevaSucursal !== "") {

        sucursales.push(nuevaSucursal);

        localStorage.setItem(
            "sucursales",
            JSON.stringify(sucursales)
        );

        mostrarSucursales();

        input.value = "";
    }
});


// Mostrar las sucursales al cargar la página
mostrarSucursales();

