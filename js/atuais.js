let modalBox = document.querySelector(".modal-box");
let modalBoxImg = modalBox.querySelector(".modal-box-image");
let overlay = document.querySelector(".overlay");
const titulo = document.querySelector(".descricao h2");
const descricao = document.querySelector(".detalhes p");
const genero = document.querySelectorAll(".ficha-tec small");
const lancamento = document.querySelectorAll(".ficha-tec small");
const btn = document.querySelector(".botao-detalhes");

let items = document.querySelectorAll(".item");
let modalImgBox = modalBoxImg.querySelector(".img img");

function mostraDetalhes(e) {
  modalBox.classList.remove("invisible");

  const title = e.target.dataset.title;
  const desc = e.target.dataset.detalhes;
  const url = e.target.dataset.img;
  const gen = e.target.dataset.genero;
  const lanc = e.target.dataset.lancamento;
  titulo.innerHTML = title;
  descricao.innerHTML = desc;
  genero[0].innerHTML = gen;
  lancamento[1].innerHTML = lanc;
  modalImgBox.src = `assets/atuais/${url}`;
}

items.forEach((item) => {
  item.addEventListener("click", mostraDetalhes);
  item.addEventListener("touchStart", mostraDetalhes);
});

overlay.addEventListener("click", function () {
  modalBox.classList.add("invisible");
});

btn.addEventListener("click", mostraDetalhes);
