const produtos = [
  { nome: "Notebook", preco: 3500 },
  { nome: "Celular", preco: 2000 },
  { nome: "Fone Bluetooth", preco: 300 }
];

const container = document.getElementById("produtos");

produtos.forEach(p => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `<h3>${p.nome}</h3><p>R$ ${p.preco}</p>`;
  container.appendChild(card);
});
