function Pokedex({ pokemons, hand, isWinner }) {
    const imgURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

    return (
        <div class="container">
            <h1>Pokedex {hand}</h1>
            {pokemons.map(pokemon => {
                const img = imgURL + pokemon.id + '.png';
                return (
                    <Pokecard name={pokemon.name} type={pokemon.type} exp={pokemon.base_experience} image={img}></Pokecard>
                );
            })}
            <h2>{hand == isWinner && "THIS HAND WINS!"}</h2>
        </div >
    );
}