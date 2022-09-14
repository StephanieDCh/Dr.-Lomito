let tel = document.getElementById("Numero");
let msg = document.getElementById("validationTextarea");



tel.addEventListener("blur", function (e) {
    e.preventDefault()
    
    let telValor = tel.value;

    //validando campo usuario
    if(telValor.length==10 && !isNaN(telValor)){
        tel.classList.remove("is-invalid")
        tel.classList.add("is-valid")

    }else{
        tel.classList.remove("is-valid")
        tel.classList.add("is-invalid")
    }
})

msg.addEventListener("blur", function (e) {
    e.preventDefault()
    
    let msgValor = msg.value;

    //validando campo usuario
    if(msgValor.length>=20 && msgValor.length<=280){
        msg.classList.remove("is-invalid")
        msg.classList.add("is-valid")

    }else{
        msg.classList.remove("is-valid")
        msg.classList.add("is-invalid")
    }
})