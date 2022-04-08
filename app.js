const pokeCARD = document.querySelector('[data-poke-card]');
const pokeName = document.querySelector('[data-poke-name]');
const pokeImg = document.querySelector('[data-poke-img]');
const pokeImgCntainer = document.querySelector('[data-poke-img-container]');
const pokeId = document.querySelector('[data-poke-id]');
const pokeTypes = document.querySelector('[data-poke-types]');
const pokeStats = document.querySelector('[data-poke-stats]');

const typeColors ={
    electric: '#F7D02C',
    fire: '#F08030',
    grass: '#78C850',
    water: '#6890F0',
    bug: '#A8B820',
    normal: '#A8A878',
    poison: '#A040A0',
    flying: '#A890F0',
    fighting: '#C03028',
    psychic: '#F85888',
    rock: '#B8A038',
    ground: '#E0C068',
    ghost: '#705898',
    dragon: '#7038F8',
    dark: '#705848',
    steel: '#B8B8D0',
    fairy: '#EE99AC',
    default: '#2A1A1F',
}

//event.preventDefault(); ayuda a que no se resetee la pagina al hacer click en el submit
const searchPokemon = event => {
    event.preventDefault();
    const {value} = event.target.pokemon;
    fetch(`https://pokeapi.co/api/v2/pokemon/${value.toLowerCase()}`)//fetch es una promesa | la api que se usa es la de pokeapi | tolowercase para que no haya problemas con mayusculas
        .then(data => data.json())//convertir la data a json
        .then(response => renderPokeonData(response))//renderizar la data
}
const renderPokeonData = data => {
    const sprite = data.sprites.front_default;
    const {stats, types} = data;
    console.log(data);
}