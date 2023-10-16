const apiUrl = "https://eldenring.fanapis.com/api/bosses?limit=100";
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
}

function processBossesData(data) {
    if (!data || !data.bosses || !Array.isArray(data.bosses)) {
      console.error('Invalid data format or no bosses found.');
      return;
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
  }