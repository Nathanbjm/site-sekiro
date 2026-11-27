const slides = document.getElementById('slides');
const indicadores = document.getElementById('indicadores');
const grid = document.getElementById('grid');
const carrosselEl = document.getElementById('carrosselPersonagens');
const carrossel = bootstrap.Carousel.getOrCreateInstance(carrosselEl);

function inicial(nome) {
    return nome.trim().charAt(0).toUpperCase();
}

// Link que abre os detalhes em outra aba (usa o id do dados.js)
function linkDetalhes(id) {
    return `<a class="btn-detalhes" href="detalhes.html?id=${id}" target="_blank" rel="noopener">Detalhes</a>`;
}

function criarSlide(p, i) {
    const ativo = i === 0 ? 'active' : '';

    indicadores.insertAdjacentHTML('beforeend',
        `<button type="button" data-bs-target="#carrosselPersonagens" data-bs-slide-to="${i}"
            class="${ativo}" aria-label="${p.nome}"></button>`);

    slides.insertAdjacentHTML('beforeend', `
        <div class="carousel-item ${ativo}">
            <div class="card-personagem">
                <div class="foto" data-inicial="${inicial(p.nome)}">
                    <img src="${p.imagem}" alt="${p.nome}" onerror="this.remove()">
                </div>
                <div class="info">
                    <span class="papel">${p.papel}</span>
                    <h3>${p.nome}</h3>
                    <h4>${p.titulo}</h4>
                    <p class="cla">${p.cla}</p>
                    <p class="descricao resumo">${p.descricao}</p>
                    ${linkDetalhes(p.id)}
                </div>
            </div>
        </div>`);
}

function criarMiniCard(p, i) {
    const card = document.createElement('div');
    card.className = 'mini-card' + (i === 0 ? ' selecionado' : '');
    card.innerHTML = `
        <div class="mini-foto" data-inicial="${inicial(p.nome)}">
            <img src="${p.imagem}" alt="${p.nome}" onerror="this.remove()">
        </div>
        <div class="mini-info">
            <h5>${p.nome}</h5>
            <span>${p.papel}</span>
            ${linkDetalhes(p.id)}
        </div>`;

    // Clicar no card leva o carrossel até o personagem
    card.addEventListener('click', () => {
        carrossel.to(i);
        document.getElementById('secaoCarrossel').scrollIntoView({ behavior: 'smooth', block: 'start' });
    });

    // Clicar no link só abre a nova aba, sem mexer no carrossel
    card.querySelector('.btn-detalhes').addEventListener('click', (e) => {
        e.stopPropagation();
    });

    grid.appendChild(card);
}

personagens.forEach((p, i) => {
    criarSlide(p, i);
    criarMiniCard(p, i);
});

carrosselEl.addEventListener('slid.bs.carousel', (e) => {
    document.querySelectorAll('.mini-card').forEach(c => c.classList.remove('selecionado'));
    grid.children[e.to].classList.add('selecionado');
});