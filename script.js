class Produto {
    constructor(nome, preco, quantidade) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }

    vender(quantidadeVendida) {
        if (this.quantidade >= quantidadeVendida) {
            this.quantidade -= quantidadeVendida;
            console.log(`Venda realizada. Quantidade restante de '${this.nome}': ${this.quantidade}.`);
        } else {
            console.log('Estoque insuficiente.');
        }
    }

    repor(quantidadeReposta) {
        this.quantidade += quantidadeReposta;
        console.log(`Reposição realizada. Quantidade atual de '${this.nome}': ${this.quantidade}.`);
    }

    mostrarEstoque() {
        console.log(`O produto ${this.nome} possui ${this.quantidade} unidades disponíveis.`);
    }

    atualizarPreco(novoPreco) {
        this.preco = novoPreco;
        console.log(`O preço do produto '${this.nome}' foi atualizado para: R$ ${this.preco.toFixed(2)}`);
    }
}

const produto1 = new Produto('Caneta', 1.50, 100);
produto1.mostrarEstoque();

// Testando o método vender
produto1.vender(10);
produto1.vender(95);

// Testando o método repor
produto1.repor(20);
produto1.mostrarEstoque();

// Adicionando o produto2
const produto2 = new Produto('Caneta BIC Azul', 1.75, 10);
produto2.vender(5);
produto2.mostrarEstoque();

// Atualizando o preço do produto1
produto1.atualizarPreco(2.00);

// Atualizando o preço do produto2
produto2.atualizarPreco(2.25);

class Pessoa {
    constructor(nome, idade, profissao) {
        this.nome = nome;
        this.idade = idade;
        this.profissao = profissao;
    }
}

// Exemplo de como criar um objeto da classe Pessoa
const pessoa1 = new Pessoa('Alana', 36, 'Programadora');
console.log(pessoa1);

class Cliente extends Pessoa {
    constructor(nome, idade, profissao, telefone, email, clienteDesde) {
        super(nome, idade, profissao); // Chama o construtor da classe base (Pessoa)
        this.telefone = telefone;
        this.email = email;
        this.clienteDesde = clienteDesde; // Formato esperado: "ANO-MES-DIA"
    }
}
// Exemplo de como criar um objeto da classe Cliente
const cliente1 = new Cliente('Alana', 36, 'Programadora', '38988391892', 'alanatureza@gmail.com', '2022-11-22');
console.log(cliente1);