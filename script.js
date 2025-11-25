//Relogio

function AtualizarRelogio() {
    const all = new Date();
    let horas = all.getHours();
    let minutos = all.getMinutes();
    let segundos = all.getSeconds();

    let dia = all.getDate();
    let mes = all.getMonth();
    let ano = all.getFullYear();

    dia = dia < 10 ? '0' + dia : dia;
    mes = mes < 10 ? '0' + mes : mes;
    ano = ano < 10 ? '0' + ano : ano;

    const anoString = `${dia} de ${mes} de ${ano}`
    document.querySelector(".data").textContent = anoString;

    horas = horas < 10 ? '0' + horas : horas ;
    minutos = minutos < 10 ? '0' + minutos : minutos ;
    segundos = segundos < 10 ? '0' + segundos : segundos ;

    const tempoString = `${horas}:${minutos}:${segundos}`;
    document.querySelector(".relogio").textContent = tempoString;
}
setInterval(AtualizarRelogio,1000);