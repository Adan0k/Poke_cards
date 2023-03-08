document.getElementById("curPkm").addEventListener("change", (e) => {
    getPkmData(e.target.value)
});

const card = document.getElementById("card");
const getPkmData = (name) => {
    document.getElementById("pkmName").innerHTML = name;
    switch (name) {
        case "charizard":
            card.style.background =
                "linear-gradient(180deg, rgba(255,0,0,1) 32%, rgba(243,243,243,1) 77%)";
            document.getElementById("pkmImage").src = "./images/Charizard.png";
            break;
        case "greninja":
            card.style.background =
                "linear-gradient(180deg, rgba(0,161,255,1) 40%, rgba(0,0,0,1) 80%)";
            document.getElementById("pkmImage").src = "./images/Greninja.png";
            break;
        case "lucario":
            card.style.background =
                "linear-gradient(0deg, rgba(0,106,168,1) 22%, rgba(133,133,133,1) 38%)";
            document.getElementById("pkmImage").src = "./images/lucario.png";
            break;
        case "gardevoir":
            card.style.background = "#ff0095";
            document.getElementById("pkmImage").src = "./images/gardevoir.png";
            break;
        case "trevenant":
            card.style.background =
                "linear-gradient(180deg, rgba(46,255,0,1) 39%, rgba(0,0,0,1) 77%)";
            document.getElementById("pkmImage").src = "./images/Trevenant.png";
            break;
        case "luxray":
            card.style.background = "#fffa00";
            document.getElementById("pkmImage").src = "./images/luxray.png";
            break;

        default:
            break;
    }
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then(async (response) => await response.json())
        .then((data) => {
            document.getElementById("pkmType").innerHTML = data.types[0].type.name;
            document.getElementById("hp").innerHTML = data.stats[0].base_stat;
            document.getElementById("atk").innerHTML = data.stats[1].base_stat;
            document.getElementById("df").innerHTML = data.stats[2].base_stat;
            document.getElementById("spAtk").innerHTML = data.stats[3].base_stat;
            document.getElementById("spDf").innerHTML = data.stats[4].base_stat;
            document.getElementById("speed").innerHTML = data.stats[5].base_stat;
        }
        );
};
getPkmData("charizard");