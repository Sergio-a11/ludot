document.addEventListener("DOMContentLoaded", function(event) {
    verTaller();
});

async function verTaller()
{
    //se obtiene el id de la url
    const param = window.location.search;
    const urlParams = new URLSearchParams(param);
    var id = urlParams.get("id");
    
    const request = await fetch(`../workshop/${id}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    });
    const taller = await request.json();
    let date = new Date(taller.executionDate);
    let date2 = ' Año '+ date.getFullYear()+ ' Mes: ' + (date.getMonth()+1) + ' Día: ' + date.getDate() + ' - Hora: ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
    let txt = `
    <div class="card text-center">
        <h3 class="card-header">
            ${taller.title}
        </h3>
        <div class="card-body">
            <h5 class="card-title">${taller.description}</h5>
            <p class="card-text">Material: ${taller.material}</p>
            <p>Fecha: <span class="badge bg-primary">${date2}</span>  Ubicación: <span class="badge bg-danger">Sede ${taller.location}</span></p>
        </div>
        <div class="card-footer text-muted">
        <a href="../actualizarTaller.html?id=${taller.id}"><button class="btn btn-secondary" type="button">Modificar</button></a>
        <button class="btn btn-secondary" type="button" onclick="eliminarTaller(${taller.id})">Eliminar</button>
        <a href="../index.html"><button class="btn btn-secondary" type="button">Inicio</button></a>
        </div>
    </div>
    `;
    document.querySelector("#txt").outerHTML = txt;
}

async function eliminarTaller(id)
{
    if(!confirm('¿Desea eliminar este taller?'))
    {
        return;
    }
    const request = await fetch(`../workshop/${id}`, {
    method: 'DELETE',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    });

    location.href = "../index.html";
}