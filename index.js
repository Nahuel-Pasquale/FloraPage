// selector
var menu = document.querySelector(".hamburger");

// method
function toggleMenu(event) {
  this.classList.toggle("is-active");
  document.querySelector(".menuppal").classList.toggle("is_active");
  event.preventDefault();
}

// event
menu.addEventListener("click", toggleMenu, false);

//Solución con jQUery
// $(document).ready(function () {
//   $(".hamburger").click(function () {
//     $(".hamburger").toggleClass("is-active");
//     $(".menuresponsive").toggleClass("is-active");
//     return false;
//   });
// });

const container = document.querySelector(".contenedor-productos");

const productos = [
  {
    nombreDelProducto: "gomero",
    fotoDelProducto:
      "https://plantamadrerosario.com/wp-content/uploads/2020-05-11-01.49.13-1_copy_2031x2515.jpg",
    nombreCientifico: "ficus elastica",
    lugar: "interior / exterior",
    cantidadDeAgua: "poca agua",
    crecimiento: "lento / arbol",
    precio: "$2500",
  },
  {
    nombreDelProducto: "gomero",
    fotoDelProducto:
      "https://images.unsplash.com/photo-1486162928267-e6274cb3106f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    nombreCientifico: "ficus elastica",
    lugar: "interior / exterior",
    cantidadDeAgua: "poca agua",
    crecimiento: "crecimiento lento",
    precio: "$2500",
  },
  {
    nombreDelProducto: "gomero",
    fotoDelProducto:
      "https://images.unsplash.com/photo-1486162928267-e6274cb3106f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    nombreCientifico: "ficus elastica",
    lugar: "interior / exterior",
    cantidadDeAgua: "poca agua",
    crecimiento: "crecimiento lento",
    precio: "$2500",
  },
  {
    nombreDelProducto: "gomero",
    fotoDelProducto:
      "https://plantamadrerosario.com/wp-content/uploads/2020-05-11-01.49.13-1_copy_2031x2515.jpg",
    nombreCientifico: "ficus elastica",
    lugar: "interior / exterior",
    cantidadDeAgua: "poca agua",
    crecimiento: "crecimiento lento",
    precio: "$2500",
  },
  {
    nombreDelProducto: "gomero",
    fotoDelProducto:
      "https://images.unsplash.com/photo-1486162928267-e6274cb3106f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    nombreCientifico: "ficus elastica",
    lugar: "interior / exterior",
    cantidadDeAgua: "poca agua",
    crecimiento: "crecimiento lento",
    precio: "$2500",
  },
  {
    nombreDelProducto: "gomero",
    fotoDelProducto:
      "https://images.unsplash.com/photo-1486162928267-e6274cb3106f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    nombreCientifico: "ficus elastica",
    lugar: "interior / exterior",
    cantidadDeAgua: "poca agua",
    crecimiento: "crecimiento lento",
    precio: "$2500",
  },
];

