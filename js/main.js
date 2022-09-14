let Correo = document.getElementById("Correo");
    Correo.classList.remove("is-invalid");
    Correo.classList.add("is-valid");
    if ( (correo.value.length<3) || (Correo.value.length>20) ){
        Correo.classList.remove("is-valid");
        Correo.classList.add("is-invalid");
    }//if

    for (let i = 0; i < Correo.value.length; i++) {
    console.log((!isNaN(Correo.value.charAt(i))) );
    console.log(Correo.value.charAt(i));
    console.log(Correo.value.toLowerCase().charCodeAt(i));
    if(  (
             ( Correo.value.toLowerCase().charCodeAt(i)<97)
             ||
             (Correo.value.toLowerCase().charCodeAt(i)>122)
        )
        && ((Correo.value.toLowerCase().charCodeAt(i)!=32) ) // espacio
        && ((Correo.value.toLowerCase().charCodeAt(i)!=193) ) // Á
        && ((Correo.value.toLowerCase().charCodeAt(i)!=201) ) // É
        && ((Correo.value.toLowerCase().charCodeAt(i)!=205) ) // Í
        && ((Correo.value.toLowerCase().charCodeAt(i)!=211) ) // Ó
        && ((Correo.value.toLowerCase().charCodeAt(i)!=218) ) // Ú
        && ((Correo.value.toLowerCase().charCodeAt(i)!=209) ) // Ñ
   ) {
        Correo.classList.remove("is-valid");
        Correo.classList.add("is-invalid");
        break;
   }//if

}; 
