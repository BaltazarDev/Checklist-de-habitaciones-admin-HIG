//Agregar documentos a la base de datos
function guardarchecklistAreas(){
  //Se declaran las variables, 
  //ejemplo: var variable = document.getElementById('id del input del checklisthabitaciones.html').value;
    var idc = document.getElementById('idcolab').value;
    var fecha = document.getElementById('fechainput').value;
    var hora = document.getElementById('horainput').value;
  //ENTRADA MOTOR LOBBY
    var EMLMotorLobbyLI = document.getElementById('checkEMLMotorLobbyLI').checked;
    var EMLAnuncioLME = document.getElementById('checkEMLAnuncioLME').checked;
    var EMLAnuncioLETE = document.getElementById('checkEMLAnuncioLETE').checked; 
    var EMLAccesosMLLO = document.getElementById('checkEMLAccesosMLLO').checked;
    var EMLBanderas = document.getElementById('checkEMLBanderas').checked;
    var EMLOtros =document.getElementById('checkEMLOtros').checked;
    var EMLObserv = document.getElementById('EMLObservinput').value;
  //ÁREA DE RECEPCIÓN
    var AREntradaPLI = document.getElementById('checkAREntradaPLI').checked;
    var ARPersonalRUG = document.getElementById('checkARPersonalRUG').checked; 
    var ARProcesoCE = document.getElementById('checkARProcesoCE').checked;
    var ARCarrosBBL = document.getElementById('checkARCarrosBBL').checked;
    var ARMusicaAEE = document.getElementById('checkARMusicaAEE').checked;
    var ARAromaEF = document.getElementById('checkARAromaEF').checked; 
    var ARTVE = document.getElementById('checkARTVE').checked; 
    var ARBañosO = document.getElementById('checkARBañosO').checked;
    var ARComputadoraPHE = document.getElementById('checkARComputadoraPHE').checked; 
    var ARPedirL = document.getElementById('checkARPedirL').checked;
    var ARCentroN = document.getElementById('checkARCentroN').checked; 
    var AROtros = document.getElementById('checkAROtros').checked;
    var ARObserv = document.getElementById('checkARObservinput').value;
  //ALBERCA
    var AAlbercaIL = document.getElementById('checkAAlbercaIL').checked; 
    var ATelefonoEF = document.getElementById('checkATelefonoEF').checked; 
    var ATemperaturaAA = document.getElementById('checkATemperaturaAA').checked; 
    var AEquipoSL = document.getElementById('checkAEquipoSL').checked; 
    var APuertaAR = document.getElementById('checkAPuertaAR').checked; 
    var APuertaZP = document.getElementById('checkAPuertaZP').checked;
    var AMobiliario = document.getElementById('checkAMobiliario').checked; 
    var AOtros = document.getElementById('checkAOtros').checked;
    var AObserv = document.getElementById('AObservinput').value;
  //GIMNASIO
    var GPuertaAA = document.getElementById('checkGPuertaAA').checked; 
    var GGimnasio = document.getElementById('checkGGimnasio').checked;
    var GEquipos = document.getElementById('checkGEquipos').checked;
    var GTVF = document.getElementById('checkGTVF').checked; 
    var GControlTVL = document.getElementById('checkGControlTVL').checked;
    var GSuministros = document.getElementById('checkGSuministros').checked; 
    var GAreaS = document.getElementById('checkGAreaS').checked; 
    var GOtros = document.getElementById('checkGOtros').checked;
    var GObserv = document.getElementById('GObservinput').value;
  //RECORRIDO POR HABITACIONES
    var RHPuertasA = document.getElementById('checkRHPuertasA').checked; 
    var RHPuertaA = document.getElementById('checkRHPuertaA').checked;
    var RRHPuertasAE = document.getElementById('checkRHPuertasAE').checked;
    var RHEscaleras = document.getElementById('checkRHEscaleras').checked; 
    var RHMaquinasV = document.getElementById('checkRHMaquinasV').checked;
    var RHMaquinasHF = document.getElementById('checkRHMaquinasHF').checked;
    var RHSalidasELO = document.getElementById('checkRHSalidasELO').checked; 
    var RHLobbiesP2do = document.getElementById('checkRHLobbiesP2do').checked;
    var RHLobbiesP3er = document.getElementById('checkRHLobbiesP3er').checked; 
    var RHLobbiesP4to = document.getElementById('checkRHLobbiesP4to').checked; 
    var RHSalidasE = document.getElementById('checkRHSalidasE').checked; 
    var RHSeñalizacionESE = document.getElementById('checkRHSeñalizacionESE').checked; 
    var RHIluminaacionEEH = document.getElementById('checkRHIluminacionEEH').checked; 
    var RHCuartoL = document.getElementById('checkRHCuartoL').checked; 
    var RHCuartoLS = document.getElementById('checkRHCuartoLS').checked; 
    var RHOtros = document.getElementById('checkRHOtros').checked;
    var RHObserv = document.getElementById('RHObservinput').value;
  //ALIMENTOS Y BEBIDAS
    var ASalonD = document.getElementById('checkASalonD').checked; 
    var ASalonJ = document.getElementById('checkASalonJ').checked; 
    var RHIASalonC = document.getElementById('checkASalonC').checked; 
    var ASalonM = document.getElementById('checkASalonM').checked; 
    var ASalonG = document.getElementById('checkASalonG').checked; 
    var ASalonE = document.getElementById('checkASalonE').checked; 
    var ABaños = document.getElementById('checkABaños').checked; 
    var AMulticentro = document.getElementById('checkAMulticentro').checked; 
    var ALobbieM = document.getElementById('checkALobbieM').checked; 
    var ABañosL = document.getElementById('checkABañosL').checked;  
    var AMontajes = document.getElementById('checkAMontajes').checked;
    var ARestauranteL = document.getElementById('checkARestauranteL').checked;
    var ARestaurante = document.getElementById('checkARestaurante').checked;
    var CafeteriaD = document.getElementById('checkACafeteriaD').checked;
    var ACafeteria = document.getElementById('checkACafeteria').checked;
    var RHOtros = document.getElementById('checkRHOtros').checked;
    var RHObserv = document.getElementById('RHObservinput').value;
  //CANCHAS DEPORTIVAS
    var CCanchaT = document.getElementById('checkCCanchaT').checked;
    var CCanchaF = document.getElementById('checkCCanchaF').checked;
    var CCanchaB = document.getElementById('checkCCanchaB').checked;
    var CBaños = document.getElementById('checkCBaños').checked;
    var CPuertas= document.getElementById('checkCPuertas').checked;
    var ASOtros = document.getElementById('checkASOtros').checked;
    var ASObserv = document.getElementById('ASObservinput').value; 
  //MANTENIMIENTO
    var ManNivelC1 = document.getElementById('ManNivelC1input').value;
    var ManNivelC2 = document.getElementById('ManNivelC2input').value;
    var ManNivelC3 = document.getElementById('ManNivelC3input').value;
    var ManNivelC4 = document.getElementById('ManNivelC4input').value;
    var EnObserv = document.getElementById('EneObservinputinput').value;
  //ÁREAS DE SERVICIO
    var ASAmaLS = document.getElementById('checkASAmaLS').checked; 
    var ASOficinaBAC = document.getElementById('checkASOficinaBAC').checked; 
    var ASBañosL = document.getElementById('checkAASBañosL').checked; 
    var ASComedor = document.getElementById('checkASComedor').checked;
    var ASPuertasEPMC = document.getElementById('checkASPuertasEPMC').checked; 
    var ASPuertaTHC = document.getElementById('checkASPuertaTHC').checked;
    var ASOtros = document.getElementById('checkASOtros').checked;
    var ASObserv = document.getElementById('ASObservinput').value; 
  //ESTACIONAMIENTO
  var EIluminacion = document.getElementById('checkEIluminacion').checked;
  var ELimpio = document.getElementById('checkELimpio').checked;
  var EPlumasO = document.getElementById('checkEPlumasO').checked;
  var EOtros = document.getElementById('checkEOtros').checked;
  var EObserv = document.getElementById('EObservinput').value;
  //OCUPACIÓN
  var OHabOMLMFO = document.getElementById('checkOHabOMLMFO').checked;
  var OHabOMLMFO1 = document.getElementById('inputOHabOMLMFO').value;
  var OOcupacionFO = document.getElementById('checkOOcupacion').checked;
  var OOcupacionFO1 = document.getElementById('inputOOcupacion').value;
  var OPorLlegarFO = document.getElementById('checkOPorLlegar').checked;
  var OPorLlegarFO1 = document.getElementById('inputOPorLlegar').value;
  var OObserv = document.getElementById('OObservinput').value;

  var OHabOMLMRA = document.getElementById('checkOHabOMLMRA').checked;
  var OHabOMLMRA1 = document.getElementById('inputOHabOMLMRA').value;
  var OOcupacionRA = document.getElementById('checkOOcupacion2').checked;
  var OOcupacionRA1 = document.getElementById('inputOOcupacion2').value;
  var OPorLlegarRA = document.getElementById('checkOPorLlegar2').checked;
  var OPorLlegarRA1 = document.getElementById('inputOPorLlegar2').value;
  var OObserv2 = document.getElementById('OObservinput2').value;



    //Agrega el documento con los campos y las variables dereferencia, 
    //ejemplo: nombre: variable / nombrecompleto es el campo de la base de datos y nombrec es la variable
    db.collection("areas").add({
      idecolab: idc,
      fecha: fecha,
      hora: hora,
    //ENTRADA MOTOR LOBBY
      entradaMLMLLI: EMLMotorLobbyLI, 
      entradaMLALME: EMLAnuncioLME,
      entradaMLALETE: EMLAnuncioLETE, 
      entradaMLAMLLO: EMLAccesosMLLO,
      entradaMLB: EMLBanderas,
      entradaMLOtros: EMLOtros,
      entradaMLObserv: EMLObserv,
    //ÁREA DE RECEPCIÓN
      areaREPLI: AREntradaPLI,
      areaRPRUG: ARPersonalRUG,
      areaRPCE: ARProcesoCE, 
      areaRCBBL: ARCarrosBBL,
      areaRMAEE: ARMusicaAEE,
      areaRAEF: ARAromaEF,
      areaRTVE: ARTVE, 
      areaRBO: ARBañosO, 
      areaRCPHE: ARComputadoraPHE,
      areaRPL: ARPedirL, 
      areaRCN: ARCentroN, 
      areaROtros: AROtros,
      areaRObserv: ARObserv,
    //ALBERCA
      albercaAIL: AAlbercaIL,
      albercaTEF: ATelefonoEF,
      albercaTAA: ATemperaturaAA,
      albercaESL: AEquipoSL,
      albercaPAR: APuertaAR, 
      albercaPZP:  APuertaZP,
      albercaM: AMobiliario,
      albercaOtros: AOtros,
      albercaObserv: AObserv,
    //GIMNASIO
      gimnasioPAA: GPuertaAA,
      gimnasioG: GGimnasio,
      gimnasioE: GEquipos, 
      gimnasioTVF: GTVF,
      gimnasioCTVL: GControlTVL,
      gimnasioS:  GSuministros, 
      gimnasioAS: GAreaS,
      gimnasioOtros: GOtros,
      gimnasioObser: GObserv,
    //RECORRIDO POR HABITACIONES
      recorridoHPSA: RHPuertasA,
      recorridoHPA: RHPuertaA, 
      recorridoHPAE: RRHPuertasAE,
      recorridoHRHE: RHEscaleras, 
      recorridoHMVRSF: RHMaquinasV, 
      recorridoHMHF:  RHMaquinasHF, 
      recorridoHSELO: RHSalidasELO,
      recorridoHLP2: RHLobbiesP2do, 
      recorridoHLP3: RHLobbiesP3er, 
      recorridoHLP4: RHLobbiesP4to, 
      recorridoHSE: RHSalidasE,
      recorridoHSESE: RHSeñalizacionESE,
      recorridoHIEEH: RHIluminaacionEEH,
      recorridoHCL: RHCuartoL,
      recorridoHCLS: RHCuartoLS, 
      recorridoHOtros: RHOtros,
      recorridoHObserv: RHObserv,
    //ALIMENTOS Y BEBIDAS
      alimentosSASD: ASalonD,
      alimentosSASJ: ASalonJ,   
      alimentosSASC: RHIASalonC,   
      alimentosSASM: ASalonM,   
      alimentosSASG: ASalonG,  
      alimentosSASE: ASalonE, 
      alimentosSAB: ABaños, 
      alimentosSAM: AMulticentro,  
      alimentosSALM: ALobbieM,   
      alimentosSABL: ABañosL,   
      alimentosSAMo: AMontajes, 
      alimentosSARL: ARestauranteL,  
      alimentosSAR: ARestaurante,  
      alimentosSACD: CafeteriaD,  
      alimentosSAC: ACafeteria,  
      alimentosSOtros: RHOtros,  
      alimentosSObserv: RHObserv,
    //CANCHAS DEPORTIVAS
      canchasCCT: CCanchaT,
      canchasCCF: CCanchaF,
      canchasCCB: CCanchaB,
      canchasCB: CBaños, 
      canchasCP: CPuertas,
      canchasSOtros: ASOtros, 
      canchasSObserv: ASObserv,
    //MANTENIMIENTO
      mantenimientoNivelC1: ManNivelC1,
      mantenimientoNivelC2: ManNivelC2, 
      mantenimientoNivelC3: ManNivelC3, 
      mantenimientoNivelC4: ManNivelC4,
      mantenimientoObserv: EnObserv, 
    //ÁREAS DE SERVICIO
      areasASAS: ASAmaLS,
      areasASOBAC: ASOficinaBAC, 
      areasAASBL: ASBañosL,
      areasASC: ASComedor,
      areasASEPMC: ASPuertasEPMC,  
      areasASPTHC: ASPuertaTHC,  
      areasSOtros: ASOtros,
      areasSObserv: ASObserv, 
    //ESTACIONAMIENTO
      estacionamientoI: EIluminacion,
      estacionamientoL: ELimpio,
      estacionamientoPO: EPlumasO,
      estacionamientoOtros: EOtros,
      estacionamientoObserv: EObserv,
    //OCUPACIÓN
      ocupacionHOMLMFO:  OHabOMLMFO,
      ocupacionHOMLMFOi: OHabOMLMFO1, 
      ocupacionFO: OOcupacionFO, 
      ocupacionFOi: OOcupacionFO1, 
      ocupacionPL: OPorLlegarFO,  
      ocupacionPLi: OPorLlegarFO1,
      ocupacionObserv: OObserv,
        
      ocupacionHOMLMRA: OHabOMLMRA,
      ocupacionHOMLMRAi: OHabOMLMRA1,
      ocupacionRAO: OOcupacionRA,
      ocupacionORAOi: OOcupacionRA1,
      ocupacionPL2: OPorLlegarRA,
      ocupacionPLi: OPorLlegarRA1,
      ocupacionObserv2: OObserv2,

      //Resolución de observaciones
      sArea: "",
      sIDC: "",
      sFecha: "",
      sStatus: ""

    })
    .then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);
      
      ocultarbtnEnviar();

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


  