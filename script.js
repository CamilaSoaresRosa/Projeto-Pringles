//mapear as coisas que serão interativas.
//querySelector seleciona apenas UM elemento
const latasMenor = document.querySelectorAll(".latas img:nth-child(2)");
const slides = document.querySelectorAll(".slide");

latasMenor.forEach(latinha=> {
    latinha.onclick = () => {
        const slideAtivo = document.querySelector(".slide.ativo");
        slideAtivo.classList.remove("ativo");
        slides[1].classList.add("ativo");
    }
})

