let autos = require ('./autos')

let concesionaria = {
    autos: autos,
    buscarAuto:  function (patente){
        const moduloAutos = autos.filter(function (autos) { 
  
           return autos.patente == patente; 
        });
  
        const resultado = (moduloAutos.length > 0) ? moduloAutos[0] : null;
  
        return resultado;
    },
    venderAuto: function(patente) {
         const autoAVender = this.buscarAuto(patente);
           if(autoAVender)
             autoAVender.vendido = true;
    },  
    autosParaLaVenta : function (){
        let estado = false;
        let autosVendidos = autos.filter(elemento => estado == elemento.vendido);
        return autosVendidos;
    },
    autosNuevos: function (){
      let disponibles0Km = this.autosParaLaVenta().filter(autos => autos.km < 100) 
      return disponibles0Km;    
    },
    listaDeVentas: function (){
      arrayDePrecios = [];
      for (let i = 0; i<autos.length;i++){
        if (autos[i].vendido != false){
          arrayDePrecios.push(autos[i].precio)
        }
      }
      return arrayDePrecios;
    },
    totalDeVentas: function (){
      let precios = this.listaDeVentas()
      return precios.reduce((acumulador,numero) => acumulador + numero, 0);
    },
    puedeComprar: function (auto,persona){
      let cuotaMax = auto.precio/auto.cuotas;
      if (persona.capacidadDePagoTotal >= auto.precio && persona.capacidadDePagoEnCuotas>cuotaMax ){
        return true;
      } else {
        return false;
      }
    },
    autosQuePuedeComprar: function (persona){
      let autosDisponibles = this.autosParaLaVenta();
      let arrayVacio = [];
      for (let i=0; i<autosDisponibles.length; i++){
        if (this.puedeComprar(autosDisponibles[i],persona)==true){
          arrayVacio.push(autosDisponibles[i])
          }
      } 
      return arrayVacio 
    }
    };

 

 //console.log (concesionaria.buscarAuto("JJK116"))
 //console.log (concesionaria.venderAuto("JJK116"))
 console.log (concesionaria.autosParaLaVenta())
 //console.log (concesionaria.autosNuevos())
 //console.log(concesionaria.listaDeVentas())
 //console.log(concesionaria.totalDeVentas())
 /*console.log (concesionaria.puedeComprar(autos[1],{
  nombre: 'Juan',
  capacidadDePagoEnCuotas: 20000,
  capacidadDePagoTotal: 100000
  }))*/
  /*console.log(concesionaria.autosQuePuedeComprar({
    nombre: 'Juan',
    capacidadDePagoEnCuotas: 20000,
    capacidadDePagoTotal: 100000
    }))*/