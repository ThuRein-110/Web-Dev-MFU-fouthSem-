const initialCreatures = [
    { id: 1, name: "Aqua Dragon", rarity: "Legendary", basePower: 90 },
    { id: 2, name: "Shadow Stalker", rarity: "Epic", basePower: 75 },
    { id: 3, name: "Iron Golem", rarity: "Common", basePower: 50 },
    { id: 4, name: "Solar Griffin", rarity: "Legendary", basePower: 88 },
    { id: 5, name: "Void Weaver", rarity: "Epic", basePower: 70 },
    { id: 6, name: "Forest Sprite", rarity: "Common", basePower: 45 }
];

let creatures = [];

function generatePower(base) {
    return base + Math.floor(Math.random() * 51);
}

function initializeCreatures() {
    creatures = initialCreatures.map(c => ({
        ...c,
        power: generatePower(c.basePower)
    }));
}

function renderCreatures() {
    const container = document.getElementById("creatureContainer");
    container.innerHTML = "";

    creatures.forEach(creature => {

        const card = document.createElement("div");
        card.className = "card";
        card.id = "creature-" + creature.id;

        card.innerHTML = `
            <img src="public/img/${creature.name}.png" alt="${creature.name}">
            <h3>${creature.name}</h3>
            <span class="rarity ${creature.rarity}">
                ${creature.rarity}
            </span>
            <div class="power">PWR: ${creature.power}</div>
        `;

        container.appendChild(card);
    });
}

function startBattle() {
    if (creatures.length < 2) {
        alert("Not enough creatures to battle!");
        return;
    }

    document.querySelectorAll(".card").forEach(card => {
        card.classList.remove("winner", "loser");
    });

    const index1 = Math.floor(Math.random() * creatures.length);
    let index2;

    do {
        index2 = Math.floor(Math.random() * creatures.length);
    } while (index1 === index2);

    const fighter1 = creatures[index1];
    const fighter2 = creatures[index2];

    const card1 = document.getElementById("creature-" + fighter1.id);
    const card2 = document.getElementById("creature-" + fighter2.id);

    let winner, loser;

    if (fighter1.power >= fighter2.power) {
        winner = fighter1;
        loser = fighter2;
        card1.classList.add("winner");
        card2.classList.add("loser");
    } else {
        winner = fighter2;
        loser = fighter1;
        card2.classList.add("winner");
        card1.classList.add("loser");
    }

    alert(`${winner.name} wins! (${winner.power} vs ${loser.power})`);

    setTimeout(() => {
        creatures = creatures.filter(c => c.id !== loser.id);
        renderCreatures();
    }, 1000);
}

document.getElementById("battleBtn").addEventListener("click", startBattle);

initializeCreatures();
renderCreatures();