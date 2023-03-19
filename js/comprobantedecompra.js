// Crear Tabla de Datos

const body = document.querySelector("body")
const table = document.createElement("table")
const detalle = document.createElement("div")
table.style.borderCollapse = "collapse";

// Montos de Precio en LStorage
let valores= JSON.parse(localStorage.getItem('valoresFinales'));
// Productos en LStorage
let carrito = JSON.parse(localStorage.getItem('Carrito'));



let BORDES_DE_TABLA = "1px solid black";
let PADDING_DE_TABLA = "0.5em";
let POSICION_PARA_HEADINGS = 0;
let POSICION_INICIAL_ARREGLO = 0;
let POSICION_FINAL_ARREGLO = carrito.length - 1;

function crearHeadings(arreglo, posicion, tabla) {
    const headings = document.createElement("tr");
    const arregloRecorrido = arreglo[posicion];
    Object.keys(arregloRecorrido).forEach(element => {
        const th = document.createElement("th");
        th.textContent = element.toUpperCase();
        th.style.border = BORDES_DE_TABLA;
        th.style.padding = PADDING_DE_TABLA;
        headings.appendChild(th)
    });
    tabla.appendChild(headings)
};


function crearContenido(arreglo, posicionInicial, tabla) {
    const contenidos = document.createElement("tr");
    const arregloRecorrido = arreglo[posicionInicial];
    Object.values(arregloRecorrido).forEach(element => {
        const td = document.createElement("td");
        td.textContent = element;
        td.style.border = BORDES_DE_TABLA;
        td.style.padding = PADDING_DE_TABLA;
        contenidos.appendChild(td)
    });
    tabla.appendChild(contenidos)
}

function iterarCreacion(desdePosicion, hastaPosicion, arreglo, tabla) {
    for (let i= desdePosicion; i <= hastaPosicion; i++) {
        crearContenido(arreglo, i , tabla)
    }
}

function crearDatoContacto(key, value, objetivo) {
    const dato = document.createElement("p");
    dato.textContent = `${key}: ${value}`;
    objetivo.appendChild(dato)
}

function crearDatoPago(key, value, objetivo) {
    const dato = document.createElement("p");
    const cifra = document.createElement("strong");
    dato.textContent = `${key}: `;
    cifra.textContent = value;
    dato.appendChild(cifra);
    objetivo.appendChild(dato)
}

function actualizarTabla(contenido, tabla) {
    tabla.replaceChildren();
    contenido.replaceChildren();
    POSICION_FINAL_ARREGLO = carrito.length - 1;
    valores= JSON.parse(localStorage.getItem('valoresFinales'));
    carrito = JSON.parse(localStorage.getItem('Carrito'));
    crearHeadings(carrito, POSICION_PARA_HEADINGS , table);
    iterarCreacion(POSICION_INICIAL_ARREGLO, POSICION_FINAL_ARREGLO, carrito, table);
}

// Enviar Correo


const serviceID = "service_k1x6m8n";
const templateID = "template_8h4145i";
const publicKey = "xhiWdCrG37-gOaT4Y";


function enviarEmail(){
    console.log("se envio")
    actualizarTabla(detalle, table);
    crearDatoPago("", "", detalle);
    crearDatoPago("Subtotal", valores[0].Subtotal, detalle);
    crearDatoPago("Impuestos", valores[0].Impuestos, detalle);
    crearDatoPago("Total", valores[0].Total, detalle);
    crearDatoContacto("", "", detalle);
    crearDatoContacto("Nombre",inputFullname.value, detalle);
    crearDatoContacto("Email",inputEmail.value, detalle);
    crearDatoContacto("Dirección",inputAddress.value, detalle);
    crearDatoContacto("Comuna",inputComuna.value, detalle);
    crearDatoContacto("Region",inputRegion.value, detalle);
    crearDatoContacto("Texto",inputText.value, detalle);
    table.appendChild(detalle);

    let templateParams = {
        to_name: inputFullname.value,
        from_name: "Cachureando Store",
        to_email: inputEmail.value,
        my_html: table.innerHTML
    }

    emailjs.send(serviceID, templateID, templateParams, publicKey)
    .then(function() {
        alert('El comprobante se ha enviado correctamente a tu email');
    }, function(error) {
        alert('Ha fallado el envío del comprobante...', error);
    });    
}