ocultarFormEditar();

//Leer Documentos de la base de datos
  var tablaAreas = document.getElementById('tablaareas');
  db.collection("areas").orderBy("fecha", "desc").onSnapshot((querySnapshot) => {
    tablaAreas.innerHTML = '';
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        tablaAreas.innerHTML += `
        <tr>

          <td>${doc.data().idecolab}</td>
          <td>${doc.data().fecha}</td>
          <td>${doc.data().hora}</td>

          <td>${doc.data().entradaMLMLLI}</td>
          <td>${doc.data().entradaMLALME}</td> 
          <td>${doc.data().entradaMLALETE}</td> 
          <td>${doc.data().entradaMLAMLLO}</td> 
          <td>${doc.data().entradaMLB}</td> 
          <td>${doc.data().entradaMLOtros}</td>
          <td>${doc.data().entradaMLObserv}</td>

          <td>${doc.data().areaREPLI}</td> 
          <td>${doc.data().areaRPRUG}</td> 
          <td>${doc.data().areaRPCE}</td> 
          <td>${doc.data().areaRCBBL}</td> 
          <td>${doc.data().areaRMAEE}</td> 
          <td>${doc.data().areaRAEF}</td> 
          <td>${doc.data().areaRTVE}</td> 
          <td>${doc.data().areaRBO}</td> 
          <td>${doc.data().areaRCPHE}</td> 
          <td>${doc.data().areaRPL}</td>
          <td>${doc.data().areaRCN}</td>
          <td>${doc.data().areaROtros}</td>
          <td>${doc.data().areaRObserv}</td>

          <td>${doc.data().albercaAIL}</td> 
          <td>${doc.data().albercaTEF}</td>
          <td>${doc.data().albercaTAA}</td>
          <td>${doc.data().albercaESL}</td> 
          <td>${doc.data().albercaPAR}</td>  
          <td>${doc.data().albercaPZP}</td>
          <td>${doc.data().albercaM}</td> 
          <td>${doc.data().albercaOtros}</td>
          <td>${doc.data().albercaObserv}</td>

          <td>${doc.data().gimnasioPAA}</td> 
          <td>${doc.data().gimnasioG}</td>
          <td>${doc.data().gimnasioE}</td>
          <td>${doc.data().gimnasioTVF}</td>
          <td>${doc.data().gimnasioCTVL}</td>
          <td>${doc.data().gimnasioS}</td> 
          <td>${doc.data().gimnasioAS}</td>
          <td>${doc.data().gimnasioOtros}</td>
          <td>${doc.data().gimnasioObser}</td>

          <td>${doc.data().recorridoHPSA}</td>
          <td>${doc.data().recorridoHPA}</td>
          <td>${doc.data().recorridoHPAE}</td>
          <td>${doc.data().recorridoHRHE}</td>
          <td>${doc.data().recorridoHMV}</td> 
          <td>${doc.data().recorridoHMHF}</td> 
          <td>${doc.data().recorridoHSELO}</td>
          <td>${doc.data().recorridoHLP2}</td>
          <td>${doc.data().recorridoHLP3}</td>
          <td>${doc.data().recorridoHLP4}</td>
          <td>${doc.data().recorridoHSE}</td>
          <td>${doc.data().recorridoHSESE}</td> 
          <td>${doc.data().recorridoHIEEH}</td> 
          <td>${doc.data().recorridoHCL}</td> 
          <td>${doc.data().recorridoHCLS}</td> 
          <td>${doc.data().recorridoHOtros}</td>
          <td>${doc.data().recorridoHObserv}</td>

          <td>${doc.data().alimentosSASD}</td>
          <td>${doc.data().alimentosSASJ}</td> 
          <td>${doc.data().alimentosSASC}</td> 
          <td>${doc.data().alimentosSASM}</td> 
          <td>${doc.data().alimentosSASG}</td> 
          <td>${doc.data().alimentosSASE}</td> 
          <td>${doc.data().alimentosSAB}</td>
          <td>${doc.data().alimentosSAM}</td>
          <td>${doc.data().alimentosSALM}</td>  
          <td>${doc.data().alimentosSABL}</td>  
          <td>${doc.data().alimentosSAM}</td> 
          <td>${doc.data().alimentosSARL}</td> 
          <td>${doc.data().alimentosSAR}</td> 
          <td>${doc.data().alimentosSACD}</td> 
          <td>${doc.data().alimentosSAC}</td>
          <td>${doc.data().alimentosSOtros}</td>
          <td>${doc.data().alimentosSObserv}</td>

          <td>${doc.data().canchasCCT}</td> 
          <td>${doc.data().canchasCCF}</td> 
          <td>${doc.data().canchasCCB}</td> 
          <td>${doc.data().canchasCB}</td> 
          <td>${doc.data().canchasCP}</td>
          <td>${doc.data().canchasSOtros}</td>
          <td>${doc.data().canchasSObserv}</td>

          <td>${doc.data().mantenimientoNivelC1}</td> 
          <td>${doc.data().mantenimientoNivelC2}</td>
          <td>${doc.data().mantenimientoNivelC3}</td>
          <td>${doc.data().mantenimientoNivelC4}</td>
          <td>${doc.data().mantenimientoObserv}</td>

          <td>${doc.data().areasASAS}</td> 
          <td>${doc.data().areasASOBAC}</td> 
          <td>${doc.data().areasAASBL}</td>
          <td>${doc.data().areasASC}</td> 
          <td>${doc.data().areasASEPMC}</td> 
          <td>${doc.data().areasASPTHC}</td> 
          <td>${doc.data().areasSOtros}</td>
          <td>${doc.data().areasSObserv}</td>

          <td>${doc.data().estacionamientoI}</td> 
          <td>${doc.data().estacionamientoL}</td>
          <td>${doc.data().estacionamientoPO}</td>
          <td>${doc.data().estacionamientoOtros}</td>
          <td>${doc.data().estacionamientoObserv}</td>

          <td>${doc.data().ocupacionHOMLMFO}</td>
          <td>${doc.data().ocupacionHOMLMFOi}</td>
          <td>${doc.data().ocupacionFO}</td>
          <td>${doc.data().ocupacionFOi}</td>
          <td>${doc.data().ocupacionPL}</td>
          <td>${doc.data().ocupacionPLi}</td>
          <td>${doc.data().ocupacionObserv}</td>

          <td>${doc.data().ocupacionHOMLMRA}</td>
          <td>${doc.data().ocupacionHOMLMRAi}</td>
          <td>${doc.data().ocupacionRAO}</td>
          <td>${doc.data().ocupacionORAOi}</td>
          <td>${doc.data().ocupacionPL2}</td>
          <td>${doc.data().ocupacionPLi}</td>
          <td>${doc.data().ocupacionObserv2}</td>
      
          <td>${doc.data().sArea}</td>
          <td>${doc.data().sIDC}</td>
          <td>${doc.data().sFecha}</td>
          <td>${doc.data().sStatus}</td>

          <td><button class="btn btn-danger" onclick="eliminar('${doc.id}')">Eliminar</button></td>
          <td><button class="btn btn-info" onclick="editar('${doc.id}','${doc.data().sArea}','${doc.data().sIDC}','${doc.data().sFecha}','${doc.data().sStatus}')">Status</button></td>
        </tr>
        ` 
    });
});

