let campoNombre=document.getElementById("Nombre");
let Correo = document.getElementById("Correo");
let Password = document.getElementById("Password");
let PasswordCon = document.getElementById("PasswordCon");
let btnEnviar = document.getElementById("btnEnviar");

let form = document.getElementById("formato");


//Validar Nombre
campoNombre.addEventListener("keyup",function(e){    
    e.preventDefault();
    validarNombre();
});
function validarNombre(){
    let flag = false;
    let regex = /^[\sA-Záéíóú']{3,50}$/i;
    let testNombre = regex.test(campoNombre.value);

    if(testNombre && isNaN(campoNombre.value)){
        campoNombre.classList.remove("is-invalid");
        campoNombre.classList.add("is-valid");
        flag=true;
        btnEnviar.disabled=false;
    }else{
        campoNombre.classList.remove("is-valid");
        campoNombre.classList.add("is-invalid");
    }
    return flag;
}
//validacion de correo, minimo un arroba y un punto.
Correo.addEventListener("keyup", function(e){
    e.preventDefault();
    validarCorreo();
});
function validarCorreo() {
    let flag = false;
    let regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,5})+$/;
    let testCorreo = regex.test(Correo.value);
    if(testCorreo) {
        Correo.classList.remove("is-invalid");
        Correo.classList.add("is-valid");
        flag=true;
        
    }else{
        Correo.classList.remove("is-valid");
        Correo.classList.add("is-invalid");
    }
    return flag;
}
//Validacion de contraseña
Password.addEventListener("keyup", function (e) {
    e.preventDefault()    
    validarPass();
});
function validarPass() {
    let flag = false;
    let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?#$&_-])[A-Za-z\d$@$!%*?#&_-]{8,15}$/;
let result = regex.test(Password.value);
if(result){
    Password.classList.remove("is-invalid");
    Password.classList.add("is-valid");
    flag = true;  
} 
else {
    Password.classList.remove("is-valid");
    Password.classList.add("is-invalid");    
}
    return flag;
};
//Validacion de confirmacion de contraseña
PasswordCon.addEventListener("keyup", function (e) {
    e.preventDefault()    
    validarPassCon();
});
function validarPassCon() {
    let flag = false;
    if(Password.value==PasswordCon.value && PasswordCon.value.length > 0){
        PasswordCon.classList.remove("is-invalid");
        PasswordCon.classList.add("is-valid");
        flag = true;
       
    } 
    else {
        PasswordCon.classList.remove("is-valid");
        PasswordCon.classList.add("is-invalid");         
    }
    return flag;
};

btnEnviar.addEventListener("click", function (e){
    e.preventDefault();
    
    if(validarNombre() && validarCorreo() && validarPass() && validarPassCon()){
        console.log("campos correctos");
            Swal.fire({
                background: '#FFF9E3',
                position: 'center',
                type: 'success',
                title: 'Registro completado.',
                showConfirmButton: false,
                timer: 2500,
                timerProgressBar: true
                })
            
        setTimeout(() => {
            campoNombre.value= "";
            Correo.value="";
            Password.value="";
            PasswordCon.value="";
            campoNombre.classList.remove("is-valid");
            Correo.classList.remove("is-valid");
            Password.classList.remove("is-valid");
            PasswordCon.classList.remove("is-valid");
        }, 1000);


    }else{ validarNombre();
           validarCorreo();
            validarPass();
            validarPassCon();
                            btnEnviar.disabled=true;
                            setTimeout(() => {
                                campoNombre.value= "";
                                Correo.value="";
                                Password.value="";
                                PasswordCon.value="";
                                campoNombre.classList.remove("is-invalid");
                                Correo.classList.remove("is-invalid");
                                Password.classList.remove("is-invalid");
                                PasswordCon.classList.remove("is-invalid");
                            }, 1000);
    }
    
  
})