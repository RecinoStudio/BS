// Función para obtener los datos del jugador desde el servidor
async function fetchPlayerData() { const playerTag = document.getElementById('playerTag').value; // Obtiene el 
    tag del jugador ingresado if (!playerTag) {
        alert('Por favor, ingresa un Tag válido.'); return;
    }
    try { const response = await fetch(`/players?tag=${playerTag}`); const data = await response.json();
        
        // Mostrar los datos en el HTML
        document.getElementById('name').innerText = `Nombre: ${data.name}`; 
        document.getElementById('trophies').innerText = `Trofeos: ${data.trophies}`;
    } catch (error) {
        console.error('Error al obtener datos del jugador:', error); alert('Hubo un error al obtener los datos. 
        Por favor, inténtalo de nuevo.');
    }
}
