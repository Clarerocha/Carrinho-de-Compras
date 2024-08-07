 let totalGeral = 0;//O valor começa com o valor do carrinho vazio.
 document.getElementById('lista-produtos').innerHTML = '';
 document.getElementById('valor-total').textContent = 'R$ 0';

function adicionar() {
    //recuperar valores nome do produto, quantidade e valor

    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0]; //como há duas informações no nome do produto, eu usei o split para separar.
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;

    //calcular o preço, o nosso subtotal    
    let preco = quantidade * valorUnitario;
    
     //adicionar no carrinho
     let carrinho = document.getElementById('lista-produtos');
     carrinho.innerHTML =  carrinho.innerHTML + `<section class="carrinho__produtos__produto">
     <span class="texto-azul"> ${quantidade} x</span> ${nomeProduto} <span class="texto-azul">R$ ${valorUnitario}</span>
   </section>`;

   //Atualizar valor total

   totalGeral = totalGeral + preco;
   let campoValorTotal = document.getElementById('valor-total');
   campoValorTotal.textContent = `R$ ${totalGeral}`; 
   document.getElementById('quantidade').value = '0';
} 
function limpar() {

     totalGeral = 0;
     document.getElementById('lista-produtos').innerHTML = '';
     document.getElementById('valor-total').textContent = 'R$ 0';
     
     
}

