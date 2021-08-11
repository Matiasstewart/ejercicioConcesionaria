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
        for (let i = 0; i<=autos.length; i++){
            let contador = []
            if (autos[i].vendido != true){
                contador.push(autos[i])
            } else {
                
            }
            return contador
        }
    }
 };