/*
1)Crie uma variável chamada “fruta”. Esta variável deve receber uma string com o nome de uma fruta.
a)Se a fruta for maçã, retorne no console: “Não vendemos esta fruta aqui”.
b)Se for kiwi, retorne: “Estamos com escassez de kiwis”.
c)Se for melancia, retorne: “Aqui está, são 3 reais o quilo”.
d)Se não for nenhum dos valores, deverá retornar uma mensagem de erro no console: Procure o administrador do sistema!
*/

function market(fruta){
    switch(fruta){
      case "maçã":
        console.log("Não vendemos esta fruta aqui")
      break;
      case "Kiwi":
        console.log("Estamos com escassez de kiwis")
      break;
      case "melancia":
        console.log("Aqui está, são 3 reais o quilo")
      break;
      default:
        console.log("Procure o administrador do sistema!")
       break;
    }
  }

  market("maçã");
  
  /*
  2)As Organizações Tabajara resolveram dar um aumento de salário aos seus colaboradores. Criar variáveis que tenham o salário do colaborador e o reajuste segundo o seguinte critério, baseado no salário atual:
  a)Salarios até R$ 280,00 (incluindo) : aumento de 20%
  b)Salários entre R$ 280,00 e R$ 700,00 : aumento de 15%
  c)Salários entre R$ 700,00 e R$ 1500,00 : aumento de 10%
  d)Salários de R$ 1500,00 em diante : aumento de 5%
  */
  
  function reajuste(money){
    if(money <= 280){
      let dinheiros = money * 0.2
      console.log("seu salario era de " + money + "R$, com o bonus de 20% passou a ser de " + (dinheiros + money).toFixed(2)+"R$ aumento de "+ dinheiros+"R$")
    }
    
    else if(money >= 280 && money <= 700){
      let dinheiros = money * 0.15
      console.log("seu salario era de " + money + "R$, com o bonus de 15% passou a ser de " +(dinheiros + money).toFixed(2)+"R$ aumento de "+ dinheiros+"R$")
    }
    
    else if(money >= 700 && money <= 1500){
      let dinheiros = money * 0.10
      console.log("seu salario era de " + money + "R$, com o bonus de 10% passou a ser de " +(dinheiros + money).toFixed(2)+"R$ aumento de "+ dinheiros+"R$")
    }
      
     else if(money > 1500){
       let dinheiros = money * 0.05
       console.log("seu salario era de " + money + "R$, com o bonus de 5% passou a ser de " +(dinheiros + money).toFixed(2)+"R$, aumento de "+ dinheiros+"R$")
    }
}

