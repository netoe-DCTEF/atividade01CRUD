var i;
var inputs_page = document.getElementsByClassName("readonly-config");

function enable_readonly(){
    for(i = 0; i < inputs_page.length;i++){
        inputs_page[i].readOnly = true;
    }
}
function disable_readonly(){
    for(i = 0; i < inputs_page.length;i++){
        inputs_page[i].readOnly = false;
    }
}

window.onload = enable_readonly();
