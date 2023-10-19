const usuarios =function(nombre,dni,contraseña){
    this.nombre=nombre,
    this.dni=dni,
    this.contraseña=contraseña
}
let usuarioA= new usuarios("giani",984,224)
let usuarioB= new usuarios("mana",201,203)
let usuarioC= new usuarios("elpelucasape",101,103)

const divisas = function(dolar,euro,real,uru){
    this.dolar=dolar,
    this.euro=euro,
    this.real=real,
    this.uru=uru

}
let divisaA= new divisas(1060)
let divisaB= new divisas(975)
let divisaC= new divisas(163)
let divisaD= new divisas(19)

let divi=[divisaA,divisaB,divisaC,divisaD]
let usu = [usuarioA,usuarioB,usuarioC]

const goBoton=document.getElementById("boton")
goBoton.addEventListener("click",()=>{goBoton()})

const elegir=document.getElementById("Elegir")
elegir.addEventListener("click",()=>{elegir()})

const comprar=document.getElementById("comprar")
comprar.addEventListener("click",()=>{comprar()})



function ingreso(){
    const buscar=document.querySelector('buscar')
    const inputNombre=document.getElementById('inputNombre').value  //valores del input nombre
    
    const inputdni=document.getElementById('inputDNI').value //valores del input dni
    const inputcontraseña=document.getElementById('inputContraseña').value //valores del input contraseña
    const total=usu.filter(usuario)

   if(total.length>0){
    const conte=document.createElement('div')
    conte.classList.add('Ingresa Usuario')

    total.forEach((usuario)=>{ 
        const card = document.createElement('Ingresa Usuario');
        card.classList.add('card');
               
        const nombre = document.createElement('InputNombre');
        nombre.textContent = usuario.nombre;
        card.appendChild(nombre);

        const dni = document.createElement('InputDNI');
        dni.textContent = `Dni:${usuario.dni}`
        card.appendChild(dni);

        const contraseña = document.createElement('InputContraseña');
        contraseña.textContent = `Contraseña: ${usuario.contraseña}`
        card.appendChild(contraseña)

        conte.appendChild(card)



     })





   }





}   



















































 
//     const usuarios={
//         nombre:Nombre.value,
//         dni:DNI.value,
//         contraseña:Contraseña.value,
//     }
    
 
    
//  function datosUsuarios(){
//     const datoUsu= JSON.parse(localStorage.getItem("datosUsu"))
//     nombre.value = datosUsu.nombre
//     dni.value = datosUsu.dni
//     contraseña.value = datosUsu.contraseña
    
// }
//    datosUsuarios() 

 
 
 
//     const UsuariosCargado=[{
//     nombre:"giani",
//     dni:224,
//     contraseña:2022

//  }
   
//  ]




// function Ingreso(){
//      const UsuSeleccion = localStorage.getItem(`UsuSeleccion`)
//      Usuarios = JSON.stringify(UsuSeleccion) 
    
//     const nombre= document.getElementById("inputNombre").value
//     const dni= document.getElementById("inputDNI").value
//     const contraseña= document.getElementById("inputContraseña").value
//     const UsuElegido=Usuarios.find(usu=> usu.nombre===nombre && usu.dni===dni && usu.contraseña===contraseña)
//     if(UsuElegido || (Usuarios===nombre && dni && contraseña )){
//         mensaje("Bienvenido"+UsuElegido)
//         return true
//     }else if(UsuElegido?nombre&&dni&&contraseña:mensaje("usuario no existe salame")){
//         return false

//     }

//     function recuperarDatosjson(){
//         const datosjson = JSON.parse(localStorage.getItem("datosjson"))
//         nombre.value = datosjson.nombre
//         dni.value = datosjson.dni
//         contraseña.value = datosjson.contraseña
        
//     }
//     recuperarDatosjson() 

// }

