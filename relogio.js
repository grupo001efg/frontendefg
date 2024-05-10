const hora = document.querySelector('#hora');
const minuto = document.querySelector('#minuto');
const segundo = document.querySelector('#segundo');

setInterval(() =>{
    let data = new Date();

    let horas = data.getHours();
    let minutos = data.getMinutes();
    let segundos = data.getSeconds();
    
    hora.innerHTML = `${formatTime(hora)}`;
    minuto.innerHTML = `${formatTime(minuto)}`;
    segundo.innerHTML = `${formatTime(segundo)}`;

},1000);

function formatTime(time){
    return time < 10 ? "0" + time : time;
}