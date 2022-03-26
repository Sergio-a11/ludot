/* Call the dataTables jQuery plugin
$(document).ready(function() {
    //cuando cargar la pagina se ejecuta la pagina
    cargarTalleres();
  $('#talleres').DataTable();//busca la tabla usaurios por el id y trae la info de columnas y eso
});*/

document.addEventListener("DOMContentLoaded", function(event) {
    cargarRefuerzos();
});

async function cargarRefuerzos()
{
    //espera a la petición url por el get y indica que es contenido de tipo json
    const request = await fetch('../tutoring', {
        method: 'GET',
        headers: getHeaders()
    });

    //Convierte la respueta a tipo JSON, espere la respuesta del request convertido en json
    const refuezos = await request.json();

    let cont = 0;
    let listadoRefuerzos = '';
    for(let r of refuezos)
    {
        
        let date = new Date(r.executionDate);
        let date2 = 'Año: '+ date.getFullYear()+ ' Mes: ' + (date.getMonth()+1) + ' Día: ' + date.getDate() + ' - Hora: ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
        let especial = r.additional_data;
        let data = especial.split(";");
        let esquema = ``;
        if(cont == 0)
        {
            esquema += `<div class="row mt-5 mb-5">`;
        }
        else if(cont % 2 == 0)
        {
            esquema += `<div class="row mt-5 mb-5">`;
        }
        esquema += `
        <div class="col-sm-6">
            <div class="card">
              <h5 class="card-header">${r.full_name} - ${r.nid}</h5>
              <div class="card-body">
                <h5 class="card-title">Refuerzo ${r.subject}</h5>
                <p class="card-text">Curso: ${r.course}</p>
                <p class="card-text">Materia: ${r.subject}</p>
                <p class="card-text">Fecha <span class="badge bg-danger">${date2}</span></p>
                <div class="dropdown">
                  <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                    Ver Opciones
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  <li><a href="actualizarRefuerzo.html?id=${r.id}"><button class="dropdown-item" type="button">Actualizar</button></a></li>
                  <li><button class="dropdown-item" type="button" onclick="eliminarRefuerzo(${r.id})">Eliminar</button></li>
                  </ul>
                </div>`;
        if(data[0] == "true")
        {
            esquema += `
                <div class="mt-3">
                    <span class="badge bg-warning text-dark">Clase Especial</span>
                    `;
                if(data[1] == "true")
                {
                    esquema += `<span class="badge bg-warning text-dark">Tiene Discapacidad</span>
                    `;
                }
                if(data[2] == "true")
                {
                    esquema += `<span class="badge bg-warning text-dark">Clase Universitaria</span>
                    `;
                }
                if(data[3] == "true")
                {
                    esquema += `<span class="badge bg-warning text-dark">Se requiere un pasante</span>
                    `;
                }
                esquema += `
                </div>
                <div class="mt-3">
                  <span class="badge bg-secondary text-light">Información de clase especial: ${data[4]}</span>
                </div>`;
              
        }
        esquema += `</div>
        <div class="card-footer text-muted">
          Celular: ${r.number}
        </div>
      </div>
    </div>`;
    if(cont == 1)
    {
            esquema += `</div>`;
    }
    else if(cont % 2 != 0)
    {
        esquema += `</div>`;
    }
    cont++;   
    listadoRefuerzos += esquema;

    }
    //Seleccionar un elemento HTML de la forma que se hace en css
    document.querySelector('#refuerzos').outerHTML = listadoRefuerzos;

    //console.log(talleres);
}

//le pasamos el token en las cabeceras
function getHeaders()
{
    return {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
           };
}

async function eliminarRefuerzo(id)
{
    if(!confirm('¿Desea eliminar este refuerzo?'))
    {
        return;
    }
    const request = await fetch(`../tutoring/${id}`, {
    method: 'DELETE',
    headers: getHeaders()
    });

    location.reload();
}