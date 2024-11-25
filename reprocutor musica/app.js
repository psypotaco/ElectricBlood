const tituloC = document.querySelector('.reproductor h1');
const artista = document.querySelector('.reproductor p');

const progreso = document.getElementById('progreso');
const cancion = document.getElementById('cancion');

const atras = document.querySelector('.controles button.atras');
const siguiente = document.querySelector('.controles button.siguiente');

const reproducir = document.querySelector('.controles button.inicioPausa');
const iconoReproducir = document.querySelector('.controles button.botonplay');

console.log(cancion)
const canciones = [{
    titulo:'by the way',
    artista:'Electric Blood',
    fuente:'musica/by the way .wav'
},
{
    titulo:'can´t stop',
    artista:'Electric Blood',
    fuente:'musica/can´t stop.wav'
},
{
    titulo:'dani california',
    artista:'Electric Blood',
    fuente:'musica/dani california.wav'
},
{
    titulo:'give it away',
    artista:'Electric Blood',
    fuente:'musica/give it away 2.0.wav'
},
{
    titulo:'under the bridge',
    artista:'Electric Blood',
    fuente:'musica/under the bridge.wav'
},
{
    titulo:'wet sand',
    artista:'Electric Blood',
    fuente:'musica/wet sand .wav'
}];

let indice = 0;

cancion.addEventListener('loadedmetadata', function(){
    progreso.max = cancion.duration
    progreso.value = cancion.currentTime
})
function actualizarCancion(){
    tituloC.textContent = canciones[indice].titulo
    artista.textContent = canciones[indice].artista
    cancion.src = canciones[indice].fuente


};

reproducir.addEventListener('click', reproducirPausar)

function reproducirPausar(){
  
    if (cancion.paused){
        reproducirCancion()
        iconoReproducir.classList.add('bi bi-pause-circle-fill')
        iconoReproducir.classList.remove('botonplay')}
        else{
            pausarCancion()
            iconoReproducir.classList.remove('bi bi-pause-circle-fill')
        iconoReproducir.classList.add('botonplay')
    }
}
function reproducirCancion(){
    cancion.play()
}
function pausarCancion(){
    cancion.pause()
}

cancion.addEventListener('timeupdate', function(){
    if(!cancion.paused){
        progreso.value = cancion.currentTime}
    
})

progreso.addEventListener('input', function(){
    cancion.currentTime = progreso.value
})
progreso.addEventListener('change', function(){reproducirCancion()})

siguiente.addEventListener('click', function()
{indice = (indice + 1) % canciones.length
    actualizarCancion()
    reproducirCancion()
})

atras.addEventListener('click', function(){
    indice = (indice - 1 + canciones.length) % canciones.length
        actualizarCancion()
        reproducirCancion()
})

console.log(siguiente)

actualizarCancion()
