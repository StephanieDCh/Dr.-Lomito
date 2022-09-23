function addItem(item){
    const itemHTML = `<div class="card col-sm-5 m-1 d-flex">
                <div class="row no-gutters ">
                <div class="col-sm-4" >
                    <img id="imagenTest" src="${item.img}" class="card-img-top"  alt="..." >
                </div>
                <div class="col-sm-8">
                    <div class="card-body">
                    
                    <h5 class="card-title">${item.nombre}</h5>
                    <p class="card-text">${item.especialidad}</p> 
                    <p class="card-text">${item.calificacion}</p>
                    <p class="card-text">${item.descripcion}</p>
                    <a href = "${item.link}" class="btn btn-dark" >Ver más</a>
                    <p class="card-text"><strong>${item.consulta}</strong></p>
                     </div>
                </div>
                </div>
            </div> 
        <br/>`;
    const itemsContainer = document.getElementById("list-items");
    itemsContainer.innerHTML += itemHTML;
}

addItem({'id': '1',
        'servicios': 'Estetica Canina $250 mxn',
        'direccion': 'Calle Lazaro Cardenas #204',
        'telLocal1': '33 3852-7890',
        'telPersonal': '33 7865-7890',
        'correo': 'josue.chavezlomeli@gmail.com',
        'horAteIni': '7am',
        'horaAteCierre': '8pm',
        '24/7': 'true',
        'img':'https://media.discordapp.net/attachments/1012849492883681330/1022282035760480296/98902309-ilustracion-de-estilo-de-dibujos-animados-de-vector-de-personaje-de-medico-veterinario-feliz-con-ani.png',
        'calificacion':'5 estrellas', //mostrar con huellas o estrellas
        'nombre':'Juan Pérez',
        'especialidad':'Veterinario general', //¿es el título del médico?
        'categoria':'Cardiología', //tipo de servicio
        'descripcion':'Especialista en Medicina y Cirugía en Perros y Gatos',
        'consulta':'$300.00',
        'link':'../pages/doctorVerMas.html'
    }); 
    addItem({'id': '2',
        'servicios': 'Cirugía Animal $700 mxn',
        'direccion': 'Londres #344, Coyoacán',
        'telLocal1': '55 67 34 34 77',
        'telPersonal': '55 78 90 32 45',
        'correo': 'cirugia_animal@gmail.com',
        'horAteIni': '9am',
        'horaAteCierre': '6pm',
        '24/7': 'true',
        'img':'../src/4.png',
        'calificacion':'5 estrellas', //mostrar con huellas o estrellas
        'nombre':'Juliana Hernández',
        'especialidad':'Cirugía Animal', //¿es el título del médico?
        'categoria':'Cirugía', //tipo de servicio
        'descripcion':'Especialista en Medicina y Cirugía en Perros y Gatos',
        'consulta':'$700.00',
        'link':'../pages/doctorVerMas.html'
    }); 
    addItem({'id': '3',
        'servicios': 'Dermatología $800 mxn',
        'direccion': 'Colima #35, Roma Norte ',
        'telLocal1': '55 32 45 67 23',
        'telPersonal': '55 65 39 09 23',
        'correo': 'dermatología_animal@gmail.com',
        'horAteIni': '9am',
        'horaAteCierre': '6pm',
        '24/7': 'true',
        'img':'../src/6.png',
        'calificacion':'4 estrellas', //mostrar con huellas o estrellas
        'nombre':'Andrés Sánchez',
        'especialidad':'Dermatología Animal', //¿es el título del médico?
        'categoria':'Dermatología', //tipo de servicio
        'descripcion':'Especialista en Dermatología Animal',
        'consulta':'$800.00',
        'link':'../pages/doctorVerMas.html'
    }); 
    addItem({'id': '4',
        'servicios': 'Oftalmología para Perros $1500 mxn',
        'direccion': 'Miguel Hidalgo #60, Tlalpan Cnetro',
        'telLocal1': '55 43 68 32 10',
        'telPersonal': '55 34 98 09 00',
        'correo': 'ojitosperrunos@gmail.com',
        'horAteIni': '10am',
        'horaAteCierre': '5pm',
        '24/7': 'true',
        'img':'../src/7.png',
        'calificacion':'5 estrellas', //mostrar con huellas o estrellas
        'nombre':'Octavio Flores',
        'especialidad':'Oftalmología Animal', //¿es el título del médico?
        'categoria':'Oftalmología', //tipo de servicio
        'descripcion':'Especialista en Oftalmología para Perros',
        'consulta':'$1500.00',
        'link':'../pages/doctorVerMas.html'
    }); 
    addItem({'id': '5',
        'servicios': 'Estetica Canina $400 mxn',
        'direccion': 'Av. Erasmo Castellanos Quinto #604',
        'telLocal1': '55 45 33 67 79',
        'telPersonal': '55 14 74 33 23',
        'correo': 'estetica_animal@gmail.com',
        'horAteIni': '9am',
        'horaAteCierre': '7pm',
        '24/7': 'true',
        'img':'../src/8.png',
        'calificacion':'3.5 estrellas', //mostrar con huellas o estrellas
        'nombre':'Alfonso Guutiérrez',
        'especialidad':'Veterinario general', //¿es el título del médico?
        'categoria':'Estética', //tipo de servicio
        'descripcion':'Especialista en Medicina y Estética en Perros y Gatos',
        'consulta':'$400.00',
        'link':'../pages/doctorVerMas.html'
    }); 
    addItem({'id': '6',
        'servicios': 'Herpetología $450 mxn',
        'direccion': 'Pirámide de la Luna',
        'telLocal1': '78 555 43 21',
        'telPersonal': '55 67 32 11 13',
        'correo': 'reptiles_bonitos@gmail.com',
        'horAteIni': '9am',
        'horaAteCierre': '5pm',
        '24/7': 'true',
        'img':'../src/9.png',
        'calificacion':'5 estrellas', //mostrar con huellas o estrellas
        'nombre':'Luis Alberto Piña',
        'especialidad':'Herpetología', //¿es el título del médico?
        'categoria':'Herpetología', //tipo de servicio
        'descripcion':'Especialista en Medicina y Cirugía Herpetológica',
        'consulta':'$450.00',
        'link':'../pages/doctorVerMas.html'
    }); 
    addItem({'id': '7',
        'servicios': 'Estetica Canina $450 mxn',
        'direccion': 'Cumbres de Maltrata #88',
        'telLocal1': '33 3852-4562',
        'telPersonal': '55 34 21 56 87',
        'correo': 'belleza.canina@gmail.com',
        'horAteIni': '9am',
        'horaAteCierre': '5pm',
        '24/7': 'true',
        'img':'../src/3.png',
        'calificacion':'5 estrellas', //mostrar con huellas o estrellas
        'nombre':'Andrés Cosio',
        'especialidad':'Veterinario general', //¿es el título del médico?
        'categoria':'Estética', //tipo de servicio
        'descripcion':'Especialista en Medicina y Estética en Perros y Gatos',
        'consulta':'$450.00',
        'link':'../pages/doctorVerMas.html'
    }); 
    addItem({'id': '8',
        'servicios': 'Veterinario General $500 mxn',
        'direccion': 'Prolongación Div. del Norte #677',
        'telLocal1': '55 55 68 75 23',
        'telPersonal': '55 23 56 78 21',
        'correo': 'veterinaria_del_sur@gmail.com',
        'horAteIni': '7am',
        'horaAteCierre': '7pm',
        '24/7': 'true',
        'img':'../src/6.png',
        'calificacion':'5 estrellas', //mostrar con huellas o estrellas
        'nombre':'Lucía Morales',
        'especialidad':'Veterinario general', //¿es el título del médico?
        'categoria':'Veterinaria General', //tipo de servicio
        'descripcion':'Especialista en Medicina y Cirugía en Perros y Gatos',
        'consulta':'$500.00',
        'link':'../pages/doctorVerMas.html'
    }); 
    addItem({'id': '9',
        'servicios': 'Oncología $800 mxn',
        'direccion': 'Retorno 11 #32, Colonia Avante',
        'telLocal1': '55 54 67 72 98',
        'telPersonal': '55 32 51 11 78',
        'correo': 'corazon_animal@gmail.com',
        'horAteIni': '10am',
        'horaAteCierre': '5pm',
        '24/7': 'true',
        'img':'https://media.discordapp.net/attachments/1012849492883681330/1022282035760480296/98902309-ilustracion-de-estilo-de-dibujos-animados-de-vector-de-personaje-de-medico-veterinario-feliz-con-ani.png',
        'calificacion':'4 estrellas', //mostrar con huellas o estrellas
        'nombre':'Atziri Obregón',
        'especialidad':'Oncología', //¿es el título del médico?
        'categoria':'Oncología ', //tipo de servicio
        'descripcion':'Especialista en Oncología de canes y felinos pequeños',
        'consulta':'$300.00',
        'link':'../pages/doctorVerMas.html'
    }); 
    addItem({'id': '10',
        'servicios': 'Estetica Canina Iztapalapa $350 mxn',
        'direccion': 'Calzada Ermita Iztapalapa #234',
        'telLocal1': '55 66 92 34 65',
        'telPersonal': '55 43 56 78 54',
        'correo': 'perrunos_de_barrio@gmail.com',
        'horAteIni': '8am',
        'horaAteCierre': '7pm',
        '24/7': 'true',
        'img':'../src/9.png',
        'calificacion':'2 estrellas', //mostrar con huellas o estrellas
        'nombre':'Brayan López',
        'especialidad':'Veterinario general', //¿es el título del médico?
        'categoria':'Veterinario General', //tipo de servicio
        'descripcion':'Especialista en Medicina y Estética de Perros y Gatos',
        'consulta':'$350.00',
        'link':'../pages/doctorVerMas.html'
    }); 
    


    



   /*  Estructura JSON class Usuario {perfil (string vet o user),
     id (number), categoria (string), imagen (img), nombre(string), 
     titulo (string), puntuacion (float), descripcion (string), 
     consulta (number), servicios (string), direccion (string), 
     telLocal1 (number), telPersonal (number), correo (string), 
     horAteIni (number), horAteCierre (number),  24_7 (bool)}
    
     Tarjeta: imagen, nombre, especialidad, puntuacion, descripcion, costo consulta
    Perfil: todo */

    function getClassCategory(cat){
        let c = "";
        switch (cat) {
            case "Cardiología":
                c = "card";
                break;
            case "Aves":
                c = "avi"
                break;

            case "Ganadería":
                c="gan"
                break;

            case "Ortopedista":
                c="ort";
                break;
            
            case "Cirugia":
                    c="cir";
                break;

            case "Oncología":
                    c="onc";
                break;

            case "Oftalmología":
                c="oft";
                break;
            
            case "Fisioterapía":
                    c="fis";
                break;

            case "Dermatología":
                    c="der";
                break;
               
               
                
                


            default:
                c="all";
                break;
        }//switch
        return c
    }//getClassCategory