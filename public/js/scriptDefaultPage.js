function getDate(){
    var date = new Date();
    var data_to_inner = document.querySelector('#newCorp');
    data_to_inner.innerHTML = "NEWCORP LTDA &copy" + date.getFullYear();
}

window.onload = getDate();