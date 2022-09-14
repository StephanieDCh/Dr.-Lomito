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
    console.log(correo.value.toLowerCase().charCodeAt(i));
    if(  (
             ( correo.value.toLowerCase().charCodeAt(i)<97)
             ||
             (correo.value.toLowerCase().charCodeAt(i)>122)
        )
        && ((correo.value.toLowerCase().charCodeAt(i)!=32) ) // espacio
        && ((correo.value.toLowerCase().charCodeAt(i)!=193) ) // Á
        && ((correo.value.toLowerCase().charCodeAt(i)!=201) ) // É
        && ((correo.value.toLowerCase().charCodeAt(i)!=205) ) // Í
        && ((correo.value.toLowerCase().charCodeAt(i)!=211) ) // Ó
        && ((correo.value.toLowerCase().charCodeAt(i)!=218) ) // Ú
        && ((correo.value.toLowerCase().charCodeAt(i)!=209) ) // Ñ
   ) {
        correo.classList.remove("is-valid");
        correo.classList.add("is-invalid");
        break;
   }//if

}; 
