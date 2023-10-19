// const UsuSeleccion = localStorage.getItem(`Usuarios`)
// let Usuarios = JSON.stringify(UsuSeleccion) 



 
    const usuarios={
        nombre:Nombre.value,
        dni:DNI.value,
        contraseña:Contraseña.value,
    }
    
 
    
 function datosUsuarios(){
    const datoUsu= JSON.parse(localStorage.getItem("datosUsu"))
    nombre.value = datosUsu.nombre
    dni.value = datosUsu.dni
    contraseña.value = datosUsu.contraseña
    
}
   datosUsuarios() 

 
 
 
    const UsuariosCargado=[{
    nombre:"giani",
    dni:224,
    contraseña:2022

 }
   
 ]




function Ingreso(){
     const UsuSeleccion = localStorage.getItem(`UsuSeleccion`)
     Usuarios = JSON.stringify(UsuSeleccion) 
    
    const nombre= document.getElementById("inputNombre").value
    const dni= document.getElementById("inputDNI").value
    const contraseña= document.getElementById("inputContraseña").value
    const UsuElegido=Usuarios.find(usu=> usu.nombre===nombre && usu.dni===dni && usu.contraseña===contraseña)
    if(UsuElegido || (Usuarios===nombre && dni && contraseña )){
        mensaje("Bienvenido"+UsuElegido)
        return true
    }else if(UsuElegido?nombre&&dni&&contraseña:mensaje("usuario no existe salame")){
        return false

    }

    function recuperarDatosjson(){
        const datosjson = JSON.parse(localStorage.getItem("datosjson"))
        nombre.value = datosjson.nombre
        dni.value = datosjson.dni
        contraseña.value = datosjson.contraseña
        
    }
    recuperarDatosjson() 

}

