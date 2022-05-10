//Agregar documentos a la base de datos
function guardarchecklistHab(){
  //Se declaran las variables, 
  //ejemplo: var variable = document.getElementById('id del input del checklisthabitaciones.html').value;
    var idc = document.getElementById('idecolab').value;
    var fecha = document.getElementById('fechainput').value;
    var hora = document.getElementById('horainput').value;
  //Puerta de entrada
    var peLimpiaBE = document.getElementById('checkLimpiaBE').checked;
    var peChapaLimpiaBE = document.getElementById('checkpeChapaLimpiaBE').checked; 
    var peSeguroF = document.getElementById('checkpeSeguroF').checked;  
    var peMirillaLBE = document.getElementById('checkpeMirillaLBE').checked; 
    var peCadena = document.getElementById('checkpeCadena').checked; 
    var peTopePBC = document.getElementById('checkpeTopePBC').checked; 
    var pePlano = document.getElementById('checkpePlano').checked;  
    var peCandado = document.getElementById('checkpeCandado').checked;  
    var peBisagras = document.getElementById('checkpeBisagras').checked; 
    var peNumeroLBE = document.getElementById('checkpeNumeroLBE').checked;
    var peOtros = document.getElementById('checkpeOtros').checked;
    var peObserv = document.getElementById('peObservinput').value;
  //Mobiliario
    var moCestoBLBE = document.getElementById('checkmoCestoBLBE').checked; 
    var moEscritorLBE = document.getElementById('checkmoEscritorLBE').checked; 
    var moEspejoL = document.getElementById('checkmoEspejoL').checked; 
    var moCajaSA = document.getElementById('checkmoCajaSA').checked; 
    var moMueble = document.getElementById('checkmoMueble').checked; 
    var moTVCRBE = document.getElementById('checkmoTVCRBE').checked;  
    var moImagen = document.getElementById('checkmoImagen').checked; 
    var moPortaEBE = document.getElementById('checkmoPortaEBE').checked; 
    var moCodigoC = document.getElementById('checkmoCodigoC').checked; 
    var moCodigoR = document.getElementById('checkmoCodigoR').checked; 
    var moPortaEBE = document.getElementById('checkmoPortaEBE').checked;
    var moBasesCBE = document.getElementById('checkmoBasesCBE').checked; 
    var moCabeceraBE =document.getElementById('checkmoCabeceraBE').checked;
    var moColchonesBE = document.getElementById('checkmoColchonesBE').checked; 
    var moSillaEBE = document.getElementById('checkmoSillaEBE').checked; 
    var moBuroLBE = document.getElementById('checkmoBuroLBE').checked; 
    var moVentana = document.getElementById('checkmoVentana').checked; 
    var moMosquitero = document.getElementById('checkmoMosquitero').checked; 
    var moOtros = document.getElementById('checkmoOtros').checked;
    var moObserv = document.getElementById('checkmoObserv').value;
  //Iluminación
    var ilLamparaE = document.getElementById('checkilLamparaE').checked; 
    var ilLamparaC = document.getElementById('checkilLamparaC').checked;
    var ilLamparaEV = document.getElementById('checkilLamparaEV').checked; 
    var ilAcrilico = document.getElementById('checkilAcrilico').checked;
    var ilFocos = document.getElementById('checkilFocos').checked;
    var ilAhorsradosF = document.getElementById('checkilAhorradorF').checked;
    var ilApagadoresF = document.getElementById('checkilApagadoresF').checked;
    var ilOtros = document.getElementById('checkilOtros').checked;
    var ilObserv = document.getElementById('ilObservinput').value;
  //Generales
    var vaPinturaG = document.getElementById('checkvaPinturaG').checked; 
    var vaClimaF = document.getElementById('checkvaClimaF').checked; 
    var vaPisoL = document.getElementById('checkvaPiso').checked;   
    var vaPlafon = document.getElementById('checkvaPlafon').checked;  
    var vaTelefonoF = document.getElementById('checkvaTelefonoF').checked;  
    var vaRadioRF = document.getElementById('checkvaRadioRF').checked; 
    var vaPlanchaFL = document.getElementById('checkvaPlanchaFL').checked; 
    var vaAntenaI = document.getElementById('checkvaAntenaI').checked; 
    var vaCafetera = document.getElementById('checkvaCafetera').checked;
    var vaSuministros = document.getElementById('checkvaSuministros').checked;
    var vaSecadoraF = document.getElementById('checkvaSecadoraF').checked;
    var vaTablaPBE = document.getElementById('checkvaTablaPBE').checked; 
    var vaDetectorHF = document.getElementById('checkvaDetectorHF').checked; 
    var vaOtros = document.getElementById('checkvaOtros').checked;
    var vaObserv = document.getElementById('vaObserinput').value;
  //Ropa de cama y baño
    var blSabanasL = document.getElementById('checkblSabanasL').checked; 
    var blFundasL = document.getElementById('checkblFundasL').checked; 
    var blCubreC = document.getElementById('checkblCubreC').checked; 
    var blAlmohadas = document.getElementById('checkblAlmohadas').checked; 
    var blPersianasLF = document.getElementById('checkvblPersianasLF').checked; 
    var blInsertoD = document.getElementById('checkblInsertoD').checked; 
    var blFundaD = document.getElementById('checkblFundaD').checked; 
    var blToallasB = document.getElementById('checkblToallasB').checked;  
    var blToallasF = document.getElementById('checkblToallasF').checked; 
    var blToallasM = document.getElementById('checkblToallasM').checked; 
    var blTapeteT = document.getElementById('checkblTapeteT').checked; 
    var blOtros = document.getElementById('checkblOtros').checked;
    var blObserv = document.getElementById('blObservinput').value;
  //Vanity
    var vanClosetLBE = document.getElementById('checkvanClosetLBE').checked;
    var vanGanchosC = document.getElementById('checkvanGanchosC').checked; 
    var vanEntrepanosL = document.getElementById('checkvanEntrepanosL').checked;
    var vanLavadoL = document.getElementById('checkvanLavadoL').checked; 
    var vanLlaves = document.getElementById('checkvanLlaves').checked; 
    var vanMezcladoraL = document.getElementById('checkvanMezcladoraL').checked; 
    var vanShampoo = document.getElementById('checkvanShampoo').checked; 
    var vanCrema = document.getElementById('checkvanCrema').checked;
    var vanEnjuague = document.getElementById('checkvanEnjuague').checked;
    var vanJabonC = document.getElementById('checkvanJabonC').checked;
    var vanJabonE = document.getElementById('checkvanJabonE').checked;
    var vanDestapador = document.getElementById('checkvanDestapador').checked; 
    var vanToalleroL = document.getElementById('checkvanToalleroL').checked; 
    var vanBotellasA = document.getElementById('checkvanBotellasA').checked; 
    var vanEspejoLBE = document.getElementById('checkvanEspejoLBE').checked; 
    var vanKleeneraL = document.getElementById('checkvanKleeneraL').checked; 
    var vanOtros = document.getElementById('checkvanOtros').checked;
    var vanObserv = document.getElementById('vanObserinput').value;
  //Baño
    var bPuertaLBE = document.getElementById('checkbPuertaLBE').checked; 
    var bChapaL = document.getElementById('checkbChapaL').checked; 
    var bTopeBC = document.getElementById('checkbTopeBC').checked; 
    var bAreaRL = document.getElementById('checkbAreaRL').checked; 
    var bCortina = document.getElementById('checkbCortina').checked; 
    var bCancel = document.getElementById('checkbCancel').checked; 
    var bMonomandoLBE = document.getElementById('checkbMonomandoLBE').checked; 
    var bLlaves = document.getElementById('checkbLlaves').checked;  
    var bCestoBLBE = document.getElementById('checkbCestoBLBE').checked; 
    var bWC = document.getElementById('checkbWC').checked; 
    var bExtractor = document.getElementById('checkbExtractor').checked; 
    var bOtros = document.getElementById('checkbOtros').checked;
    var bObserv = document.getElementById('bObservinput').value; 

    //Agrega el documento con los campos y las variables dereferencia, 
    //ejemplo: nombre: variable / nombrecompleto es el campo de la base de datos y nombrec es la variable
    db.collection("habitaciones").add({
      idecolab: idc,
      fecha: fecha,
      hora: hora,
    //Puerta de entrada
      puertaELBE: peLimpiaBE,  
      puertaEChapaLBE: peChapaLimpiaBE,
      puertaESeguroF: peSeguroF, 
      puertaEMirillaLBE: peMirillaLBE,
      puertaECadena: peCadena, 
      puertaETopePBC: peTopePBC,
      puertaEPlano: pePlano, 
      puertaECandado: peCandado,  
      puertaEBisagras: peBisagras, 
      puertaENumeroLBE: peNumeroLBE,
      puertaEOtros: peOtros,
      puertaEObserv: peObserv,   
    //Mobiliario
      mobiliarioCestoBLBE: moCestoBLBE,
      mobiliarioEscritorLBE: moEscritorLBE,
      mobiliarioEspejoL: moEspejoL,
      mobiliarioCajaSA: moCajaSA,
      mobiliarioMueble: moMueble,  
      mobiliarioTVCRBE: moTVCRBE,
      mobiliarioImagen: moImagen,
      mobiliarioCodigoC: moCodigoC, 
      mobiliarioCodigoR: moCodigoR,
      mobiliarioPortaEBE: moPortaEBE,
      mobiliarioBasesCBE: moBasesCBE, 
      mobiliarioCabeceraBE: moCabeceraBE,
      mobiliarioColchonesBE: moColchonesBE,
      mobiliarioSillaEBE: moSillaEBE,
      mobiliarioBuroLBE: moBuroLBE,
      mobiliarioVentana: moVentana,
      mobiliarioMosquitero: moMosquitero,
      mobiliarioOtros: moOtros,
      mobiliarioObserv: moObserv,
    //Iluminación
      ilumicacionLamparaE: ilLamparaE,
      iluminacionLamparaC: ilLamparaC,
      iluminacionLamparaEV: ilLamparaEV,
      iluminacionAcrilico: ilAcrilico,
      iluminacionFocos: ilFocos,
      iluminacionAhorradosF: ilAhorsradosF,
      iluminacionApagadoresF: ilApagadoresF,
      iluminacionOtros: ilOtros,
      iluminacionObserv: ilObserv,
    //Generales
      generalesPinturaG: vaPinturaG,
      generalesClimaF: vaClimaF,
      generalesPiso: vaPisoL,
      generalesPlafon: vaPlafon,
      generalesTelefonoF: vaTelefonoF,
      generalesRadioRF: vaRadioRF,
      generalesPlanchaFL: vaPlanchaFL,
      generalesAntenaI: vaAntenaI,
      generalesCafetera: vaCafetera,
      generalesSuministros: vaSuministros,
      generalesSecadoraF: vaSecadoraF,
      generalesTablaPBE: vaTablaPBE,
      generalesDetectorHF: vaDetectorHF,
      generalesOtros: vaOtros,
      generalesObser: vaObserv, 
    //Ropa de cama y baño
      ropaSabanasL: blSabanasL,
      ropaFundasL: blFundasL,
      ropaCubreC: blCubreC,
      ropaAlmohadas: blAlmohadas,
      ropaPersianasLF: blPersianasLF,
      ropaInsertoD: blInsertoD,
      ropaFundaD: blFundaD,
      ropaToallasB: blToallasB,
      ropaToallasF: blToallasF,
      ropaToallasM: blToallasM,
      ropaTapeteT: blTapeteT,
      ropaOtros: blOtros,
      ropaObserv: blObserv,
    //Vanity
      vanityClosetLBE: vanClosetLBE,
      vanityGanchosC: vanGanchosC,
      vanityEntrepanosL: vanEntrepanosL,
      vanityLavadoL: vanLavadoL,
      vanityLlaves: vanLlaves,
      vanityMezcladoraL: vanMezcladoraL,
      vanityShampoo: vanShampoo,   
      vanityCrema: vanCrema,
      vanityEnjuague: vanEnjuague,
      vanityJabonC: vanJabonC,  
      vanityJabonE: vanJabonE, 
      vanityDestapador: vanDestapador,
      vanityToalleroL: vanToalleroL,
      vanityBotellasA: vanBotellasA, 
      vanityEspejoLBE: vanEspejoLBE,
      vanityKleeneraL: vanKleeneraL,
      vanityOtros: vanOtros,
      vanityObserv: vanObserv,
    //Baño
      banoPuertaLBE: bPuertaLBE,
      banoChapaL: bChapaL,
      banoTopeBC: bTopeBC,
      banoAreaRL: bAreaRL,
      banoCortina: bCortina, 
      banoCancel: bCancel,
      banoMonomandoLBE: bMonomandoLBE,
      banoLlave: bLlaves,
      banoCestoBLBE: bCestoBLBE,
      banoWC: bWC,
      banoEstractor: bExtractor,
      banoOtros: bOtros,
      banoObserv: bObserv,

    //Resolución de observaciones
      sArea: "",
      sIDC: "",
      sFecha: "",
      sStatus: ""

    })
    .then(function(docRef) {

      ocultarbtnEnviar();

      console.log("Document written with ID: ", docRef.id);
      document.getElementById('enviado').innerHTML=
    `<p>¡Checklist enviado correctamente!
    <button type="button" class="btn btn-outline-info" id="btnRecargar" onclick="location.reload()">Nuevo Checklist</button>
    `;

    })
    .catch(function(error) {
      console.error("Error adding document: ", error);
    });

    function ocultarbtnEnviar() {
      document.getElementById('btnEnviar').style.display="none";
    }
}


  