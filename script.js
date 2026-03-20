//mapear as coisas que serão interativas.
//querySelector seleciona apenas UM elemento
const latasMenor = document.querySelectorAll(".latas img:nth-child(2)");
const slides = document.querySelectorAll(".slide");

//contador: começa no 0. acr+1. 
let contador = 0

latasMenor.forEach(latinha=> {
    latinha.onclick = () => {
        const slideAtivo = document.querySelector(".slide.ativo");
        slideAtivo.classList.remove("ativo");

//condicionais -> if e else 

    if(contador == 3) {
        contador = 0;
    } else {
        contador = contador + 1;
    }


        slides[contador].classList.add("ativo");
    }
})

