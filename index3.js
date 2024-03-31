
const getOptionsProteinas = () => {
    const optionsProteinas =["Pechuga de pollo",
    "Filete de salmón",
    "Lentejas",
    "Huevos",
    "Tofu",
    "Carne de res magra",
    "Garbanzos",
    "Camarones",
    "Queso cottage",
    "Pavo"
    ];
    return optionsProteinas;
}

const getOptionsCarbohidratos = () => {
    const optionsCarbohidratos = ["Arroz integral",
    "Quinoa",
    "Patatas",
    "Pasta integral",
    "Pan de centeno",
    "Avena",
    "Batata",
    "Cuscús",
    "Lentejas",
    "Frijoles negros"];
    return optionsCarbohidratos;
}

const getOptionsGuarnicion = () => {
    const optionsGuarnicion = ["Ensalada verde (lechuga, espinaca, rúcula)",
    "Brócoli al vapor",
    "Zanahorias baby",
    "Espárragos a la parrilla",
    "Puré de calabaza",
    "Chips de kale (col rizada)",
    "Guacamole",
    "Pico de gallo",
    "Coles de Bruselas asadas",
    "Champiñones salteados"];
    return optionsGuarnicion;
}

function proteinasConCarbohidratos(proteinas,carbohidratos){
    const combinacionFinal = proteinas.map(function(proteina){
        const combinacionInicial = carbohidratos.map(function(carbohidrato){
            return proteina + " con " + carbohidrato;
            
        });
        return combinacionInicial;
    });
    return combinacionFinal;
}

function proteConCarbYGuarnicion (proteinasConCarbohidratos,guarniciones){     
    const combFinal = proteinasConCarbohidratos.map(function(proteConCarb){
        const combInicial = guarniciones.map(function(guarnicion){
            return proteConCarb + " y " + guarnicion;
        });
      
       return combInicial;
    });

    return combFinal;
}

const reductor = (array) => {
    const arrayFinal = array.reduce(function(acumulador,element){
        return acumulador.concat(element);
    },[])
    return arrayFinal;
}




function main () {
    const proteinas = getOptionsProteinas();
    const carbohidratos = getOptionsCarbohidratos();
    const guarnicion = getOptionsGuarnicion();
    const proteYCarb = proteinasConCarbohidratos(proteinas,carbohidratos);
    const resultReductor= reductor(proteYCarb);
    const result = proteConCarbYGuarnicion(resultReductor,guarnicion);
    const resultFinalDef = reductor(result);
    console.log(resultFinalDef);
   
}

main();


