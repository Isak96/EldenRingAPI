const bossText = document.getElementById("boss-text");
const apiButton = document.getElementById("apiButton");

const fetchBoss = async () => {
const response = await fetch("https://eldenring.fanapis.com/api/bosses?limit=100");
const data = await response.json();
bossText.textContent = data.data.value;
};

apiButton.addEventListener("click", fetchBoss);