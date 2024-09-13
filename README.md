# Explicacion del codigo

Este código permite agregar personas (con su nombre y apellido) a una lista en una página web. La funcionalidad principal se divide en dos funciones: `agregarPersona()` y `actualizarLista()`.

 1. Array `ul`:
 - El array `ul` es el que almacenará las personas agregadas (nombre y apellido) como cadenas de texto.
 2. Función `agregarPersona()`:
 -   Se encarga de obtener los valores del nombre y apellido ingresados en dos campos de texto (`input`) con los ID `nombre` y `apellido`.
-   Si ambos campos tienen un valor, los concatena en una sola cadena (`nombre apellido`) y la agrega al array `ul`.
-   Luego, llama a la función `actualizarLista()` para reflejar los cambios en la interfaz.
-   Después de agregar la persona, limpia los campos de entrada para permitir la adición de más nombres.
-   Si alguno de los campos está vacío, muestra una alerta pidiendo que se ingrese tanto el nombre como el apellido.
3. Función `actualizarLista()`:
-   Se encarga de mostrar la lista actualizada de personas en un elemento `ul` con el ID `persona` (una lista desordenada).
-   Primero, vacía cualquier contenido previo en el `ul`.
-   Luego, recorre el array `ul` con un bucle `forEach` y crea un nuevo elemento `li` para cada persona, añadiéndolo a la lista desordenada (`ul`).
-----
Este código facilita la interacción del usuario para agregar nombres y apellidos a una lista en tiempo real, validando que ambos campos estén llenos y actualizando la interfaz con los nuevos datos.
