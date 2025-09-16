const container = document.getElementById("personagens");

fetch("https://rickandmortyapi.com/api/character")
  .then(res => res.json())
  .then(data => {
    data.results.slice(0,6).forEach(p => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `<img src="${p.image}" alt="${p.name}">
                        <h3>${p.name}</h3>
                        <p>Status: ${p.status}</p>`;
      container.appendChild(card);
    });
  });
