function getInputValue(){
	var mensaje= document.getElementById("mensaje");
	return mensaje.value;
}

var fechaHora = new Date();
var horas = fechaHora.getHours();
var minutos = fechaHora.getMinutes();

	var sufijo = ' am';
	if(horas > 12) {
	  horas = horas - 12;
	  sufijo = 'pm';
	}

	if(horas < 10) { horas = '0' + horas; }
	if(minutos < 10) { minutos = '0' + minutos; }

$("#buscar").on("keyup", buscar);

function buscar(){
  var contacto = $(".caja-amigos");
  var texto    = $("#buscar").val();
  var noItems = $('<li id="no-items-found">No items found</li>');
  texto        = texto.toLowerCase();
  contacto.show();
  for(var i=0; i< contacto.size(); i++){
    var contenido = contacto.eq(i).text();
    contenido     = contenido.toLowerCase();
    var index     = contenido.indexOf(texto);
    if(index == -1){
      contacto.eq(i).hide();
    }
  }
};

/*function limpiarbuscador() {
    var buscar = document.getElementById("buscar");
    buscar.value = "";
    buscar.focus();
}
function buscando() {
 var sidechat= document.getElementById("sidechat");
	sidechat.innerHTML = " ";
  limpiarbuscador();
};*/


function AgregarMensaje(texto){
var conversacion= document.getElementById("conversacion");
var cajarow= document.createElement("div");
	cajarow.className="row chatchat";
var cajacol= document.createElement("div");
	cajacol.className="col-md-6 col-md-offset-6";
var cajachat= document.createElement("div");
	cajachat.className="caja-chat michat";

var elemento= document.createElement("p");
	elemento.className="sms";
	elemento.innerHTML= texto;

var hora= document.createElement("p");
	hora.className="hora2";
	hora.innerHTML= horas+':'+minutos+sufijo;		


conversacion.appendChild(cajarow);	
cajarow.appendChild(cajacol);
cajacol.appendChild(cajachat);
cajachat.appendChild(elemento);
cajachat.appendChild(hora);
}

function limpiarCaja() {
    var mensaje = document.getElementById("mensaje");
    mensaje.value = "";
    mensaje.focus();
}

function Funcion(){
    var mensaje= getInputValue();
    if(mensaje!==""){
        AgregarMensaje(mensaje);
        limpiarCaja(mensaje);
    }
}

//function nuevaCharla() {
 /* var cajaAmigos=document.getElementsByClassName("caja-amigos");
  var valor=cajaAmigos.getAttribute("id");
  var esta=valor.value;

  var navnombre=document.getElementsByClassName("nav-right");
  var info=document.createElement("div");
  var navcontacto=document.createElement("p");
  var negrita=document.createElement("strong");

 
navnombre.appendChild(info);
info.appendChild(navcontacto);
navcontacto.appendChild(negrita);
negrita.appendChild(amigo);



var esta= document.getElementsById("5");
var valor= esta.getAttribute("data")
  console.log(valor);


  var conversacion= document.getElementById("conversacion");
  conversacion.innerHTML = '';
};	*/


$(document).ready(function(){ 
  $(".caja-amigos").on('click',function(){

      var valordata = $(this).attr("data");
      var nombre = contacto[valordata].nombre;
      var src = contacto[valordata].src;

      $("#nombrecontacto").text(nombre);
      $("#imagencontacto").attr("src",src);


        var conversacion= document.getElementById("conversacion");
        conversacion.innerHTML = '';
        var borrar= document.getElementById("x");
        borrar.innerHTML= '';
      
  })
});
    

var contacto =  [{
              nombre:"Laboratoria Perú",
              src:"image/logocodeacademy.png"
            },{
              nombre:"Raymi Saldomando",
              src:"image/raymi.jpg"
            },{
              nombre:"Mariana Costa",
              src:"image/mariana.jpg"
            },{
              nombre:"Ana María Martinez Franklin",
              src:"image/anamaria.jpg"
            },{
              nombre:"Rodulfo Prieto",
              src:"image/rodulfo.jpg"
            },{
              nombre:"Andrea Lamas",
              src:"image/andrea.jpg"
            },{
              nombre:"Maria Paula Rivarola",
              src:"image/mariapaula.jpg"
            },{
              nombre:"Katy Sanchez",
              src:"image/Katy.jpg"
            },{
              nombre:"Aldo Alfaro",
              src:"image/aldo.jpg"
            }];