const crearProducto = (e) => {
  let flipCardContainer = document.createElement("div");
  let flipCard = document.createElement("div");
  let cardFront = document.createElement("div");
  let cardFigure = document.createElement("figure");
  let cardFigure2 = document.createElement("figure");
  let figureDiv = document.createElement("div");
  let figureImg = document.createElement("img");
  let figureImg2 = document.createElement("img");
  let figureImgFront = document.createElement("img");
  let figcaption = document.createElement("figcaption");

  let cardFrontUl = document.createElement("ul");
  let liDetalle1 = document.createElement("li");
  let liDetalle2 = document.createElement("li");
  let liDetalle3 = document.createElement("li");
  let liDetalle4 = document.createElement("li");
  let liDetalle5 = document.createElement("li");

  let button = document.createElement("button");

  let cardBack = document.createElement("div");
  let designContainer = document.createElement("div");
  let designContainerSpan1 = document.createElement("span");
  let designContainerSpan2 = document.createElement("span");
  let designContainerSpan3 = document.createElement("span");
  let designContainerSpan4 = document.createElement("span");
  let designContainerSpan5 = document.createElement("span");
  let designContainerSpan6 = document.createElement("span");
  let designContainerSpan7 = document.createElement("span");
  let designContainerSpan8 = document.createElement("span");

  figcaption.textContent = `${e.nombreDelProducto}`;
  liDetalle1.textContent = `${e.nombreCientifico}`;
  liDetalle2.textContent = `${e.lugar}`;
  liDetalle3.textContent = `${e.cantidadDeAgua}`;
  liDetalle4.textContent = `${e.crecimiento}`;
  liDetalle5.textContent = `${e.precio}`;

  button.textContent = "Buy";

  flipCardContainer.classList.add("flip-card-container");

  cardFigure2.classList.add("figure");
  figcaption.classList.add("figcaption");
  cardFigure.classList.add("figure");
  //   flipCardContainer.style.hue = "220";
  flipCard.classList.add("flip-card");
  cardFront.classList.add("card-front");
  //   figureImg.classList.add("img-bg");
  figureDiv.classList.add("img-bg");
  cardBack.classList.add("card-back");
  designContainer.classList.add("design-container");
  designContainerSpan1.classList.add("design");
  designContainerSpan1.classList.add("design--1");
  designContainerSpan2.classList.add("design");
  designContainerSpan2.classList.add("design--2");
  designContainerSpan3.classList.add("design");
  designContainerSpan3.classList.add("design--3");
  designContainerSpan4.classList.add("design");
  designContainerSpan4.classList.add("design--4");
  designContainerSpan5.classList.add("design");
  designContainerSpan5.classList.add("design--5");
  designContainerSpan6.classList.add("design");
  designContainerSpan6.classList.add("design--6");
  designContainerSpan7.classList.add("design");
  designContainerSpan7.classList.add("design--7");
  designContainerSpan8.classList.add("design");
  designContainerSpan8.classList.add("design--8");

  //   figureImg.src = e.fotoDelProducto;
  //   figureImg.alt = `${e.nombreDelProducto}`;
  //   figureImgFront.src = e.fotoDelProducto;
  //   figureImgFront.alt = `${e.nombreDelProducto}`;

  flipCardContainer.appendChild(flipCard);
  flipCard.appendChild(cardFront);
  cardFront.appendChild(cardFigure2);
  //   cardFront.appendChild(figureImg);
  cardFigure2.appendChild(figureDiv);
  cardFigure2.appendChild(figureImg2);
  cardFigure2.appendChild(figcaption);
  cardFront.appendChild(cardFrontUl);
  cardFrontUl.appendChild(liDetalle1);
  cardFrontUl.appendChild(liDetalle2);
  cardFrontUl.appendChild(liDetalle3);
  cardFrontUl.appendChild(liDetalle4);
  cardFrontUl.appendChild(liDetalle5);

  flipCard.appendChild(cardBack);
  cardBack.appendChild(cardFigure);
  cardFigure.appendChild(figureDiv);
  cardFigure.appendChild(figureImg);
  //   cardFigure2.appendChild(figcaption);
  cardBack.appendChild(button);
  cardBack.appendChild(designContainer);
  designContainer.appendChild(designContainerSpan1);
  designContainer.appendChild(designContainerSpan2);
  designContainer.appendChild(designContainerSpan3);
  designContainer.appendChild(designContainerSpan4);
  designContainer.appendChild(designContainerSpan5);
  designContainer.appendChild(designContainerSpan6);
  designContainer.appendChild(designContainerSpan7);
  designContainer.appendChild(designContainerSpan8);

  figureImg.src = e.fotoDelProducto;
  figureImg.alt = `${e.nombreDelProducto}`;
  figureImg2.src = e.fotoDelProducto;
  figureImg2.alt = `${e.nombreDelProducto}`;

  container.appendChild(flipCardContainer);
};

function agregarProductos() {
  console.log(productos);
  productos.forEach((producto) => {
    crearProducto(producto);
  });
}

agregarProductos();
