<<<<<<< HEAD
const form = document.getElementById("registroForm");
const lista = document.getElementById("listaRegistros");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = document.getElementById("nome").value;
    const local = document.getElementById("local").value;
    const desc = document.getElementById("descricao").value;

    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
        <h3>${nome || "Animal sem nome"}</h3>
        <p><strong>Local:</strong> ${local}</p>
        <p>${desc}</p>
    `;

    lista.appendChild(card);

    form.reset();
=======
const form = document.getElementById("registroForm");
const lista = document.getElementById("listaRegistros");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = document.getElementById("nome").value;
    const local = document.getElementById("local").value;
    const desc = document.getElementById("descricao").value;

    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
        <h3>${nome || "Animal sem nome"}</h3>
        <p><strong>Local:</strong> ${local}</p>
        <p>${desc}</p>
    `;

    lista.appendChild(card);

    form.reset();
>>>>>>> 545e30b3a1c96d5b40a25d5aa9bab8aa89793a04
});