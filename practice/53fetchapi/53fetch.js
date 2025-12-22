// fetch = function used for making http requests to fetch resources
//         (JSON style data, images, files)
//         Simplifies asynchronous data fetching in JavaScript and used
//         for interacting with APIs to retrieve and send data
//         asynchronously over the web
//         fetch(url, {options})

fetchData();

async function fetchData() {
  try {
    const pokemonInput = document.getElementById("pokemon");
    const pokemonName = pokemonInput.value.toLowerCase().trim();
    
    if (!pokemonName) {
      alert("Enter a Pokemon name!");
      return;
    }

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    
    if (!response.ok) {
      throw new Error(`Pokemon "${pokemonName}" not found!`);
    }

    const data = await response.json();
    const pokemonSprite = data.sprites.front_default;
    const imgElement = document.getElementById("pokemonSprite");

    imgElement.src = pokemonSprite;
    imgElement.style.display = "block";
  } 
  
  catch(error) {
    console.error(error);
    alert(error.message);
  }
}
