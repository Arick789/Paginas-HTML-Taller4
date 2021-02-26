const nombre = document.getElementById("nombre")
const apellido = document.getElementById("apellido")
const direccion = document.getElementById("direccion")
const telefono = document.getElementById("telefono")
const correo = document.getElementById("correo")
const contraseña = document.getElementById("contraseña")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")

form.addEventListener("Registrate", e=>{
    e.preventDefault()
    let warnings = ""
    if(nombre.value.length < 6){
        warnings += 'El nombre no es valido <br>'
    }
})