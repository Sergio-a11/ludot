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
    let date2 = 'Fecha: '+ date.getFullYear()+ '/' + (date.getMonth()+1) + '/' + date.getDate() + ' - Hora: ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
    let txt = `<p class="fs-2">${taller.title}</p>
    <p class="fs-4">${taller.description}</p>
    <p class="fs-3">${taller.material}</p>
    <p><span class="badge bg-primary">${date2}</span>  <span class="badge bg-danger">${taller.location}</span></p>
    <a href="../actualizarTaller.html?id=${taller.id}"><button class="btn btn-secondary" type="button">Modificar</button></a>
    <button class="btn btn-secondary" type="button" onclick="eliminarTaller(${taller.id})">Eliminar</button>
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