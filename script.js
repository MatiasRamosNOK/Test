
var nave = {
    tipoDeNave : "espacial",
    pais : "argentina",
    cantidadDeTripulantes : 3,
    tripulantes : ["Mati","Ivan","Diego"],
    estado : "usada",
    despegar : function despegue(){
        console.log(
            "Despegue en 3, 2, 1 … OH NO, ESPEREN, ALGO SE ROMPIÓ!"
        )

        alert("BOOOM!")
    }
}

function mostrarNave(){
    return nave
}

var mi_auto = {}

mi_auto.marca = "Tesla"
mi_auto.anio = 2019
mi_auto.nuevo = true
var property_key = "modelo"
mi_auto[property_key] = "Model S"
var anotherPropertyKey = "precio"
mi_auto[anotherPropertyKey] = "85000"
var next_property = "color"
mi_auto[next_property] = "rojo"

function recorrerObjeto(unObjeto){
    for(var prop in unObjeto){
        console.log(unObjeto[prop])
    }
}