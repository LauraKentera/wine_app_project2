document.addEventListener("DOMContentLoaded", () => {
    fetchWineData();
});

async function fetchWineData() {
    try {
        const response = await fetch("./data/items.json");
        const wines = await response.json();
        loadWineList(wines);
    } catch (error) {
        console.error("Error loading wine data:", error);
    }
}

function showMenu() {
    document.getElementById("landing").style.display = "none";
    document.getElementById("menu").style.display = "block";
    document.getElementById("details").style.display = "none";
    window.scrollTo(0, 0); // reset scroll to the top
}

function loadWineList(wines) {
    const wineList = document.getElementById("wine-list");
    wineList.innerHTML = "";
    wines.forEach(wine => {
        const wineCard = document.createElement("div");
        wineCard.classList.add("wine-card-container");
        wineCard.innerHTML = `
            <div class="wine-card">
                <picture>
                    <source media="(max-width: 480px)" srcset="img/mobile/${wine.image}">
                    <source media="(max-width: 768px)" srcset="img/tablet/${wine.image}">
                    <img src="img/desktop/${wine.image}" alt="${wine.name}">
                </picture>
                <div class="wine-info">
                    <h5>${wine.name}</h5>
                    <p>${wine.type} | ${wine.year}</p>
                    <button class="btn-details" onclick="showDetails(${wine.id})">View Details</button>
                </div>
            </div>
        `;
        wineList.appendChild(wineCard);
    });
}
function showDetails(id) {
    fetch("./data/items.json")
        .then(response => response.json())
        .then(wines => {
            const selectedWine = wines.find(w => w.id === id);
            if (!selectedWine) {
                document.getElementById("wine-details").innerHTML = "<p>No wine selected. Please choose a wine from the collection.</p>";
                return;
            }

            document.getElementById("menu").style.display = "none";
            document.getElementById("details").style.display = "block";

            // Build rating stars (example: 5-star scale)
            let starsHtml = "";
            const fullStars = Math.floor(selectedWine.rating);
            const halfStar = (selectedWine.rating % 1) >= 0.5;
            for (let i = 0; i < fullStars; i++) {
                starsHtml += '<i class="fas fa-star" style="color: var(--bronze);"></i> ';
            }
            if (halfStar) {
                starsHtml += '<i class="fas fa-star-half-alt" style="color: var(--bronze);"></i> ';
            }

            // Build top notes
            let notesHtml = "";
            if (selectedWine.topNotes && selectedWine.topNotes.length > 0) {
                notesHtml = '<div class="wine-top-notes">';
                selectedWine.topNotes.forEach(note => {
                    notesHtml += `<div class="note">
                          <i class="fas ${note.icon}"></i>
                          <span>${note.note}</span>
                        </div>`;
                });
                notesHtml += '</div>';
            }

            document.getElementById("wine-details").innerHTML = `
                <div class="wine-detail-view">
                  <button class="btn-back" onclick="showMenu()">
                    <i class="fas fa-arrow-left fa-2x"></i> 
                  </button>
                  <div class="wine-details-content">
                    <div class="wine-image">
                      <picture>
                        <source media="(max-width: 480px)" srcset="img/mobile/${selectedWine.image}">
                        <source media="(max-width: 768px)" srcset="img/tablet/${selectedWine.image}">
                        <img src="img/desktop/${selectedWine.image}" alt="${selectedWine.name}">
                      </picture>
                    </div>
                    <div class="wine-info-view">
                      <h1 class="wine-name">${selectedWine.name}</h1>
                      <div class="wine-stats">
                        <p><strong>Year:</strong> ${selectedWine.year}</p>
                        <p><strong>Region:</strong> ${selectedWine.region}</p>
                        <p><strong>Type:</strong> ${selectedWine.type}</p>
                      </div>
                      <p class="wine-description">${selectedWine.description}</p>
                      <div class="wine-rating">
                        <strong>Rating:</strong> ${starsHtml}
                      </div>
                      ${notesHtml}
                    </div>
                  </div>
                </div>
            `;
        })
        .catch(error => console.error("Error loading wine details:", error));
}

