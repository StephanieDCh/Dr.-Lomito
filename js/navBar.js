let navBar = document.getElementById("navBar");


window.addEventListener("load", function (e){

     navBar.innerHTML = ` <a class="navbar-brand pl-3" href="../index.html"><img src="../src/Dr._Lomito.png" alt="logo" width="90px" height="45px"></a>
     <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
       aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
       <span class="navbar-toggler-icon"></span>
     </button>     

     <div class="collapse navbar-collapse" id="navbarSupportedContent">

       <ul class="navbar-nav px-3" style="flex: auto; justify-content: space-between ">
         <li class="nav-item active">
           <a class="nav-link" href="#">Iniciar Sesión</a>
         </li>
         <li class="nav-item active">
           <a class="nav-link" href="../pages/registrodoctores.html">Regístrate</a>
         </li>
         <li class="nav-item active">
           <a class="nav-link" href="../pages/nosotros.html">Nosotros</a>
         </li>
         <li class="nav-item active">
           <a class="nav-link" href="../pages/contacto.html">Contacto</a>
         </li>
         <li class="nav-item active">
           <a class="nav-link" href="../pages/directorio.html">Directorio</a> 
           </a>
         </li>
         <li class="nav-item active">
           <a class="nav-link" href="../pages/perfilUsuario.html">Mi Perfil</a>
         </li>
       </ul>

     </div>
    </nav>
  </div>`




})//Carga la nav bar