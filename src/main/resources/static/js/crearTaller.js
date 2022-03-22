// Call the dataTables jQuery plugin
function docReady(fn) {
    // see if DOM is already available
    if (document.readyState === "complete" || document.readyState === "interactive") {
        // call on next available tick
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}
  
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
          body: JSON.stringify(datos)
      });
      alert("Taller registrado exitosamente");
      window.location.href = 'index.html';
  }