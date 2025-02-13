const calificaciones = [7, 5, 8, 3, 10];


function mostrarCalificaciones() {
    let listaHTML = "<ul>";
    for (const calificacion of calificaciones) {
        listaHTML += `<li>${calificacion}</li>`;
    }
    listaHTML += "</ul>";
    document.getElementById("resultado").innerHTML = listaHTML;
}


function calcularPromedio() {
    let suma = 0;
    for (let i = 0; i < calificaciones.length; i++) {
        suma += calificaciones[i];
    }
    const promedio = suma / calificaciones.length;
    document.getElementById("resultado").innerHTML = `<p>Promedio: ${promedio.toFixed(2)}</p>`;
}


function obtenerCalificacionMaxima() {
    let i = 0;
    let maximo = 0;
    while (i < calificaciones.length) {
        if (calificaciones[i] > maximo) {
            maximo = calificaciones[i];
        }
        i++;
    }
    document.getElementById("resultado").innerHTML = `<p>Calificación más alta: ${maximo}</p>`;
}

function verificarAplazo() {
    let i = 0;
    let hayAplazo = false;
    do {
        if (calificaciones[i] < 4) {
            hayAplazo = true;
            break;
        }
        i++;
    } while (i < calificaciones.length);
    const mensaje = hayAplazo ? "Sí, hay un aplazo." : "No hay aplazos.";
    document.getElementById("resultado").innerHTML = `<p>${mensaje}</p>`;
}
