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
        location.href = "../refuerzos.html";
    }

    const request = await fetch(`../tutoring/${id}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    });
    const refuerzo = await request.json();
    document.getElementById('txtId').value = refuerzo.id;
    document.getElementById('txtName').value = refuerzo.full_name;
    document.getElementById('txtNid').value = refuerzo.nid;
    document.getElementById('txtContact').value = refuerzo.number;
    
    document.getElementById('executionDate').value = refuerzo.executionDate;
    let especial = refuerzo.additional_data;
    let data = especial.split(";");
    document.getElementById('check').checked
    if(data[0] == "true")
    {
        document.getElementById('check').checked = true;
        showContent();
        if(data[1] == "true")
            document.getElementById('chkDisc').checked = true;
        if(data[2] == "true")
            document.getElementById('chkUni').checked = data[2];
        if(data[3] == "true")
            document.getElementById('chkIntern').checked = data[3];
        document.getElementById('txtAdditionalData').value = data[4];
    }
    

    //course

    if(refuerzo.course == 'TRANSICICION')
    {
        document.getElementById('opcCourse').value = 0;
    }
    else if(refuerzo.course == 'PRIMERO')
    {
        document.getElementById('opcCourse').value = 1;
    }
    else if(refuerzo.course == 'SEGUNDO')
    {
        document.getElementById('opcCourse').value = 2;
    }
    else if(refuerzo.course == 'TERCERO')
    {
        document.getElementById('opcCourse').value = 3;
    }
    else if(refuerzo.course == 'CUARTO')
    {
        document.getElementById('opcCourse').value = 4;
    }
    else if(refuerzo.course == 'QUINTO')
    {
        document.getElementById('opcCourse').value = 5;
    }
    else if(refuerzo.course == 'SEXTO')
    {
        document.getElementById('opcCourse').value = 6;
    }
    else if(refuerzo.course == 'SEPTIMO')
    {
        document.getElementById('opcCourse').value = 7;
    }
    else if(refuerzo.course == 'OCTAVO')
    {
        document.getElementById('opcCourse').value = 8;
    }
    else if(refuerzo.course == 'NOVENO')
    {
        document.getElementById('opcCourse').value = 9;
    }
    else if(refuerzo.course == 'DECIMO')
    {
        document.getElementById('opcCourse').value = 10;
    }
    else if(refuerzo.course == 'ONCE')
    {
        document.getElementById('opcCourse').value = 11;
    }
    else if(refuerzo.course == 'DOCE')
    {
        document.getElementById('opcCourse').value = 12;
    }
    else
    {
        document.getElementById('opcCourse').value = 13;
    }

    //subject

    if(refuerzo.subject == 'GENERAL')
    {
        document.getElementById('opcSubject').value = 0;
    }
    else if(refuerzo.subject == 'ARTES')
    {
        document.getElementById('opcSubject').value = 1;
    }
    else if(refuerzo.subject == 'BIOLOGIA')
    {
        document.getElementById('opcSubject').value = 2;
    }
    else if(refuerzo.subject == 'EDUCACION_FISICA')
    {
        document.getElementById('opcSubject').value = 3;
    }
    else if(refuerzo.subject == 'ESPANOL')
    {
        document.getElementById('opcSubject').value = 4;
    }
    else if(refuerzo.subject == 'ETICA')
    {
        document.getElementById('opcSubject').value = 5;
    }
    else if(refuerzo.subject == 'FISICA')
    {
        document.getElementById('opcSubject').value = 6;
    }
    else if(refuerzo.subject == 'INFORMATICA')
    {
        document.getElementById('opcSubject').value = 7;
    }
    else if(refuerzo.subject == 'INGLES')
    {
        document.getElementById('opcSubject').value = 8;
    }
    else if(refuerzo.subject == 'MATEMATICAS')
    {
        document.getElementById('opcSubject').value = 9;
    }
    else if(refuerzo.subject == 'QUIMICA')
    {
        document.getElementById('opcSubject').value = 10;
    }
    else if(refuerzo.subject == 'RELIGION')
    {
        document.getElementById('opcSubject').value = 11;
    }
    else if(refuerzo.subject == 'SOCIALES')
    {
        document.getElementById('opcSubject').value = 12;
    }
    else
    {
        //TECNOLOGIA
        document.getElementById('opcSubject').value = 13;
    }

    console.log(refuerzo);
}

async function modificarRefuerzo()
{
    let datos = {};
    datos.id = document.getElementById('txtId').value;
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
    const request = await fetch(`../tutoring/${datos.id}`, {
        method: 'PUT',
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