const produtos = [
    { id: 1, nome: 'Vestido Floral', preco: 150.00 },
    { id: 2, nome: 'Blusa de Seda', preco: 120.00 },
    { id: 3, nome: 'macaquinho', preco: 130.00 }
];

let carrinho = [];

function adicionarAoCarrinho(id) {
    const produto = produtos.find(produto => produto.id === id);
    carrinho.push(produto);
    alert("Produto adicionado com sucesso!");
    atualizarCarrinho();
}

function RemoveAoCarrinho(id) {
    const produto1 = produtos.find(produto1 => produto1.id === id);
    carrinho = carrinho.filter(produto1 => produto1.id !== id);
    alert("Produto removido com sucesso!");
    atualizarCarrinho();
}

function atualizarCarrinho() {
    const listaCarrinho = document.getElementById('lista-carrinho');
    const totalCarrinho = document.getElementById('total-carrinho');
    listaCarrinho.innerHTML = '';
    let total = 0;

    carrinho.forEach(produto => {
        const item = document.createElement('li');
        item.textContent = `${produto.nome} - R$ ${produto.preco.toFixed(2)}`;
        listaCarrinho.appendChild(item);
        total += produto.preco;
    });

    totalCarrinho.textContent = total.toFixed(2);
}

document.getElementById('form-contato').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Mensagem enviada com sucesso!');
});
