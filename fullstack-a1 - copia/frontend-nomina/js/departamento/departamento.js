import { Departamento } from "./componente.js";

const serDepartamento = new Departamento();
const d = document;
const $formDepartamento = d.getElementById("form-departamento");

d.addEventListener("DOMContentLoaded", ()=> {
  try {
    serDepartamento.obtenerDepartamentos()
    d.addEventListener("submit",async (e)=>{
      e.preventDefault();
      let $descrip = d.getElementById("descripcion").value;
      let $estado = d.getElementById("activo").checked;
     
      if (serDepartamento.grabar) {

        const departamento = {
          descripcion: $descrip,
          estado: $estado
        };
        const departamentoJson = JSON.stringify(departamento);
        await serDepartamento.insertarDatos(departamentoJson);
      } else {

        const departamento = {
          descripcion: $descrip,
          estado: $estado
        };
        const DepartamentoModJson = JSON.stringify(departamento);
        await serDepartamento.modificarDatos(DepartamentoModJson, serDepartamento.id);
      }
      $formDepartamento.reset();

    })
    
  } catch (e) {
    console.log(e);
  }

});



// // delegacion de eventos
// d.addEventListener("click", async (e) => {
//   console.log(e.target);
//   if (e.target.matches("#enviar")) {
//     //alert("has hecho click")
//     e.preventDefault();
//     let $descrip = d.getElementById("descripcion").value;
//     let $estado = d.getElementById("activo").checked;
//     if ($descrip.trim().length < 3) {
//       alert("Datos vacios o incompletos");
//     } else {
//       if (serDepartamento.grabar) {
        
//         const departamento = { descripcion: $descrip, estado: $estado };
//         const departamentoJson = JSON.stringify(departamento);
//         await serDepartamento.insertarDatos(departamentoJson);
//       } else {
        
//         const departamento = { descripcion: $descrip, estado: $estado };
//         const DepartamentoModJson = JSON.stringify(departamento);
//         await serDepartamento.modificarDatos(DepartamentoModJson, serDepartamento.id);
//       }
//       $formDepartamento.reset();
//     }
//   }
// });
