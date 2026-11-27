// Lê o id do personagem na URL: detalhes.html?id=3
const params = new URLSearchParams(window.location.search);
const id = Number(params.get('id'));

const indice = personagens.findIndex(p => p.id === id);
const p = personagens[indice];

const detalhe = document.getElementById('detalhe');
const navegacao = document.getElementById('navegacao');

function inicial(nome) {
    return nome.trim().charAt(0).toUpperCase();
}

if (!p) {
    detalhe.innerHTML = `
        <div class="nao-encontrado">
            <h1>Personagem não encontrado</h1>
            <a class="btn-detalhes" href="index.html">Voltar</a>
        </div>`;
} else {
    document.title = `Sekiro - ${p.nome}`;

    const detalhes = p.detalhes.map(d => {
        // "Arma: Katana Kusabimaru" -> rótulo + valor
        const [rotulo, ...resto] = d.split(':');
        return `
            <li>
                <span class="rotulo">${rotulo}</span>
                <span class="valor">${resto.join(':').trim()}</span>
            </li>`;
    }).join('');

    detalhe.innerHTML = `
        <article class="perfil">
            <div class="perfil-foto" data-inicial="${inicial(p.nome)}">
                <img src="${p.imagem}" alt="${p.nome}" onerror="this.remove()">
            </div>

            <div class="perfil-info">
                <span class="papel">${p.papel}</span>
                <h1>${p.nome}</h1>
                <h2>${p.titulo}</h2>
                <p class="cla">${p.cla}</p>

                <div class="divisor"></div>

                <p class="perfil-descricao">${p.descricao}</p>

                <ul class="ficha">${detalhes}</ul>
            </div>
        </article>`;

    // Links para o personagem anterior e o próximo (dá a volta na lista)
    const anterior = personagens[(indice - 1 + personagens.length) % personagens.length];
    const proximo = personagens[(indice + 1) % personagens.length];

    navegacao.innerHTML = `
        <a href="detalhes.html?id=${anterior.id}">
            <small>Anterior</small>
            <span>&larr; ${anterior.nome}</span>
        </a>
        <a href="detalhes.html?id=${proximo.id}" class="proximo">
            <small>Próximo</small>
            <span>${proximo.nome} &rarr;</span>
        </a>`;
}