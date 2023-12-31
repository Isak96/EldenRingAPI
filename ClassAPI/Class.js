let limit = 15;
let url = `https://eldenring.fanapis.com/api/classes?limit=${limit}`;

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

const classesCardsContainer = document.getElementById("classesCards");

async function createclassesCards() {
const classesData = await getData();
if (!classesData) {
return;
}

classesData.map((classes) => {
const classesCard = document.createElement("div");
classesCard.classList.add("classes-container");
classesCard.innerHTML = `
    <div class="classes-image">
    <img src="${classes.image ? classes.image: "https://user-images.githubusercontent.com/88409867/128100295-6da3345d-e5b3-472f-9d37-9b849c21f810.png"}" alt="${classes.name}">
    </div>
    <h2>${classes.name}</h2>
    <p><strong>Description:</strong> ${classes.description}</p>
    <p><strong>Stats:</strong> ${classes.stats}</p>
    
    
    
`;

classesCardsContainer.appendChild(classesCard);
    }
  );
}

createclassesCards();