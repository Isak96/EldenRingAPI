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

    bossData.forEach((boss) => {
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


// const apiUrl = "https://eldenring.fanapis.com/api/bosses?limit=100";
// const bossesContainer = document.getElementById('bosses-container');

// fetch(apiUrl)
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     return response.json();
//   })
//   .then(data => {
//     data = data.data;
//     console.log(data)
//     processBossesData(data);
//   })
//   .catch(error => console.error('Error fetching data:', error));

// function processBossesData(data) {
//   const bosses = data.bosses;

//   bosses.map(boss => {
//     const bossCard = document.createElement('div');
//     bossCard.classList.add('boss-card');

//     bossCard.innerHTML = `
//       <h2>${boss.name}</h2>
//       <img src="${boss.image}" alt="${boss.name}">
//       <p>Health Points: ${boss.health_points}</p>
//       <p>Location: ${boss.location}</p>
//       <p class="regions">Regions: ${boss.regions.join(', ')}</p>
//       <p>Drops: ${boss.drops.join(', ')}</p>
//     `;

//     bossesContainer.appendChild(bossCard);
//   });
// }

// function processBossesData(data) {
//     if (!data || !data.bosses || !Array.isArray(data.bosses)) {
//       console.error('Invalid data format or no bosses found.');
//       return;
//     }
  
//     const bosses = data.bosses;
  
//     bosses.forEach(boss => {
//       const bossCard = document.createElement('div');
//       bossCard.classList.add('boss-card');
  
//       bossCard.innerHTML = `
//         <h2>${boss.name}</h2>
//         <img src="${boss.image}" alt="${boss.name}">
//         <p>Health Points: ${boss.health_points}</p>
//         <p>Location: ${boss.location}</p>
//         <p class="regions">Regions: ${boss.regions.join(', ')}</p>
//         <p>Drops: ${boss.drops.join(', ')}</p>
//       `;
  
//       bossesContainer.appendChild(bossCard);
//     });
//   }



// const jokeText = document.getElementById("joke-text");

// const fetchJoke = async () => {
//   const response = await fetch("https://eldenring.fanapis.com/api/bosses?limit=100");

//   const data = await response.json();
//   console.log(data)
//   jokeText.textContent = data.value;
// };

// fetchJoke();