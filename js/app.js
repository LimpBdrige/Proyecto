

const btnAgregar = document.getElementById("btnAgregar").addEventListener("click",(e)=>{
    let marca = document.getElementById("marca").value;
    let ram=document.getElementById("ram").value;
    let costo=document.getElementById("costo").value;
    let cantidad=document.getElementById("cantidad").value;
    let Almacenamiento=document.getElementById("almacenamiento").value;
    var xhr= new XMLHttpRequest();

    xhr.open("POST", "http://localhost:3000/usuarios",true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

       
    xhr.send("marca="+marca+"&almacenamiento="+Almacenamiento+"&ram="+ram+"&costo="+costo+"&cantidad="+cantidad);
});


const btnleer=document.getElementById("btnConsultar");
btnleer.addEventListener("click",(e)=>{
    var request = new XMLHttpRequest()
    request.open('GET', 'http://localhost:3000/usuarios', true)
    request.onload = function(){
    
        let details =document.getElementById("details");
        let data = JSON.parse(this.response)
        console.log(data);
        if(request.status >= 200 && request.status < 400){
            details.innerHTML +="<div><p>" + this.response +"</p></<div>"
        } else {
            console.log("error")
            details.innerHTML += "Error en la llamada a la API";
        }
    }
    request.send()
});

const btnBuscar=document.getElementById("btnBuscar");
btnBuscar.addEventListener("click",(e)=>{
const id = document.getElementById("id").value;
var request = new XMLHttpRequest();
  request.open("GET","http://localhost:3000/usuarios/"+id, true);
  request.onload = function(){
    let details = document.getElementById("details");
    let info = JSON.parse(this.response);
    let i=0;     
        details.innerHTML+=`
        <div class="card">
          <p>Nombre manga: ${this.response}</p>
        </div>`;
        i++;
  }
  request.send();
});

const btnEliminar=document.getElementById("btnEliminar");
btnEliminar.addEventListener("click",(e)=>{
    let id = document.getElementById("id2").value;
    var request = new XMLHttpRequest()
    request.open('DELETE', 'http://localhost:3000/usuarios', true)
    request.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    request.onload = function(){
    
        let details =document.getElementById("details");
        if(request.status >= 200 && request.status < 400){
            details.innerHTML +="<div><p>" + this.response +"</p></<div>"
        } else {
            console.log("error")
            details.innerHTML += "Error en la llamada a la API";
        }
    }
    request.send("numero="+ id);
});

const btnModificar=document.getElementById("btnModificar");
btnModificar.addEventListener("click",(e)=>{
   let id = document.getElementById("mod").value;
   var xhr = new XMLHttpRequest();
  xhr.open("GET","http://localhost:3000/usuarios/"+id ,true);
  xhr.onload=function(){
    let details =document.getElementById("details");
    if(xhr.status >= 200 && xhr.status < 400){
        var request = new  XMLHttpRequest();
        request.open('PUT',"http://localhost:3000/usuarios", true);
        request.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        let marca_nueva = document.getElementById("marca2").value;
        let ram_nueva=document.getElementById("ram2").value;
        let costo_nuevo=document.getElementById("costo2").value;
        let cantidad_nueva=document.getElementById("cantidad2").value;
        let Almacenamiento_nuevo=document.getElementById("almacenamiento2").value;
        request.send("id="+id+"&marca_nueva="+marca_nueva+"&almacenamiento_nuevo="+Almacenamiento_nuevo+"&ram_nueva="+ram_nueva+"&costo_nuevo="+costo_nuevo+"&cantidad_nueva="+cantidad_nueva);
        
    } else {
        console.log("error")
        details.innerHTML += "Error en la llamada a la API";
        }
    
    }
    xhr.send();
});