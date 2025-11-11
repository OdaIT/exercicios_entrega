const PRECO_BASE = 250.00;
const PERCENTAGEM_DESCONTO = 0.10; // 10%
const PERCETAGEM_IMPOSTO = 0.20; // 20%
const NOME_ITEM = "Serviço de Consultoria";

console.log( `--- Recibo de Compra ---
    \nItem:${NOME_ITEM}
    \nPreço base:${PRECO_BASE} €
    \nDesconto aplicado:${PRECO_BASE*PERCENTAGEM_DESCONTO} €
    \nPreço líquido:${PRECO_BASE*(1-PERCENTAGEM_DESCONTO)} €
    \nImposto(20%):${(PRECO_BASE*(1-PERCENTAGEM_DESCONTO))*PERCETAGEM_IMPOSTO} €
    \nTotal a pagar:${(PRECO_BASE*(1-PERCENTAGEM_DESCONTO))*(1+PERCETAGEM_IMPOSTO)} €
    `)