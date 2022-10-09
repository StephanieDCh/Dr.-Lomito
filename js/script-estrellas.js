var contador;
    function calificar(item){
       
        contador=item.id[0];//trata el id como string y toma el primer caracter
        console.log(item.id[0]);
        let nombre = item.id.substring(1);//captura el resto del string
        console.log(nombre);

        for(let i=0;i<5;i++){
            
            if(i<contador){
          document.getElementById((i+1)+nombre).style.color="orange";
            }else{
                document.getElementById((i+1)+nombre).style.color="black";
            }
        }//for calificacion
    }
    function Mensaje(){
      alert("Gracias por calificar nuestros servicios usted nos dió "+contador+" estrellas");
    }