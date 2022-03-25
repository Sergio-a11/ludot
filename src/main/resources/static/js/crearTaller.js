 
async function crearTaller()
{
    let datos = {};
    datos.title = document.getElementById('txtTitle').value;
    datos.description = document.getElementById('txtDescription').value;
    datos.material = document.getElementById('txtMaterial').value;
    datos.location = document.getElementById('opcLocation').value;
    datos.executionDate = document.getElementById('executionDate').value;

    if(datos.title == "" || datos.executionDate== "" || datos.description == "")
    {
        alert('Debe llenar todos los campos');
        return;
    }

    //espera a la petición url por el get y indica que es contenido de tipo json
    const request = await fetch('workshop', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(datos),
    }).then(function (response) {   
        console.log(response.ok);
        alert('Taller registrado exitosamente');
        location.href = '../index.html';
    });
    window.location.href = '../index.html';
}
