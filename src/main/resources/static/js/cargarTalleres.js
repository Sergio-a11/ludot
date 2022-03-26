/* Call the dataTables jQuery plugin
$(document).ready(function() {
    //cuando cargar la pagina se ejecuta la pagina
    cargarTalleres();
  $('#talleres').DataTable();//busca la tabla usaurios por el id y trae la info de columnas y eso
});*/

document.addEventListener("DOMContentLoaded", function(event) {
    cargarTalleres();
});

async function cargarTalleres()
{
    //espera a la petición url por el get y indica que es contenido de tipo json
    const request = await fetch('workshop', {
        method: 'GET',
        headers: getHeaders()
    });

    //Convierte la respueta a tipo JSON, espere la respuesta del request convertido en json
    const talleres = await request.json();


    let listadoTalleres = '';
    for(let t of talleres)
    {
        let date = new Date(t.executionDate);
        let date2 = 'Fecha: '+ date.getFullYear()+ '/' + (date.getMonth()+1) + '/' + date.getDate() + ' - Hora: ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
        let esquema = `
        <div class="btn-group">
            <a href="verTaller.html/?id=${t.id}" style="text-decoration: none;" class="text-light">
            <button class="btn btn-secondary btn-lg" type="button">
            ${t.title} - ${date2}
            <a href="verTaller.html/?id=${t.id}"><span class="badge rounded-pill bg-primary">Ver más</span></a>
            </button>
            </a>
            <button type="button" class="btn btn-lg btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
            <span class="visually-hidden">Toggle Dropdown</span>
            </button>
            <ul class="dropdown-menu">
                <li><a href="verTaller.html/?id=${t.id}"><button class="dropdown-item" type="button">Ver</button></a></li>
                <li><a href="actualizarTaller.html?id=${t.id}"><button class="dropdown-item" type="button">Actualizar</button></a></li>
                <li><button class="dropdown-item" type="button" onclick="eliminarTaller(${t.id})">Eliminar</button></li>
            </ul>
        </div>
        <hr class="dropdown-divider">`;
        listadoTalleres += esquema;
    }
    //Seleccionar un elemento HTML de la forma que se hace en css
    document.querySelector('#talleres').outerHTML = listadoTalleres;

    console.log(talleres);
}

//le pasamos el token en las cabeceras
function getHeaders()
{
    return {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
           };
}

async function eliminarTaller(id)
{
    if(!confirm('¿Desea eliminar este taller?'))
    {
        return;
    }
    const request = await fetch(`../workshop/${id}`, {
    method: 'DELETE',
    headers: getHeaders()
    });

    location.href = "../index.html";
}