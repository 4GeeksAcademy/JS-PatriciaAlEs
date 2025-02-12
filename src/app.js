// TIPOS DE DATOS
// string, boolean, number, null, undefined, array, objeto

// OPERADORES
// aritmeticos, comparacion, logicos 

// OPERADOR TERNARIO
// expresion ? me devuelves esto : me devueves esto otro

// let entradaCine = true

// let puedoEntrar = entradaCine == true ? "puedes pasar" : "no puedes pasar";

// console.log(puedoEntrar);


// FUNCIONES


// CONDICIONALES


// BUCLES (bucle for!!! for... off, for... in)

window.onload = function () {
    alert("Bienvenidos a mi pagina de likes :D")
  let contador = 0 

    const divContador = document.getElementById("contador")
    const boton = document.querySelector(".botonLike")
    const botondisLike = document.querySelector(".botonDislike")

    function sumarLikes () {
          contador++
          divContador.innerHTML = "Like: " + contador

    }

    function restarLikes () {
      contador--
      divContador.innerHTML = "Like: " + contador
    }
    
  botondisLike.onclick = restarLikes
  boton.onclick = sumarLikes

}