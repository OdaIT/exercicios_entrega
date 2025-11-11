const RENDIMENTO_MENSAL = 3000;
const IDADE = 21;
const TEM_DIVIDAS = true;
const ANOS_TRABALHO = 2;

const APROVACAO =
  RENDIMENTO_MENSAL >= 3000 && IDADE >= 25
    ? console.log("Aprovado Nível 1: Crédito de Alto Risco (Valor Máximo: 50.000 EUR).")
    : RENDIMENTO_MENSAL >= 1500 && IDADE >= 20 && !TEM_DIVIDAS
    ? console.log("Aprovado Nível 2: Crédito Padrão (Valor Máximo: 10.000 EUR).")
    : console.log("Recusado: Não cumpre os critérios mínimos de elegibilidade.") ;