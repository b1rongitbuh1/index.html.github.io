// ======================
// SLIDER AUTOMÁTICO
// ======================

const slides = document.querySelectorAll('.slide');

let index = 0;

function cambiarSlide() {

    slides[index].classList.remove('active');

    index++;

    if(index >= slides.length){
        index = 0;
    }

    slides[index].classList.add('active');
}

setInterval(cambiarSlide, 4000);


// ======================
// CONTADOR ANIMADO
// ======================

const numeros = document.querySelectorAll('.numero');

const iniciarContador = () => {

    numeros.forEach(numero => {

        const objetivo = +numero.getAttribute('data-num');

        let contador = 0;

        const incremento = objetivo / 100;

        const actualizar = () => {

            contador += incremento;

            if(contador < objetivo){

                numero.innerText = Math.floor(contador);

                requestAnimationFrame(actualizar);

            } else {

                numero.innerText = objetivo + "+";
            }
        }

        actualizar();

    });

}


// ======================
// ACTIVAR CONTADOR
// AL HACER SCROLL
// ======================

let contadorIniciado = false;

window.addEventListener("scroll", () => {

    const seccionContador = document.querySelector(".contador");

    const posicion = seccionContador.getBoundingClientRect().top;

    const pantalla = window.innerHeight;

    if(posicion < pantalla && !contadorIniciado){

        iniciarContador();

        contadorIniciado = true;
    }

});


// ======================
// APARICIÓN SUAVE
// DE SECCIONES
// ======================

const secciones = document.querySelectorAll("section");

const mostrarSecciones = () => {

    secciones.forEach(sec => {

        const posicion = sec.getBoundingClientRect().top;

        const pantalla = window.innerHeight - 100;

        if(posicion < pantalla){

            sec.classList.add("mostrar");

        }

    });

}

window.addEventListener("scroll", mostrarSecciones);

mostrarSecciones();


// ======================
// BOTÓN VOLVER ARRIBA
// ======================

const botonArriba = document.createElement("button");

botonArriba.innerHTML = "↑";

document.body.appendChild(botonArriba);

botonArriba.style.position = "fixed";
botonArriba.style.bottom = "20px";
botonArriba.style.right = "20px";
botonArriba.style.width = "50px";
botonArriba.style.height = "50px";
botonArriba.style.borderRadius = "50%";
botonArriba.style.border = "none";
botonArriba.style.background = "#1f355a";
botonArriba.style.color = "white";
botonArriba.style.fontSize = "22px";
botonArriba.style.cursor = "pointer";
botonArriba.style.display = "none";
botonArriba.style.zIndex = "999";

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){

        botonArriba.style.display = "block";

    }else{

        botonArriba.style.display = "none";
    }

});

botonArriba.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});