// Função para calcular o poder total de um monstro
function calcularPoderTotal(monstro) {
    return monstro.ataque + monstro.defesa + monstro.magia;
}

// Função para filtrar monstros com poder total acima da média
function crie_monstros(dados) {
    // Calcula o poder total de cada monstro
    const poderes = dados.map(monstro => calcularPoderTotal(monstro));
    
    // Calcula a média dos poderes
    const mediaPoder = poderes.reduce((acc, poder) => acc + poder, 0) / poderes.length;
    
    // Filtra os monstros com poder total acima da média
    return dados.filter(monstro => calcularPoderTotal(monstro) > mediaPoder);
}

// Exemplo de entrada
const dados = [
    {"nome": "Dragão da Sombra", "ataque": 150, "defesa": 80, "magia": 200},
    {"nome": "Goblin Intrigante", "ataque": 70, "defesa": 50, "magia": 20},
    {"nome": "Gigante das Montanhas", "ataque": 120, "defesa": 200, "magia": 50},
    {"nome": "Elfo Misterioso", "ataque": 90, "defesa": 60, "magia": 120}
];

// Filtra os monstros
const monstrosFiltrados = crie_monstros(dados);

// Exibe os monstros filtrados na página
const monstrosContainer = document.getElementById('monstros-container');

monstrosFiltrados.forEach(monstro => {
    const monstroDiv = document.createElement('div');
    monstroDiv.classList.add('monstro');
    
    monstroDiv.innerHTML = `
        <h2>${monstro.nome}</h2>
        <p><strong>Ataque:</strong> ${monstro.ataque}</p>
        <p><strong>Defesa:</strong> ${monstro.defesa}</p>
        <p><strong>Magia:</strong> ${monstro.magia}</p>
        <p><strong>Poder Total:</strong> ${calcularPoderTotal(monstro)}</p>
    `;
    
    monstrosContainer.appendChild(monstroDiv);
});