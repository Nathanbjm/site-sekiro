const personagens = [
    {
        id: 1,
        nome: "Lobo (Sekiro)",
        titulo: "O Shinobi Maneta",
        cla: "Shinobi de Owl",
        papel: "Protagonista",
        imagem: "imagens/personagens/lobo.jpg",
        descricao: "Órfão de guerra criado por Coruja, jurou lealdade a Kuro, o Herdeiro Divino. Perdeu o braço esquerdo para Genichiro e ganhou uma prótese shinobi do Escultor. Seu destino é decidido pelas escolhas que faz sobre a imortalidade de Kuro.",
        detalhes: ["Protegido: Kuro", "Arma: Katana Kusabimaru", "Habilidade: Ressurreição"]
    },
    {
        id: 2,
        nome: "Kuro",
        titulo: "O Herdeiro Divino",
        cla: "Linhagem do Dragão",
        papel: "Jovem mestre",
        imagem: "imagens/personagens/kuro.jpg",
        descricao: "Jovem senhor que carrega o sangue do Dragão, que concede o poder da imortalidade. Muitos querem esse poder, o que faz dele alvo de raptos e conflitos por toda Ashina.",
        detalhes: ["Servo: Lobo", "Poder: Herança do Dragão", "Papel: Centro da trama"]
    },
    {
        id: 3,
        nome: "Genichiro Ashina",
        titulo: "Líder do Clã Ashina",
        cla: "Clã Ashina",
        papel: "Antagonista",
        imagem: "imagens/personagens/genichiro.jpg",
        descricao: "Neto de Isshin e comandante de Ashina. Quer a Herança do Dragão para salvar seu clã da queda. Combina espada, arco e raios, e foi quem cortou o braço do Lobo.",
        detalhes: ["Parente: Isshin (avô)", "Local: Castelo de Ashina", "Estilo: Espada, arco e raios"]
    },
    {
        id: 4,
        nome: "Isshin Ashina",
        titulo: "O Santo da Espada",
        cla: "Clã Ashina",
        papel: "Chefe final",
        imagem: "imagens/personagens/isshin.jpg",
        descricao: "Lenda viva que liderou Ashina e salvou o clã na guerra, avô de Genichiro. Mestre de várias técnicas, volta à batalha para defender Ashina, tornando-se um dos duelos mais marcantes do jogo.",
        detalhes: ["Parente: Genichiro (neto)", "Reputação: Mestre da espada", "Estilo: Combate corpo a corpo e armas"]
    },
    {
        id: 5,
        nome: "Dra. Emma",
        titulo: "A Médica de Ashina",
        cla: "Clã Ashina",
        papel: "Aliada",
        imagem: "imagens/personagens/emma.jpg",
        descricao: "Médica leal a Isshin, estuda as doenças que assolam Ashina e procura formas de aliviar seu povo. Fornece tratamentos e informações importantes durante a jornada.",
        detalhes: ["Papel: Cura e pesquisa", "Aliado de: Isshin", "Local: Ashina"]
    },
    {
        id: 6,
        nome: "Coruja (Owl)",
        titulo: "O Grande Shinobi",
        cla: "Shinobi",
        papel: "Mentor / Antagonista",
        imagem: "imagens/personagens/coruja.jpg",
        descricao: "Pai adotivo e mestre do Lobo, criou-o como shinobi e lhe ensinou tudo. Seu papel muda ao longo da história, colocando lealdade e dever em conflito.",
        detalhes: ["Discípulo: Lobo", "Estilo: Furtividade e luta", "Relação: Pai e mestre"]
    },
    {
        id: 7,
        nome: "Lady Butterfly",
        titulo: "A Dama Borboleta",
        cla: "Shinobi",
        papel: "Chefe",
        imagem: "imagens/personagens/lady-butterfly.jpg",
        descricao: "Kunoichi misteriosa e letal, ligada ao passado de Coruja. Seu duelo mostra o lado mais sombrio do mundo shinobi.",
        detalhes: ["Tipo: Kunoichi", "Estilo: Ilusões e lâminas", "Aparição: Início da jornada"]
    },
    {
        id: 8,
        nome: "Criança Divina",
        titulo: "A Divina Criança da Regeneração",
        cla: "Templo Senpou",
        papel: "Figura sagrada",
        imagem: "imagens/personagens/crianca-divina.jpg",
        descricao: "Sacerdotisa e figura espiritual ligada ao Dragão e à imortalidade. Sua presença guia o Lobo em passagens decisivas da história.",
        detalhes: ["Local: Templo Senpou", "Tema: Imortalidade e Dragão", "Papel: Guia espiritual"]
    },
    {
        id: 9,
        nome: "Hanbei, o Imortal",
        titulo: "O Monge Sem Morte",
        cla: "Monge",
        papel: "Aliado / Mentor",
        imagem: "imagens/personagens/hanbei.jpg",
        descricao: "Monge imortal que conhece bem os custos de viver para sempre. Sua história é um aviso sobre o peso da imortalidade.",
        detalhes: ["Tema: Imortalidade", "Papel: Conselheiro", "Conexão: Herança do Dragão"]
    }
];

const slides = document.getElementById('slides');
const indicadores = document.getElementById('indicadores');
const grid = document.getElementById('grid');
const modalCorpo = document.getElementById('modalCorpo');
const carrosselEl = document.getElementById('carrosselPersonagens');
const carrossel = bootstrap.Carousel.getOrCreateInstance(carrosselEl);
const modal = bootstrap.Modal.getOrCreateInstance(document.getElementById('modalDetalhes'));

function inicial(nome) {
    return nome.trim().charAt(0).toUpperCase();
}

function abrirDetalhes(i) {
    const p = personagens[i];
    const detalhes = p.detalhes.map(d => `<li>${d}</li>`).join('');

    modalCorpo.innerHTML = `
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

    modal.show();
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
                    <button type="button" class="btn-detalhes" data-indice="${i}">Detalhes</button>
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
            <button type="button" class="btn-detalhes">Detalhes</button>
        </div>`;

    card.addEventListener('click', () => {
        carrossel.to(i);
        document.getElementById('secaoCarrossel').scrollIntoView({ behavior: 'smooth', block: 'start' });
    });

    card.querySelector('.btn-detalhes').addEventListener('click', (e) => {
        e.stopPropagation();
        abrirDetalhes(i);
    });

    grid.appendChild(card);
}

personagens.forEach((p, i) => {
    criarSlide(p, i);
    criarMiniCard(p, i);
});

slides.addEventListener('click', (e) => {
    const botao = e.target.closest('.btn-detalhes');
    if (botao) abrirDetalhes(Number(botao.dataset.indice));
});

carrosselEl.addEventListener('slid.bs.carousel', (e) => {
    document.querySelectorAll('.mini-card').forEach(c => c.classList.remove('selecionado'));
    grid.children[e.to].classList.add('selecionado');
});