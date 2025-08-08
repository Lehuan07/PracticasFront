

function animateCount(element, target, speed = 100) {
    let count = 0;

    const step = target / 100; // Aumenta de a pasos razonables
    const interval = setInterval(() => {
        count += step;

        if (count >= target) {
            element.innerText = target.toLocaleString(); // muestra el número con separadores
            clearInterval(interval);
        } else {
            element.innerText = count.toLocaleString();
        }
    }, speed);
}

// Referencias a los párrafos
let ytParrafo = document.querySelector("#parrafoYoubute");
let xParrafo = document.querySelector("#parrafoTwitter");
let ingParrafo = document.querySelector("#parrafoInstagram");
let fbParrafo = document.querySelector("#parrafoFace");

// Llamadas a la función para cada contador
animateCount(ytParrafo, 300000);
animateCount(xParrafo, 20000);
animateCount(ingParrafo, 15000);
animateCount(fbParrafo, 10000);
