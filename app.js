// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación.
//  Aquí deberás desarrollar la lógica para resolver el problema.

//Creacion una variable para nuestro array ,para almacenar los nombres de los amigos 
let amigo =[];
//  funciòn  para agregar los nombres  al array amigos []
function agregarAmigo(){
    let inputAmigo = document.getElementById("amigo");
    let nombreAmigo = inputAmigo.value;
// se crea una validaciòn si, no se agrega un nombre dentro de nuestro array, muestra una alerta de retorno
    if (!nombreAmigo){
        alert("Debes ingresar un nombre valido");
        return;

    }
    //despuès de agregar amigo, limpia el campo de texto de input
    amigo.push(nombreAmigo);
    inputAmigo.value ="";
    inputAmigo.focus();
    renderizarAmigos();

}
// se crea una funciòn donde se muestren los nombres agregados de  nuestro array
function renderizarAmigos(){
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML ="";
//  creamos un for para alternando, sobre ese array amigo[]
// aquì es donde van entrar los nombres al arreglo comenzando desde el cero 
// indicando la posiciòn en la  que se encuentre  AMIGO 
    for(let i = 0; i < amigo.length; i++){
        let item = document.createElement("li");
        item.textContent = amigo[i];
        listaAmigos.appendChild(item);

    }
}
//  funciòn para sortear amigo secreto

function sortearAmigo(){

    if (amigo.length === 0){
        alert("No hay amigos para sortear");
        return;
    }
    // se crea a una  variable  donde redondeamos los valores que esta en array amigo
    let amigoSorteado = amigo[Math.floor(Math.random()*amigo.length)];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML= `El amigo sorteado es: ${amigoSorteado}`;

    let limpiarLista = document.getElementById("listaAmigos");
    limpiarLista.innerHTML ="";


}