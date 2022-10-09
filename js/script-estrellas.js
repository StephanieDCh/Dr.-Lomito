var contador;
    function calificar(item){ //item es la estrella en la que se hace click
       
        contador=item.id[0];//trata el id como string y toma el primer caracter recupera el numero
        console.log(item.id[0]);
        let nombre = item.id.substring(1);//captura el resto del string
        console.log(nombre);

        for(let i=0;i<5;i++){
            
            if(i<contador){ //contador es el número de la estrella a la que le di click
          document.getElementById((i+1)+nombre).style.color="orange";
            }else{
                document.getElementById((i+1)+nombre).style.color="black";
            }
        }//for calificacion
    }
    function Mensaje(){
      alert("Gracias por calificar nuestros servicios usted nos dió "+contador+" estrellas");
    }