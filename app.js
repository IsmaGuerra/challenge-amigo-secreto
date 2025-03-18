// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos =[];

//agrega el nombre al arreglo con metodo Push.

function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();

    //valida que campo no este vacio
    if(nombreAmigo == "") {
        alert("Por favor inserte un nombre");
        return;
    } 
        

    
    if (amigos.includes(nombreAmigo)){
        alert(`El nombre "${nombreAmigo}", ya esta en la lista`);
        return;
    }
    //ingresa el nombre al arreglo
    amigos.push(nombreAmigo);
    inputAmigo.value = "";
    actualizarLista();
}
//Actualiza lista de amigos
function actualizarLista(){
    const listaAmigos = document.getElementById('listaAmigos');
    //limpia contenedor lista
    listaAmigos.innerHTML = "";

    for (let i=0; i < amigos.length; i++){
        const li = document.createElement("li");
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }
}


// sortea amigo secreto aleatorio

function sortearAmigo(){
if (amigos.length == 0){
    alert("No hay nombres disponibles, agrega uno");
    return;
}
const indiceAleatorio = Math.floor(Math.random() * amigos.length);

const amigoSorteado = amigos[indiceAleatorio];

// muestra el resultado en el HTML

let resultado = document.getElementById("resultado");
resultado.innerHTML = `El amigo sorteado: <strong>${amigoSorteado} </strong>`
}
