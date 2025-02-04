// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Arreglo para almacenar los nombres de los amigos ingresados
let amigos = [];

/**
 * Función para agregar un amigo a la lista.
 * - Obtiene el nombre del input.
 * - Verifica que no esté vacío.
 * - Evita nombres repetidos.
 * - Agrega el nombre al arreglo y actualiza la lista en pantalla.
 */
function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo'); // Obtiene el input
    const nombreAmigo = inputAmigo.value.trim(); // Elimina espacios en blanco al inicio y final

    // Validación: Evitar agregar nombres vacíos
    if (nombreAmigo === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Validación: Evitar nombres duplicados
    if (amigos.includes(nombreAmigo)) {
        alert(`El nombre "${nombreAmigo}" ya está en la lista.`);
        return;
    }

    // Agregar el nombre al arreglo de amigos
    amigos.push(nombreAmigo);

    // Limpiar el input después de agregar el nombre
    inputAmigo.value = "";

    // Actualizar la lista visual en la página
    actualizarLista();
}

/**
 * Función para actualizar la lista de amigos en pantalla.
 * - Borra la lista actual.
 * - Recorre el arreglo de amigos y crea elementos <li> con sus nombres.
 */
function actualizarLista() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ""; // Vacía la lista antes de actualizarla

    // Recorrer el arreglo y crear un <li> para cada amigo
    amigos.forEach((amigo) => {
        const li = document.createElement('li');
        li.textContent = amigo; // Agrega el nombre del amigo
        listaAmigos.appendChild(li); // Añade el elemento <li> a la lista
    });
}

/**
 * Función para sortear un amigo ganador.
 * - Verifica que haya al menos un amigo en la lista.
 * - Genera un número aleatorio para seleccionar un ganador.
 * - Muestra el nombre del ganador en pantalla.
 */
function sortearAmigo() {
    // Validación: Verificar que haya al menos un amigo en la lista
    if (amigos.length === 0) {
        alert("No hay amigos disponibles para sortear. Agrega al menos uno.");
        return;
    }

    // Seleccionar un índice aleatorio dentro del arreglo de amigos
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoGanador = amigos[indiceAleatorio]; // Obtener el nombre del ganador

    // Mostrar el ganador en la lista de resultados
    document.getElementById('resultado').innerHTML = `<li><strong>¡El ganador es: ${amigoGanador}!</strong></li>`;
}
