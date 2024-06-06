var borderScreen = document.getElementById("borderScreen");
var screenBG = document.getElementById("infosScreen");


function Click(event) {
    event.preventDefault();

    const searchInput = document.getElementById("bar").value.toLowerCase();
    const apiUrl = "https://pokebuildapi.fr/api/v1/pokemon/" + searchInput;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {

            document.getElementById("infosScreen").innerHTML = "";
            document.getElementById("borderScreen").innerHTML = "";

            const pokemon = data;

            const infos = document.createElement('div');
            infos.className = "infos";

            const infosList1 = document.createElement('ul');
            infosList1.className = "infosList";

            const infosList2 = document.createElement('ul');
            infosList2.className = "infosList";

            const left = document.createElement('div');
            left.className = "left"

            const right = document.createElement('div');
            right.className = "right"

            const Nom = document.createElement('li');
            Nom.textContent = "NOM : " + pokemon.name.toUpperCase();
            infosList1.appendChild(Nom);

            const Id = document.createElement('li');
            Id.textContent = "ID : " + pokemon.id;
            infosList1.appendChild(Id);

            const hp = document.createElement('li');
            hp.textContent = "HP : " + pokemon.stats.HP;
            infosList1.appendChild(hp);

            const Speed = document.createElement('li');
            Speed.textContent = "VITESSE : " + pokemon.stats.speed;
            infosList1.appendChild(Speed);

            const Attack = document.createElement('li');
            Attack.textContent = "ATTAQUE : " + pokemon.stats.attack;
            infosList2.appendChild(Attack);

            const Defense = document.createElement('li');
            Defense.textContent = "DEFENSE : " + pokemon.stats.defense;
            infosList2.appendChild(Defense);

            const AttackSpe = document.createElement('li');
            AttackSpe.textContent = "ATTAQUE SPE : " + pokemon.stats.special_attack;
            infosList2.appendChild(AttackSpe);

            const DefenseSpe = document.createElement('li');
            DefenseSpe.textContent = "DEFENSE SPE : " + pokemon.stats.special_defense;
            infosList2.appendChild(DefenseSpe);

            const screen = document.createElement('div');
            screen.className = "screen";

            const Image = document.createElement('img');
            Image.src = pokemon.image;
            Image.alt = pokemon.name;
            screen.appendChild(Image);

            left.appendChild(infosList1);
            right.appendChild(infosList2);

            infos.appendChild(left);
            infos.appendChild(right);

            borderScreen.style.backgroundImage = "url('bg.jpeg')";

            screenBG.style.backgroundImage = "url('bbg.jpeg')";

            document.getElementById("borderScreen").appendChild(screen);

            document.getElementById("infosScreen").appendChild(infos);

        })
        .catch(error => {
            console.error('Error fetching Pokémon data:', error);
        });
}

let total = 0;

function Count(event){
    event.preventDefault();
    total++;
    console.log(total);
    Off();
}

function Off(){

    if (total%2 != 0){

        borderScreen.style.backgroundImage = "url('bg.jpeg')";
        screenBG.style.backgroundImage = "url('bbg.jpeg')";

        document.getElementById("yellow").body.style.backgroundColor = "#FFCB05";


    } else {
        borderScreen.style.backgroundImage = "none";
        screenBG.style.backgroundImage = "none";
        document.getElementById("infosScreen").innerHTML = "";
        document.getElementById("borderScreen").innerHTML = "";
    }
}
