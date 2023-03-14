// Inicio Navbar
$('.nav__toggle-icon').click(function () {
    "use strict";
    $('nav ul').slideToggle();
});



$(window).resize(function () {
    "use strict";
    if ($(window).width() > 780) {
        $('nav ul').removeAttr('style');
    }
});
// Fin Navbar

// Inicio Reloj de Footer
function clock() {
    const today = new Date();
    let h = toTwoDigits(today.getHours());
    let m = toTwoDigits(today.getMinutes());
    let s = toTwoDigits(today.getSeconds());
    let month = toTwoDigits(today.getMonth() + 1);
    let year = today.getFullYear();
    let day = toTwoDigits(today.getDate());

    document.getElementById("clock").innerHTML = h + ":" + m + ":" + s + "  " + day + "-" + month + "-" + year;

    setTimeout(clock, 1000);
}
function toTwoDigits(n) {
    let newString = n;
    if (n < 10) {
        newString = "0" + newString;
    }
    return newString;
}
// Fin Reloj de Footer

// Inicio Carrito
// Declarando variables e inicializa la variable
const btnCart = document.querySelector('.container-cart-icon');
const containerCartProducts = document.querySelector(
	'.container-cart-products'
);

// Le agregamos un evento que es hacer click, con "toggle" prendemos o apagamos hidden cart"
btnCart.addEventListener('click', () => {
	containerCartProducts.classList.toggle('hidden-cart');
});

// Declarando variable cart info e inicializamos con document.querySelector
// Declarando variable row producto info e inicializamos con document.querySelector
const cartInfo = document.querySelector('.cart-product');
const rowProduct = document.querySelector('.row-product');

// Declarando e inicializando lista de todos los contenedores de productos
const productsList = document.querySelector('.container-items');

// Variable de arreglos de Productos
let allProducts = [];

const valorTotal = document.querySelector('.total-pagar');

const countProducts = document.querySelector('#contador-productos');

const cartEmpty = document.querySelector('.cart-empty');
const cartTotal = document.querySelector('.cart-total');

// Agregar evento a la lista de contenedor de productos 
productsList.addEventListener('click', e => {
	if (e.target.classList.contains('btn-add-cart')) {
		const product = e.target.parentElement;
		
// Obtener información sobre el producto que se hizo clic al btn agregar carrito
		const infoProduct = {
			quantity: 1,
			title: product.querySelector('h2').textContent,
			price: product.querySelector('p').textContent,
		};
// Detectar si el producto existe en los productos		
		const exits = allProducts.some(
			product => product.title === infoProduct.title
		);
		
// Si existe le suma uno a la cantidad		
		if (exits) {
			const products = allProducts.map(product => {
				if (product.title === infoProduct.title) {
					product.quantity++;
					return product;
				} else {
					return product;
				}
			});
			allProducts = [...products];
		} else {
			allProducts = [...allProducts, infoProduct];
		}

		showHTML();
	}
});

// Agarrar la lista del producto en el carrito para detectar clic en boton "x"		
rowProduct.addEventListener('click', e => {
	if (e.target.classList.contains('icon-close')) {
		const product = e.target.parentElement;
		const title = product.querySelector('p').textContent;

		allProducts = allProducts.filter(
			product => product.title !== title
		);

		console.log(allProducts);

		showHTML();
	}
});

// Detectamos clic en btn pagar y confirmación para prender el modal de datos
const btnPagar = document.getElementById('btn-pagar');
const modalConfirmacion = document.getElementById('modal-carrito')
btnPagar.addEventListener('click', ()=>{
	modalConfirmacion.setAttribute("data-visible","true");
});

// Detectamos clic en btn cerrar y confirmación para apagar el modal de datos
const btnCerrar = document.getElementById('btn-cerrar');
btnCerrar.addEventListener('click', ()=>{
	modalConfirmacion.setAttribute("data-visible","false");
});

// Detectamos clic en btn cerrar para apagar el modal de "compra realizada con exito"
const modalCarritoExito = document.getElementById('modal-carrito-exito');
const btnCerrarExito = document.getElementById('btn-cerrar-exito');
btnCerrarExito.addEventListener('click', ()=>{
	modalCarritoExito.setAttribute("data-visible","false");
});

// Detectamos clic para apagar modal confirmacion y prender modal de "compra realizada con exito"
//const btnPagarForm = document.getElementById('btn-pagar-form');
//btnPagarForm.addEventListener('click', ()=>{
	//modalConfirmacion.setAttribute("data-visible","false");
	//modalCarritoExito.setAttribute("data-visible","true");
//});

// Funcion para mostrar  HTML
// Funcion para elegir que mostrar, el carrito con productos o el carrito vacío
const showHTML = () => {
	if (!allProducts.length) {
		cartEmpty.classList.remove('hidden');
		rowProduct.classList.add('hidden');
		cartTotal.classList.add('hidden');
	} else {
		cartEmpty.classList.add('hidden');
		rowProduct.classList.remove('hidden');
		cartTotal.classList.remove('hidden');
	}

// Limpiar HTML
// Elimina lo antiguo del carrito en el html para actualizarlo 
	rowProduct.innerHTML = '';

	let total = 0;
	let totalOfProducts = 0;
	
// Funcion para mostrar detalles del producto en el carrito
	allProducts.forEach(product => {
		const containerProduct = document.createElement('div');
		containerProduct.classList.add('cart-product');

		containerProduct.innerHTML = `
            <div class="info-cart-product">
                <span class="cantidad-producto-carrito">${product.quantity}</span>
                <p class="titulo-producto-carrito">${product.title}</p>
                <span class="precio-producto-carrito">${product.price}</span>
            </div>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="icon-close"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                />
            </svg>
        `;

		rowProduct.append(containerProduct);
		
// Calcula el precio total
		total = total + parseInt(product.quantity * product.price.slice(1));
		totalOfProducts = totalOfProducts + product.quantity;
	});
	
// Escribe el precio total
	valorTotal.innerText = `$${total}`;
	countProducts.innerText = totalOfProducts;
};

// Fin Carrito
