ocultarFormEditar();

//Leer Documentos de la base de datos
  var tablaHab = document.getElementById('tablahabitaciones');
  db.collection("habitaciones").onSnapshot((querySnapshot) => {
    tablaHab.innerHTML = '';
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        tablaHab.innerHTML += `
        <tr>
          
          <td>${doc.data().idecolab}</td>
          <td>${doc.data().fecha}</td>
          <td>${doc.data().hora}</td>

          <td>${doc.data().puertaELBE}</td> 
          <td>${doc.data().puertaEChapaLBE}</td> 
          <td>${doc.data().puertaESeguroF}</td> 
          <td>${doc.data().puertaEMirillaLBE}</td> 
          <td>${doc.data().puertaECadena}</td>
          <td>${doc.data().puertaETopePBC}</td>
          <td>${doc.data().puertaEPlano}</td>
          <td>${doc.data().puertaECandado}</td> 
          <td>${doc.data().puertaEBisagras}</td> 
          <td>${doc.data().puertaENumeroLBE}</td> 
          <td>${doc.data().puertaEOtros}</td>
          <td>${doc.data().puertaEObserv}</td>

          <td>${doc.data().mobiliarioCestoBLBE}</td> 
          <td>${doc.data().mobiliarioEscritorLBE}</td> 
          <td>${doc.data().mobiliarioEspejoL}</td> 
          <td>${doc.data().mobiliarioCajaSA}</td>  
          <td>${doc.data().mobiliarioMueble}</td> 
          <td>${doc.data().mobiliarioTVCRBE}</td> 
          <td>${doc.data().mobiliarioImagen}</td> 
          <td>${doc.data().mobiliarioCodigoC}</td> 
          <td>${doc.data().mobiliarioCodigoR}</td> 
          <td>${doc.data().mobiliarioPortaEBE}</td>
          <td>${doc.data().mobiliarioBasesCBE}</td> 
          <td>${doc.data().mobiliarioCabeceraBE}</td> 
          <td>${doc.data().mobiliarioColchonesBE}</td> 
          <td>${doc.data().mobiliarioSillaEBE}</td> 
          <td>${doc.data().mobiliarioBuroLBE}</td>
          <td>${doc.data().mobiliarioVentana}</td> 
          <td>${doc.data().mobiliarioMosquitero}</td> 
          <td>${doc.data().mobiliarioOtros}</td>
          <td>${doc.data().mobiliarioObserv}</td>

          <td>${doc.data().ilumicacionLamparaE}</td> 
          <td>${doc.data().iluminacionLamparaC}</td>
          <td>${doc.data().iluminacionLamparaEV}</td> 
          <td>${doc.data().iluminacionAcrilico}</td> 
          <td>${doc.data().iluminacionFocos}</td> 
          <td>${doc.data().iluminacionAhorradosF}</td> 
          <td>${doc.data().iluminacionApagadoresF}</td> 
          <td>${doc.data().iluminacionOtros}</td>
          <td>${doc.data().iluminacionObserv}</td>

          <td>${doc.data().generalesPinturaG}</td> 
          <td>${doc.data().generalesClimaF}</td> 
          <td>${doc.data().generalesPiso}</td> 
          <td>${doc.data().generalesPlafon}</td> 
          <td>${doc.data().generalesTelefonoF}</td>
          <td>${doc.data().generalesRadioRF}</td>
          <td>${doc.data().generalesPlanchaFL}</td> 
          <td>${doc.data().generalesAntenaI}</td> 
          <td>${doc.data().generalesCafetera}</td> 
          <td>${doc.data().generalesSuministros}</td>
          <td>${doc.data().generalesSecadoraF}</td> 
          <td>${doc.data().generalesTablaPBE}</td> 
          <td>${doc.data().generalesDetectorHF}</td> 
          <td>${doc.data().generalesOtros}</td>
          <td>${doc.data().generalesObser}</td>

          <td>${doc.data().ropaSabanasL}</td> 
          <td>${doc.data().ropaFundasL}</td> 
          <td>${doc.data().ropaCubreC}</td> 
          <td>${doc.data().ropaAlmohadas}</td> 
          <td>${doc.data().ropaPersianasLF}</td>
          <td>${doc.data().ropaInsertoD}</td>
          <td>${doc.data().ropaFundaD}</td>
          <td>${doc.data().ropaToallasB}</td> 
          <td>${doc.data().ropaToallasF}</td> 
          <td>${doc.data().ropaToallasM}</td> 
          <td>${doc.data().ropaTapeteT}</td> 
          <td>${doc.data().ropaOtros}</td>
          <td>${doc.data().ropaObserv}</td>

          <td>${doc.data().vanityClosetLBE}</td> 
          <td>${doc.data().vanityGanchosC}</td>
          <td>${doc.data().vanityEntrepanosL}</td> 
          <td>${doc.data().vanityLavadoL}</td>
          <td>${doc.data().vanityLlaves}</td> 
          <td>${doc.data().vanityMezcladoraL}</td> 
          <td>${doc.data().vanityShampoo}</td> 
          <td>${doc.data().vanityCrema}</td> 
          <td>${doc.data().vanityEnjuague}</td> 
          <td>${doc.data().vanityJabonC}</td> 
          <td>${doc.data().vanityJabonE}</td>
          <td>${doc.data().vanityDestapador}</td> 
          <td>${doc.data().vanityToalleroL}</td>
          <td>${doc.data().vanityBotellasA}</td> 
          <td>${doc.data().vanityEspejoLBE}</td>
          <td>${doc.data().vanityKleeneraL}</td> 
          <td>${doc.data().vanityOtros}</td>
          <td>${doc.data().vanityObserv}</td>

          <td>${doc.data().banoPuertaLBE}</td> 
          <td>${doc.data().banoChapaL}</td> 
          <td>${doc.data().banoTopeBC}</td> 
          <td>${doc.data().banoAreaRL}</td> 
          <td>${doc.data().banoCortina}</td> 
          <td>${doc.data().banoCancel}</td> 
          <td>${doc.data().banoMonomandoLBE}</td> 
          <td>${doc.data().banoLlave}</td>  
          <td>${doc.data().banoCestoBLBE}</td> 
          <td>${doc.data().banoWC}</td>
          <td>${doc.data().banoEstractor}</td> 
          <td>${doc.data().banoOtros}</td>
          <td>${doc.data().banoObserv}</td>

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
  db.collection("habitaciones").doc(id).delete().then(function() {
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
        var washingtonRef = db.collection("habitaciones").doc(id);

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