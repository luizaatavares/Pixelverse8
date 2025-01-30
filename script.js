document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.createElement("input");
    searchInput.setAttribute("placeholder", "Filtrar jogos...");
    searchInput.style.margin = "20px";
    searchInput.style.padding = "10px";
    searchInput.style.width = "90%";
  
    document.querySelector("header").appendChild(searchInput);
  
    const gameCards = document.querySelectorAll(".game-card");
  
    searchInput.addEventListener("input", (e) => {
      const searchValue = e.target.value.toLowerCase();
  
      gameCards.forEach(card => {
        const title = card.querySelector(".game-title").textContent.toLowerCase();
        if (title.includes(searchValue)) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });

    gameCards.forEach(card => {
      card.addEventListener("click", () => {
        alert(`Você clicou no ${card.querySelector(".game-title").textContent}`);
      });
    });
  });
  