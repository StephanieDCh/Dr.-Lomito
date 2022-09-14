let campoNombre=document.getElementById("Nombre");
let campoApellido=document.getElementById("Apellido");

campoNombre.addEventListener("blur",function(e){    
    e.preventDefault();
//solo letras, incluyendo espacios y acentos. 
if(
    (campoNombre.value.length>=3)&&(campoNombre.value.length<=20)    
    ){ //validacion nombre
    campoNombre.classList.remove("is-invalid");
    campoNombre.classList.add("is-valid");
}else{
    campoNombre.classList.remove("is-valid");
    campoNombre.classList.add("is-invalid");
}
//validación caracteres en Nombre
    for (let i = 0; i < campoNombre.value.length; i++) {
        if(
                    
            ((campoNombre.value.toUpperCase().charCodeAt(i)<65)
            || //or
            (campoNombre.value.toUpperCase().charCodeAt(i)>90))

            && ((campoNombre.value.toUpperCase().charCodeAt(i)!=32))
            && ((campoNombre.value.toUpperCase().charCodeAt(i)!=193))
            && ((campoNombre.value.toUpperCase().charCodeAt(i)!=201))
            && ((campoNombre.value.toUpperCase().charCodeAt(i)!=205))
            && ((campoNombre.value.toUpperCase().charCodeAt(i)!=211))
            && ((campoNombre.value.toUpperCase().charCodeAt(i)!=209))      )
        {
            
            campoNombre.classList.remove("is-valid");
            campoNombre.classList.add("is-invalid"); 
            break;
            
        }else{
         
            console.log(campoNombre.value.charAt(i));
        }
    }
});//fin fundion anonima y boton

campoApellido.addEventListener("blur",function(e){    
    e.preventDefault();

if((campoApellido.value.length>=3)&&(campoApellido.value.length<=50)){ //validacion apellido
    campoApellido.classList.remove("is-invalid");
    campoApellido.classList.add("is-valid");
}else{
    campoApellido.classList.remove("is-valid");
    campoApellido.classList.add("is-invalid");
}
//validación caracteres en Apellido
    for (let i = 0; i < campoApellido.value.length; i++) {  

        if(
                      
            ((campoApellido.value.toUpperCase().charCodeAt(i)<65)
            || //or
            (campoApellido.value.toUpperCase().charCodeAt(i)>90))

            && ((campoApellido.value.toUpperCase().charCodeAt(i)!=32))
            && ((campoApellido.value.toUpperCase().charCodeAt(i)!=193))
            && ((campoApellido.value.toUpperCase().charCodeAt(i)!=201))
            && ((campoApellido.value.toUpperCase().charCodeAt(i)!=205))
            && ((campoApellido.value.toUpperCase().charCodeAt(i)!=211))
            && ((campoApellido.value.toUpperCase().charCodeAt(i)!=209))      )
        {
            
            campoApellido.classList.remove("is-valid");
            campoApellido.classList.add("is-invalid"); 
            break;            

        }else{

            console.log(campoApellido.value.charAt(i));
        }
    }
});//fin fundion anonima y boton
