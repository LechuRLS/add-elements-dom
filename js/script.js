 // Aquí tu código
 const agregar = document.getElementById("agregar")
 const lista = document.getElementById("lista")
 const borrar = document.getElementById("borrar")

 function nuevoElemento() {
    let nuevoElemento = prompt("Introduce aqui un elemento");
    if (nuevoElemento !== null && nuevoElemento.trim() !== ""){
        let li = document.createElement("li");
        li.textContent = nuevoElemento;
        lista.appendChild(li);
    } else {
        alert("Elemento inválido")
    }
}

    function borrarLista() {
        lista.innerHTML = "";
    }

    agregar.addEventListener("click", nuevoElemento)
    borrar.addEventListener("click", borrarLista)