document.addEventListener("DOMContentLoaded", function(event) {
    let param = window.location.href;
    console.log(param);
    if(param.endsWith("1") || param.endsWith("?"))
    {
        location.href = "../refuerzos.html";
    }
    
});

async function crearRefuerzo()
{
    let datos = {};
    datos.full_name = document.getElementById('txtName').value;
    datos.nid = document.getElementById('txtNid').value;
    datos.number = document.getElementById('txtContact').value;
    datos.course = document.getElementById('opcCourse').value;
    datos.subject = document.getElementById('opcSubject').value;
    datos.executionDate = document.getElementById('executionDate').value;
    especial = document.getElementById('check').checked;
    disc = document.getElementById('chkDisc').checked;
    uni = document.getElementById('chkUni').checked;
    intern = document.getElementById('chkIntern').checked;
    additional = document.getElementById('txtAdditionalData').value;
    datos.additional_data = `${especial};${disc};${uni};${intern};${additional}`;

    if(datos.full_name == "" || datos.nid== "" || datos.executionDate == "")
    {
        alert('Debe llenar todos los campos');
        return;
    }

    //espera a la petición url por el get y indica que es contenido de tipo json
    const request = await fetch('../tutoring', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(datos),
    }).then(function (response) {   
        //console.log(response.ok);
        alert('Refuerzo planificado exitosamente');
        window.location.href = '../refuerzos.html';
    });
    window.location.href = '../refuerzos.html';
}

function showContent() {
    element = document.getElementById("content");
    check = document.getElementById("check");
    if (check.checked) {
        element.style.display='block';
    }
    else {
        element.style.display='none';
    }
}