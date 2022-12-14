//

//DATOS PRINCIPALES
let nombre;

let apellido;
let monto
let ciudad


nombre = prompt("Su nombre");
apellido = prompt("Su apellido");
dni = prompt("Su DNI")
ciudad = prompt("de la ciudad de");
trabajo = prompt()
monto =parseInt(prompt("Monto a prestar de $"));


let opcion;
let opcion1;
let trab;
let menuPrestamo = "" ;


const prestamo = [

    {},
    {id: 1, Trabajo : "si", horario: "8hs"},
    {id: 2, Trabajo : "si", horario: "12hs"},
    {id: 3, Trabajo : "no", busqueda: "si"},

]

for(let i=0; i<=3; i++ ){
    console.log(prestamo)
}
   
function aprobado(){
    let namelist = [];
    let name = "";
    aprobado = confirm("¿Desea saber si su préstamo fue aprobado?");
    if (aprobado == true){
        for (const aprobado of prestamo) {
            console.log(aprobado.nombre);
            name = aprobado.nombre;
            namelist.push(name);
                       
    
}

}else{
    alert("Bienvenido y muchas gracias estimado cliente")
}
}

aprobado();

if(aprobado == true ){
    alert("Si fue aprobado: " + menuPrestamo);
}
alert("Bienvenido: " + " " + nombre + " " + apellido + " " + dni + " - prestamo solicitado: " +  monto);
 if (monto >= 20000) {
    alert("Su prestamo SI fue aprobado");
}
{
    alert("Su prestamo NO fue aprobado");
 }

// // MONTOS SOLICITADOS 
 for (let i = 20000; i <= 10000; i++) {
    alert('Se aprobara si su solicitud de prestamo es de: $(i)')
}