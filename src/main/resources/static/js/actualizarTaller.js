document.addEventListener("DOMContentLoaded", function(event) {
    datos();
});

async function datos()
{
    const param = window.location.search;
    const urlParams = new URLSearchParams(param);
    var id = urlParams.get("id");
    if(id == null)
    {
        location.href = "../index.html";
    }

    const request = await fetch(`../workshop/${id}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    });
    const taller = await request.json();
    document.getElementById('txtId').value = taller.id;
    document.getElementById('txtTitle').value = taller.title;
    document.getElementById('txtDescription').value = taller.description;
    document.getElementById('txtMaterial').value = taller.material;
    if(taller.location = 'Tarima')
    {
        document.getElementById('opcLocation').value = 1;
    }
    else
    {
        document.getElementById('opcLocation').value = 0;
    }
    document.getElementById('executionDate').value = taller.executionDate;
    date = taller.createdDate;
    date2 = date.split('.');
    document.getElementById('createdDate').value = date2[0];

    document.getElementById("txtExecuted").value = taller.executed;
    console.log(taller);
}

async function modificarTaller()
{
    let datos = {};
    datos.id = document.getElementById('txtId').value;
    datos.title = document.getElementById('txtTitle').value;
    datos.description = document.getElementById('txtDescription').value;
    datos.material = document.getElementById('txtMaterial').value;
    datos.location = document.getElementById('opcLocation').value;
    datos.executionDate = document.getElementById('executionDate').value;
    datos.createdDate = document.getElementById('createdDate').value;
    datos.executed = document.getElementById("txtExecuted").value;

    if(datos.id == null)
        return;


    //console.log(datos);
    //espera a la petición url por el get y indica que es contenido de tipo json
    const request = await fetch(`../workshop/${datos.id}`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(datos),
    }).then(function (response) {   
        console.log(response.ok);
        alert('Taller modificado exitosamente');
        location.href = '../index.html';
    });
    location.href = '../index.html';
}