const apiUrl = ("https://eldenring.fanapis.com/api/bosses?limit=100");
const bossesContainer = document.getElementById('bosses-container');

fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    processBossesData(data);
  })
  .catch(error => console.error('Error fetching data:', error));

  function processBossesData(data) {
    try {
      if (!data || !data.bosses || !Array.isArray(data.bosses)) {
        throw new Error('Invalid data format or no bosses found.');
      }
  
      const bosses = data.bosses;
  
      bosses.forEach(boss => {
        const bossCard = document.createElement('div');
        bossCard.classList.add('boss-card');
  
        bossCard.innerHTML = `
          <h2>${boss.name}</h2>
          <img src="${boss.image}" alt="${boss.name}">
          <p>Health Points: ${boss.health_points}</p>
          <p>Location: ${boss.location}</p>
          <p class="regions">Regions: ${boss.regions.join(', ')}</p>
          <p>Drops: ${boss.drops.join(', ')}</p>
        `;
  
        bossesContainer.appendChild(bossCard);
      });
    } catch (error) {
      console.error('Error processing bosses data:', error.message);
    }
  }





// const bossText = document.getElementById("boss-text");

// const fetchBoss = async () => {
//   const response = await fetch("https://eldenring.fanapis.com/api/bosses?limit=100");

//   const data = await response.json();
//   console.log(data)
//   bossText.textContent = data.data.value;
// };

// fetchBoss();



// .map(
//     (boss) => `
//       <div class="boss-container">
//           <div class="boss-text">
//               <h2>${boss.name}</h2>
//               <p>Region: ${boss.region}</p>
//               <p>Description: ${boss.description}</p>
//               <p>Location: ${boss.location}</p>
//               <ul>
//                   ${boss.drops.map((drop) => `<li>${drop}</li>`).join("")}
//               </ul>
//               <p>Health Points: ${boss.healthPoints}</p>
//           </div>
//           <div class="boss-image">
//               ${boss.image
//         ? `<img src="${boss.image}" alt="${boss.name}">`
//         : ""
//       }
//           </div>
//       </div>
//   `
//   )
//   .join("");