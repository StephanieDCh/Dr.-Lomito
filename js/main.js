let correo = document.getElementById("correo");
    correo.classList.remove("is-invalid");
    correo.classList.add("is-valid");
    if ( (correo.value.length<3) || (correo.value.length>20) ){
        correo.classList.remove("is-valid");
        correo.classList.add("is-invalid");
    }//if

    for (let i = 0; i < correo.value.length; i++) {
    console.log((!isNaN(correo.value.charAt(i))) );
    console.log(correo.value.charAt(i));
    console.log(correo.value.toUpperCase().charCodeAt(i));
    if(  (
             ( correo.value.toUpperCase().charCodeAt(i)<65)
             ||
             (correo.value.toUpperCase().charCodeAt(i)>90)
        )
        && ((correo.value.toUpperCase().charCodeAt(i)!=32) ) // espacio
        && ((correo.value.toUpperCase().charCodeAt(i)!=193) ) // Á
        && ((correo.value.toUpperCase().charCodeAt(i)!=201) ) // É
        && ((correo.value.toUpperCase().charCodeAt(i)!=205) ) // Í
        && ((correo.value.toUpperCase().charCodeAt(i)!=211) ) // Ó
        && ((correo.value.toUpperCase().charCodeAt(i)!=218) ) // Ú
        && ((correo.value.toUpperCase().charCodeAt(i)!=209) ) // Ñ
   ) {
        correo.classList.remove("is-valid");
        correo.classList.add("is-invalid");
        break;
   }//if

}; 
