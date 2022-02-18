const segundosEnMinuto = 60;
const minutosEnHora = 60;
const botonCalcular = document.querySelector("#calcular")




botonCalcular.onclick = function(){
    const totalSegundos = Number(document.querySelectorAll(".segundos").values)
    const totalMinutos = Number(document.querySelectorAll(".minutos").values)
    const totalHoras = Number(document.querySelectorAll(".horas").values)

    let totalTiempo = Number(totalSegundos + totalMinutos + totalHoras);

    document.querySelector(".resultado").innerText = totalTiempo;
    return false;
}

console.log(botonCalcular)