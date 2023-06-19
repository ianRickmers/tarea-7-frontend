let main = document.getElementById("main");

//Descripción: Función que obtiene los datos de la API y devuelve un parámetro con los resultados
//Entrada: Ninguna
//Salida: Un arreglo con los resultados de la API
const pokemones = async () => {
    try {
        const URL = "https://pokeapi.co/api/v2/pokemon/";
        const response = await fetch(URL);
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.log(error);
    }
};

//Descripción: Función que obtiene los datos de la API y devuelve los datos
//Entrada: URL de la API
//Salida: Un arreglo con los datos de la API
const infoPokemon = async (URL) => {
    try{
        const response = await fetch(URL);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
};

//Descripción: Función que convierte la primera letra de una cadena en mayúscula
//Entrada: Una cadena
//Salida: La cadena con la primera letra en mayúscula
function primeraLetraMayus(str) {
    return str.charAt(0).toUpperCase()+str.slice(1);
}

//Descripción: Función que devuelve el color de fondo de la tarjeta según el tipo de pokémon
//Entrada: El nombre del tipo de pokémon
//Salida: El color de fondo de la tarjeta
const typeColor = (name) => {
    if(name === "grass"){
        return "#A7DB8D";
    }else if(name === "fire"){
        return "#F5AC78";
    }else if(name === "water"){
        return "#9DB7F5";
    }else if(name === "bug"){
        return "#C6D16E";
    }else if(name === "flying"){
        return "#C6B7F5"
    }else if(name === "normal"){
        return "#C6C6A7";
    }
};

//Descripción: Función que crea las tarjetas de los pokémon
//Entrada: Ninguna
//Salida: Ninguna
const pkmnCards = async () => {
    const data = await pokemones();
    for (let i = 0; i < 20; i++) {
        const dataPokemones = await infoPokemon(data[i].url);
        main.innerHTML += 
        `<div class="card">
            <img style="background-color:${typeColor(dataPokemones.types[0].type.name)}" src="${dataPokemones.sprites.other.dream_world.front_default}"alt="">
            <div class="card-body">
                <h1 class="card-title">${primeraLetraMayus(data[i].name)}</h1>
            </div>
        </div>`;
    }
};

pkmnCards();