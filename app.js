let listaDeAmigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    let nomeInput = document.getElementById('amigo');
    let nome = nomeInput.value.trim();

    // Validação do nome
    if (nome === '') {
        alert('Por favor, insira um nome.');
        return;
    }

    if (listaDeAmigos.includes(nome)) {
        alert('Este nome já foi adicionado.');
        return;
    }

    // Adiciona o nome ao array e atualiza a lista na tela
    listaDeAmigos.push(nome);
    nomeInput.value = ''; // Limpa o campo de entrada
    atualizarLista();
}

// Função para atualizar a lista de amigos na tela
function atualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; // Limpa a lista para evitar duplicatas

    listaDeAmigos.forEach((nome, index) => {
        let item = document.createElement('li');
        item.textContent = nome;

        // Botão para remover um nome da lista
        let botaoRemover = document.createElement('button');
        botaoRemover.textContent = '❌';
        botaoRemover.onclick = () => removerNome(index);

        item.appendChild(botaoRemover);
        lista.appendChild(item);
    });
}

// Função para remover um amigo da lista
function removerNome(index) {
    listaDeAmigos.splice(index, 1);
    atualizarLista();
}

// Função para sortear um amigo aleatório
function sortearAmigo() {
    if (listaDeAmigos.length === 0) {
        alert('Adicione pelo menos um nome antes de sortear.');
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
    let amigoSorteado = listaDeAmigos[indiceAleatorio];

    // Exibe o resultado na tela
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `🎉 O amigo sorteado é: <strong>${amigoSorteado}</strong>!`;
}
