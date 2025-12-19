const imagens = document.querySelectorAll('.img-1 img');
let index = 0;

function mostrarImg() {
  imagens[index].classList.remove('active');
  index = (index + 1) % imagens.length;
  imagens[index].classList.add('active');
}

setInterval(mostrarImg, 5000);





