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
    } catch (error) {
        console.error(error);
    }
}

const bossCardsContainer = document.getElementById("bossCards");

async function createBossCards() {
    const bossData = await getData();

    if (!bossData) {
        // Handle the case where data retrieval fails.
        return;
    }

    bossData.map((boss) => {
        const bossCard = document.createElement("div");
        bossCard.classList.add("boss-card"); // You can define CSS styles for boss cards.

        // Create the card content using the boss data.
        bossCard.innerHTML = `
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

        // Append the card to the container.
        bossCardsContainer.appendChild(bossCard);
    });

    // Log a message indicating that boss data retrieval and card creation are complete.
    console.log("Boss data retrieval and card creation are complete.");
}

// Call the function to create boss cards.
createBossCards();