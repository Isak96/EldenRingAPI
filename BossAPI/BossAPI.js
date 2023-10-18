let limit = 200;
let url = `https://eldenring.fanapis.com/api/bosses?limit=${limit}`;

async function getData() {
try {
let response = await fetch(url);
if (!response.ok) {
throw new Error(`Failed to fetch data: ${response.statusText}`);
}

let json = await response.json();
console.log(json.data)
return json.data;
} 

catch (error) {
console.error(error);
    }
}

const bossCardsContainer = document.getElementById("bossCards");

async function createBossCards() {
const bossData = await getData();
if (!bossData) {
return;
}

bossData.forEach((boss) => {
const bossCard = document.createElement("div");
bossCard.classList.add("boss-card");
bossCard.innerHTML = `
    <div class="boss-image">
    <img src="${boss.image ? boss.image: "https://user-images.githubusercontent.com/88409867/128100295-6da3345d-e5b3-472f-9d37-9b849c21f810.png"}" alt="${boss.name}">
    </div>
    <h2>${boss.name}</h2>
    <p><strong>Region:</strong> ${boss.region}</p>
    <p><strong>Description:</strong> ${boss.description}</p>
    <p><strong>Location:</strong> ${boss.location}</p>
    <p><strong>Drops:</strong></p>
    <ul>
    ${boss.drops.map((drop) => `<li>${drop}</li>`).join("")}
    </ul>
    <p><strong>Health Points:</strong> ${boss.healthPoints}</p>
`;

bossCardsContainer.appendChild(bossCard);
    }
  );
}

createBossCards();