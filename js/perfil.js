let formContainer = document.getElementById("caseVet");

window.addEventListener("load", function(e){
e.preventDefault();
let userId = localStorage.getItem("userLogged");
let listUsers = JSON.parse(localStorage.getItem("users"));

if(listUsers[userId].typeVet == "true"){
    formContainer.innerHTML += `<form id="formVet">
    <br>
      <div class="form-group">
        <!-- NOMBRE -->
        <div class="form-row d-flex justify-content-center">
          <div class="form-group col-md-4">
          <label for="inputNombre">Nombre:</label>
          <input type="text" class="form-control" id="inputNombre" value="${listUsers[userId].nombre}" readonly>
          </div>
          <div class="form-group col-md-4">
            <!--correo-->
            <label for="inputCorreo">Correo:</label>
            <input type="email" class="form-control" id="inputCorreo" value="${listUsers[userId].correo}" placeholder="ejemplo@correo.com" readonly>            
          </div>
           <!-- Categoria -->
          <div class="form-group col-md-3">            
          <label for="inputCorreo">Categoría:</label>
          <input type="text" class="form-control" id="categoriaPerf" value="${listUsers[userId].categoria}" placeholder="ejemplo@correo.com" readonly>           
          </div>
        </div>          
    
        <div class="form-row d-flex justify-content-center">
            <div class="form-group col-md-4">
              <!-- Especialidad -->
              <label for="inputEspecialidad">Especialidad:</label>
              <input type="text" class="form-control" id="inputEspecialidad" value="${listUsers[userId].especialidad}" placeholder="Especialidad" readonly>
            </div>  
            <div class="form-group col-md-3">
              <!-- Consulta -->
              <label for="inputConsulta">Consulta</label>
              <input type="text" class="form-control" id="inputConsulta" value="${listUsers[userId].costoConsulta}" placeholder="Costo por consulta" readonly>
              <small class="form-text text-muted">
                Ejemplo: 300.00
              </small>
              <div class="invalid-feedback">
                Recuerda este campo solo debe contener números.
              </div>
            </div>
            <div class="form-group col-md-4">
              <!-- Direccion -->
              <label for="inputDireccion">Dirección</label>
              <input type="text" class="form-control" id="inputDireccion" value="${listUsers[userId].direccion}" placeholder="Dirección" readonly>
              <small class="form-text text-muted">
                Ejemplo: Calle y # exterior
              </small>
              <div class="invalid-feedback">
                  Recuerda este campo debe contener entre 5 y 300 caracteres
              </div>
            </div>     
        </div>
       
       
        <div class="form-row d-flex justify-content-center">
          <div class="form-group  col-md-6">
            <!-- Descripción -->
            <label for="inputDescripcion">Descripción:</label>
            <textarea type="text" class="form-control" id="inputDescripcion" placeholder="Descripción" rows="3" readonly>${listUsers[userId].descripcion}</textarea>            
          </div>
          <div class="form-group col-md-5">
            <!-- Servicios -->
            <label for="inputServicios">Servicios</label>
            <textarea type="text" class="form-control" id="inputServicios" placeholder="Servicios" rows="3" readonly>${listUsers[userId].servicios}</textarea>
            </div>
        </div>
    
        <div class="form-row d-flex justify-content-center">
          <!-- Télefono Local -->
        <div class="form-group col-md-3">
          <label for="inputTelLocal">Teléfono Local:</label>
          <input type="text" maxlength="10" class="form-control" id="inputTelLocal" value="${listUsers[userId].telLocal1}" placeholder="Número a 10 dígitos" readonly>          
        </div>
    
          <!-- Teléfono Personal -->
        <div class="form-group col-md-3">
          <label for="inputTelPersonal">Teléfono Personal:</label>
          <input type="text" maxlength="10" class="form-control" id="inputTelPersonal" value="${listUsers[userId].telPersonal}" placeholder="Número a 10 dígitos" readonly>          
        </div>
    
          <!-- Hora Inicio -->
        <div class="form-group col-md-3">
          <label for="inputHoraIni">Hora Apertura:</label>
          <input type="text" class="form-control" id="inputHoraIni" value="${listUsers[userId].horAteIni}" placeholder="Hora de Apertura a 2 dígitos" readonly>          
        </div>
    
        <!-- Hora Cierre -->
      <div class="form-group col-md-2">
        <label for="inputHoraCie"> Hora de cierre:</label>
        <input type="text" class="form-control" id="inputHoraCie" value="${listUsers[userId].horaAteCierre}" placeholder="Hora de cierre a 2 dígitos" readonly>        
      </div>              
    </div>    
    </div>
    </form>`;
}else{
    formContainer.innerHTML +=`<form id="formVet" class="form-group col-sm-5">
      <br>
        <div class="form-group">
          <!-- NOMBRE -->
          <div class="form-row d-flex justify-content-start">
            <div class="form-group col-md-12">
            <label for="inputNombre">Nombre:</label>
            <input type="text" class="form-control" id="inputNombre" value="${listUsers[userId].nombre}" readonly>
            </div>
          </div>
          <div class="form-row d-flex justify-content-start">
            <div class="form-group col-md-12">
              <!--correo-->
              <label for="inputCorreo">Correo:</label>
              <input type="email" class="form-control" id="inputCorreo" value="${listUsers[userId].correo}" placeholder="ejemplo@correo.com" readonly>
            </div>
          </div>
   </div>
   </form>`
}
})