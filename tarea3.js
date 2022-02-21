const botonCalcular = document.querySelector("#calcular")


botonCalcular.onclick = function(){
    const segundosVideos = document.querySelectorAll(".segundos")
    let totalSegundos = 0;
    for (i=0; i<segundosVideos.length; i++){
        totalSegundos += Number(segundosVideos[i].value)
    }

    const minutosVideos = document.querySelectorAll(".minutos")
    let totalMinutos = 0;
    for (j=0; j<minutosVideos.length; j++){
        totalMinutos += Number(minutosVideos[j].value)
    }
    
    const horasVideos = document.querySelectorAll(".horas")
    let totalHoras = 0;
    for (k=0; k<horasVideos.length; k++){
        totalHoras += Number(horasVideos[k].value)
    }


   const segundosEnMinutos = Math.floor(totalSegundos/ 60);
   const segundosRestantes = totalSegundos % 60;

   const totalMinutosSumados = totalMinutos + segundosEnMinutos;
   const minutosEnHoras = Math.floor(totalMinutosSumados / 60);
   const minutosRestantes = totalMinutosSumados % 60;

   const totalHorasSumadas = totalHoras + minutosEnHoras;

    let totalTiempo = `El resultado de los videos es de ${totalHorasSumadas} horas, ${minutosRestantes} minutos y ${segundosRestantes} segundos`;
    document.querySelector(".resultado").innerText = totalTiempo;

    return false;
}

