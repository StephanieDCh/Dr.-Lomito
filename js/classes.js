
//clase:
export class usuario {
    id = 0;
    nombre = "";
    correo = "";
    password = "";
    constructor (id,nombre,correo,password){
    this.id = id;
    this.nombre = nombre.toUpperCase();
    this.correo = correo;
    this.password = password;
    }
}


export class veterinario extends usuario{
    id = 0;
    categoria = "";
    img = "";
    nombre = "";
    especialidad = "";
    calificacion = "";
    descripcion = "";
    direccion = "";
    telLocal1 = 0;
    telPersonal = 0;      
    correo = 0;
    costoConsulta = 0;
    servicios = "";
    horAteIni = 0;
    horaAteCierre = 0;
    urgencia24_7 = false; 
    

    constructor (id, categoria, img, nombre, especialidad, calificacion, descripcion, direccion, telLocal1, telPersonal, correo, costoConsulta, servicios, horAteIni, horaAteCierre, urgencia24_7){
        this.id = id;
        this.categoria = categoria;
        this.img = img;
        this.nombre = nombre;   
        this.especialidad = especialidad;
        this.calificacion = calificacion;
        this.descripcion = descripcion;
        this.direccion = direccion;
        this.telLocal1 = telLocal1;
        this.telPersonal = telPersonal;
        this.correo = correo;
        this.costoConsulta = costoConsulta;
        this.servicios = servicios;
        this.horAteIni = horAteIni;
        this.horaAteCierre = horaAteCierre;
        this.urgencia24_7 = urgencia24_7;
     

        
    } //constructor
    

}//class veterinario