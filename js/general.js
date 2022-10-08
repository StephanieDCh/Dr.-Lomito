let navBar = document.getElementsByClassName("insertNavbar");
console.log("Hay usuario firmado?" + localStorage.getItem("loggedIn"));
let loggedIn = document.getElementById("loggedIn");

if((localStorage.getItem("loggedIn"))== "true"){  
  navBar[0].innerHTML = ` <div class="logo">
     <a href="../index/index.html"><img src="../src/logoCircular.png" alt="logo" width="60px" height="60px"></a>
     <div id = "lomito"><a href="../index/index.html">Dr.Lomito</a></div>  
   </div>         
     <div class="hamburguer">
     <div class="line"></div>
     <div class="line"></div>
     <div class="line"></div>      
     </div>
   <nav class="navbar1 d-block">
     <ul id"listPages">      
       <li>
         <a class="activePage"  href="../pages/nosotros.html" style="text-decoration: none">Nosotros</a>
       </li>
       <li>
         <a class="activePage"  href="../pages/contacto.html" style="text-decoration: none">Contacto</a>
       </li>
       <li>
         <a class="activePage"  href="../pages/directorio.html" style="text-decoration: none">Directorio</a> 
         </a>
       </li>
       <li>
         <a class="activePage" href="../pages/perfilUsuario.html" style="text-decoration: none">Perfil</a>
       </li>
       <li>
         <a class="activePage" href="../pages/ingresarVet.html" style="text-decoration: none">Agregar Vet</a>
       </li>
       <li>
       <a class="activePage" id="loggedIn" href="../index/index.html" style="text-decoration: none">Cerrar Sesión</a>
       </li>
     </ul>
   </nav>`

  let loggedIn = document.getElementById("loggedIn");

  loggedIn.addEventListener("click", function(e){
    localStorage.setItem("loggedIn", "false");
    localStorage.removeItem("userLogged");
    location.href = "http://127.0.0.1:5501/pages/index.html"
  })//Escuchar cuando cierren sesion

}else{
  navBar[0].innerHTML = ` <div class="logo">
  <a href="../index/index.html"><img src="../src/logoCircular.png" alt="logo" width="60px" height="60px"></a>
  <div id = "lomito"><a href="../index/index.html">Dr.Lomito</a></div> 
</div>         
  <div class="hamburguer">
  <div class="line"></div>
  <div class="line"></div>
  <div class="line"></div>      
  </div>
<nav class="navbar1 d-block">
  <ul id"listPages">   
    <li>
      <a class="activePage"  href="../pages/nosotros.html" style="text-decoration: none">Nosotros</a>
    </li>
    <li>
      <a class="activePage"  href="../pages/contacto.html" style="text-decoration: none">Contacto</a>
    </li>
    <li>
      <a class="activePage"  href="../pages/directorio.html" style="text-decoration: none">Directorio</a> 
      </a>
    </li>    
    <li>
      <a class="activePage" href="../pages/ingresarVet.html" style="text-decoration: none">Agregar Vet</a>
    </li>
    <li>
      <a class="activePage" id="loggedIn" href="../pages/logIn.html" style="text-decoration: none">Inicia Sesión</a>
    </li>
  </ul>
</nav>`;
}




window.addEventListener("load", function(e){
  let page = document.getElementsByClassName("activePage");
  let actualPage = (document.location.pathname).slice(6); 

 for (let i = 0; i < page.length; i++) {

  if(page[i].href.includes(actualPage)){
        page[i].classList.add("active");
        break;    
  }
 }
 
  hamburguer = document.querySelector(".hamburguer");
  hamburguer.onclick = function(){
    navBar = document.querySelector(".navbar1");
    navBar.classList.toggle("active");
  }
});//Habilita hamburguesa y añade class active


let footer = document.getElementById("footer_olas");

footer.innerHTML=`
<div class="container__footer">
    <div class="box__footer">
        <h4>Mapa del sitio</h4>
        <a href="../index/index.html">Inicio</a>
        <a href="nosotros.html">Nosotros</a>
        <a href="contacto.html">Contacto</a>
        <a href="directorio.html">Directorio</a>
    </div>

    <div class="box__footer">
        <h4>Legal</h4> 
        <a href="#">Términos y condiciones</a>
        <a href="#">Política de privacidad y cookies</a>
        <a href="#">Aviso legal</a>
        <a href="#">Política de reseñas</a>              
    </div>

    <div class="box__footer">
        <h4>Redes Sociales</h4>
        <a href="#"><i class="fab fa-facebook-square"></i> Facebook</a>
        <a href="#"><i class="fab fa-twitter-square"></i> Twitter</a>
        <a href="#"><i class="fab fa-instagram-square"></i> Instagram</a>
    </div>

    

    <hr>
    <footer><p>Todos los derechos reservados © 2022 <strong> Doctor Lomito </strong></p></footer>  
</div>`
