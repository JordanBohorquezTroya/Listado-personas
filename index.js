let ul = []
function agregarPersona(){
    let nombre = document.getElementById('nombre').value;
    let apellido  = document.getElementById('apellido').value;
    if(nombre && apellido){
        ul.push(`${nombre} ${apellido}`)
        actualizarLista();
        document.getElementById('nombre').value = '';
        document.getElementById('apellido').value = '';
    } else {
        alert("Por favor, ingresa tanto el nombre como el apellido.");
    }
}

function actualizarLista(){
    let lista = document.getElementById('persona');
    lista.innerHTML = ''; 

    
    ul.forEach(function(persona) {
        let li = document.createElement('li');
        li.textContent = persona;
        lista.appendChild(li);
    });
}
