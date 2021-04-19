//Obtiene los botones
document.getElementById("login_btn").addEventListener("click",login);
document.getElementById("register_btn").addEventListener("click",register);
window.addEventListener("resize",anchopage);

const formularios = document.getElementById('formularios');
//Variables
var form_login = document.querySelector(".form_login");
var form_register = document.querySelector(".form_register");
var form_login_register = document.querySelector(".form_login_register");
var back_box_login = document.querySelector(".box_login");
var back_box_register = document.querySelector(".box_register");

//Funciones
function anchopage(){
    if(window.innerWidth > 850){
      back_box_login.style.display = "block";
      back_box_register.style.display = "block";  
    }else{
        back_box_register.style.display = "block";
        back_box_register.style.opacity = "1";
        back_box_login.style.display = "none";
        form_login.style.display = "block";
        form_register.style.display = "none";
        form_login_register.style.left = "0px";

    }
}
anchopage();

function login(){
    if(window.innerWidth > 850){
        form_register.style.display = "none";
        form_login_register.style.left = "10px";
        form_login.style.display = "block";
        back_box_register.style.opacity = "1";
        back_box_login.style.opacity = "0";
    }else{
        form_register.style.display = "none";
        form_login_register.style.left = "0px";
        form_login.style.display = "block";
        back_box_register.style.display = "block";
        back_box_login.style.display = "none";

    }

}

function register(){
    if(window.innerWidth > 850){
        form_register.style.display = "block";
        form_login_register.style.left = "410px";
        form_login.style.display = "none";
        back_box_register.style.opacity = "0";
        back_box_login.style.opacity = "1";
    }else{
        form_register.style.display = "block";
        form_login_register.style.left = "0px";
        form_login.style.display = "none";
        back_box_register.style.display = "none";
        back_box_login.style.display = "block";
        back_box_login.style.opacity = "1";

    }




}