
export class usuario {
    id = 0;
    nombre = "";
    correo = "";
    password = "";
    typeVet = "";

    constructor (typeVet, id,nombre,correo,password){
        this.typeVet = typeVet;
        this.id = id;
        this.nombre = nombre;
        this.correo = correo;
        this.password = password;
    };
};//clase usuario:

export class veterinario extends usuario{  
    categoria = "";
    img = "";    
    especialidad = "";
    calificacion = 0;
    descripcion = "";
    direccion = "";
    telLocal1 = 0;
    telPersonal = 0;  
    costoConsulta = 0;
    servicios = "";
    horAteIni = 0;
    horaAteCierre = 0;
    urgencia24_7 = false; 
    opiniones = [];     
    

    constructor (typeVet, id, nombre, correo, password, categoria, img, especialidad, calificacion, descripcion, direccion, telLocal1, telPersonal,  costoConsulta, servicios, horAteIni, horaAteCierre, urgencia24_7){
        super(typeVet, id,nombre,correo,password)
        this.categoria = categoria;
        this.img = img;         
        this.especialidad = especialidad;
        this.calificacion = calificacion;
        this.descripcion = descripcion;
        this.direccion = direccion;
        this.telLocal1 = telLocal1;
        this.telPersonal = telPersonal;      
        this.costoConsulta = costoConsulta;
        this.servicios = servicios;
        this.horAteIni = horAteIni;
        this.horaAteCierre = horaAteCierre;
        this.urgencia24_7 = urgencia24_7;        
    } //constructor heredado de person  

};//class veterinario

export class opinion {
    autor = "";
    calificacion ;
    opinion = "";  

    constructor (autor, calificacion, opinion){
        this.autor = autor;
        this.calificacion = calificacion;
        this.opinion = opinion;
       
    }
}