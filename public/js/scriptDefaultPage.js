function getDate(){
    var date = new Date();
    var data_to_inner = document.querySelector('#newCorp');
    data_to_inner.innerHTML = "NEWCORP LTDA &copy" + date.getFullYear();
}
function getSaudacao(){
    var saudacao = document.querySelector('#saudacoes');
    var date = new Date();
    var hora = date.getHours();
    if(hora < 12){
        saudacao.innerHTML = "Bom dia , Admin!";
    }
    else if(hora >=12 && hora < 18){
        saudacao.innerHTML = "Boa Tarde , Admin!";
    }
    else{
        saudacao.innerHTML = "Boa Noite , Admin!";
    }

}

window.onload = getDate();
window.onload = getSaudacao();