//Borrar Documentos
function eliminar(id){
  db.collection("areas").doc(id).delete().then(function() {
    console.log("Document successfully deleted!");
}).catch(function(error) {
    console.error("Error removing document: ", error);
});
}

//Editar documentos
function editar(id,sArea,sIDC,sFecha,sStatus){
  mostrarFormEditar();
    document.getElementById('sArea').value = sArea;
    document.getElementById('sIDC').value = sIDC;
    document.getElementById('sFecha').value = sFecha;
    document.getElementById('sStatus').value = sStatus;
    var boton = document.getElementById('boton');
    boton.innerHTML = 'Añadir status';

    boton.onclick = function(){
        var washingtonRef = db.collection("areas").doc(id);

        var vArea = document.getElementById('sArea').value;
        var vIDC = document.getElementById('sIDC').value;
        var vFecha = document.getElementById('sFecha').value;
        var vStatus = document.getElementById('sStatus').value;

        return washingtonRef.update({
            sArea: vArea,
            sIDC: vIDC,
            sFecha: vFecha,
            sStatus: vStatus
        })
        .then(function() {
            console.log("Document successfully updated!");
            boton.innerHTML = '...';
            document.getElementById('sArea').value = '';
            document.getElementById('sIDC').value = '';
            document.getElementById('sFecha').value = '';
            document.getElementById('sStatus').value = '';
            ocultarFormEditar();
        })
        .catch(function(error) {
            // The document probably doesn't exist.
            console.error("Error updating document: ", error);
        });
    }
}

function ocultarFormEditar() {
  document.getElementById('mostrarocultar').style.display="none";
}

function mostrarFormEditar() {
  document.getElementById('mostrarocultar').style.display="block";
}