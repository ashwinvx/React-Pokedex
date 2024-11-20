function Pokecard({ name, image, type, exp }) {
    return (
        <div class="card">
            <h6>{name}</h6>
            <img src={image}></img>
            <div class="small-font">
                Type: {type}
            </div>
            <div class="small-font">
                EXP: {exp}
            </div>
        </div>
    );
}