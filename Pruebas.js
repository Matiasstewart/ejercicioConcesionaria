let autos = require ('./autos')

let concesionaria = {
    autos: autos,
    buscarAuto:function(patente){
        for (let i = 0; i<autos.length; i++){
            if (autos[i].patente==patente){
                return autos[i]
            } else {
                return null
            }
        }
    } ,
    venderAuto: function (pat){
        const venderPatente = this.buscarAuto(pat);
        for (let i = 0; i<autos.length; i++){
            if (autos[i].vendido == false){
                return autos[i].vendido = true
            } else {

            }
        }
    },
    autosParaLaVenta : function (){
        let estado = false;
        let autosVendidos = autos.filter(elemento => estado == elemento.vendido);
        return autosVendidos;
    }
 };


 console.log(buscarAuto("JJK116"))

 buscarAuto:  function (patente){

    //filtra la patente de los autos 

    const moduloAutos = autos.filter(function (autos) { 

       return autos.patente == patente; 
    });

    // el filter devuelve un array con lo que filtro(si se cumple devuelve el array donde esta esa patente), de no ser asi devuelve un array vacio
    // si el numero de elementos de moduloAutos es mayor a 0, devuelve el auto al cual corresponde la patente, de lo contrario devuelve null

    const resultado = (moduloAutos.length > 0) ? moduloAutos[0] : null;

    return resultado;
   },
   venderAuto: function(patente) {

    //lo que hace autoAVender es prender la funcion de buscarAuto
     const autoAVender = this.buscarAuto(patente);
    // si el auto existe se cambia el valor a true, como no hay que comparar nada no se le pasa nada en el if
       if(autoAVender)
    //Para cambiar una propiedad se usa el operador de asignación ( = )
         autoAVender.vendido = true;
},
