function getDate(){
    let date = new Date();
    let data_to_inner = document.querySelector('#newCorp');
    data_to_inner.innerHTML = "NEWCORP LTDA &copy" + date.getFullYear();
}
function getSaudacao(){
    let saudacao = document.querySelector('#saudacoes');
    let date = new Date();
    let hora = date.getHours();
    if(hora >=6 && hora < 12){
        saudacao.innerHTML = "Bom dia";
    }
    else if(hora >=12 && hora < 18){
        saudacao.innerHTML = "Boa tarde , Sudo!";
    }
    else{
        saudacao.innerHTML = "Boa noite , Sudo!";
    }

}

window.onload = getDate();
window.onload = getSaudacao();