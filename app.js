// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];
const lista = document.getElementById("listaAmigos");

function agregarAmigo() {
    let nombreAmigo = document.getElementById("amigo").value;
    let esDuplicado = amigos.includes(nombreAmigo);

    if (nombreAmigo === "") {
        alert("Por favor, inserte un nombre.")
    }
    else if (esDuplicado){
        alert("Usted ya ha ingresado este nombre.");
    }
    else{
        amigos.push(nombreAmigo);
        console.log(amigos)
        actualizarListaAmigos(); 
        document.getElementById("amigo").value = ""
    }             
}

function actualizarListaAmigos(){
    lista.innerHTML = "";
    amigos.forEach(nombre => {
        let elemento = document.createElement("li");
        elemento.textContent = nombre;
        lista.appendChild(elemento);
    });
    
}

function sortearAmigo(){
    if (amigos.length === 0) {
        alert("Lista vacia, no se puede realizar el sorteo.")
        
    }
    else {
        let resultadoSorteo = document.getElementById("resultado")
        let amigoSecreto = Math.floor(Math.random() * amigos.length);
        resultadoSorteo.innerHTML = `El amigo secreto sorteado es: ${amigos[amigoSecreto]}`;
        lista.innerHTML = ""
    }

}

