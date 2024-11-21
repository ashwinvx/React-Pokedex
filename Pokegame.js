function Pokegame() {
    const pokemonCharacters = [
        { id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
        { id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
        { id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
        { id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
        { id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
        { id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
        { id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
        { id: 133, name: 'Eevee', type: 'normal', base_experience: 65 }
    ];

    //code to randomly select 8 pokemon and randomly assign them into two hands of 4 cards each 
    let randomArray = [];
    while (randomArray.length < 8) {
        const randomPokemon = Math.floor(Math.random() * pokemonCharacters.length);
        if (randomArray.indexOf(randomPokemon) == -1) {
            randomArray.push(randomPokemon);
        }
    }
    let hand1 = [];
    let hand2 = [];
    let hand1TotalExp = 0, hand2TotalExp = 0;
    randomArray.forEach((item, index) => {
        if (index <= 3) {
            hand1.push(pokemonCharacters[item]);
            hand1TotalExp += pokemonCharacters[item].base_experience;
        } else {
            hand2.push(pokemonCharacters[item]);
            hand2TotalExp += pokemonCharacters[item].base_experience;
        }
    })
    const isWinner = hand1TotalExp > hand2TotalExp ? 'hand 1' : 'hand 2';
    return (
        <>
            <div>
                <Pokedex pokemons={hand1} hand="hand 1" isWinner={isWinner}></Pokedex>
            </div >
            <div>
                <Pokedex pokemons={hand2} hand="hand 2" isWinner={isWinner}></Pokedex>
            </div>
        </>
    );
}