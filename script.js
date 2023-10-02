document.addEventListener('DOMContentLoaded', function() {
    const botonCargarImagen = document.getElementById('cargar-imagen');
    botonCargarImagen.addEventListener('click', function() {
        cargarImagen();
    });

    function cargarImagen() {
        const apiUrl = 'https://dog.ceo/api/breeds/image/random';

        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('La solicitud no fue exitosa');
                }
                return response.json();
            })
            .then(data => {
                const imageUrl = data.message;

                const imagenContainer = document.getElementById('imagen-container');
                const imgElement = document.createElement('img');
                imgElement.src = imageUrl;

                // Borra la imagen anterior antes de agregar la nueva.
                imagenContainer.innerHTML = '';
                imagenContainer.appendChild(imgElement);
            })
            .catch(error => {
                console.error('Hubo un error al obtener la imagen:', error);
            });
    }
});