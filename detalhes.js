// Lê a posição do personagem na URL: detalhes.html?id=3
const params = new URLSearchParams(window.location.search);
const id = Number(params.get('id'));
const p = personagens[id];
const detalhe = document.getElementById('detalhe');

function inicial(nome) {
    return nome.trim().charAt(0).toUpperCase();
}

if (!p) {
    detalhe.innerHTML = `
        <p class="descricao">Personagem não encontrado.</p>
        <a class="btn-detalhes" href="personagens.html">Voltar</a>`;
} else {
    document.title = `Sekiro - ${p.nome}`;
    document.getElementById('tituloPagina').textContent = p.nome;

    const detalhes = (p.detalhes || []).map(d => `<li>${d}</li>`).join('');

    detalhe.innerHTML = `
        <div class="card-personagem">
            <div class="foto" data-inicial="${inicial(p.nome)}">
                <img src="${p.imagem}" alt="${p.nome}" onerror="this.remove()">
            </div>
            <div class="info">
                <span class="papel">${p.papel}</span>
                <h3>${p.nome}</h3>
                <h4>${p.titulo}</h4>
                <p class="cla">${p.cla}</p>
                <p class="descricao">${p.descricao}</p>
                <ul>${detalhes}</ul>
            </div>
        </div>`;
}