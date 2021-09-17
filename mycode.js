function Converter() {
    var valorCotacao = document.getElementById("cotacao").value;
    var valorDolar = document.getElementById("valor").value;
    
    var valorEmReais = valorDolar * valorCotacao
    var valorEmReais = valorEmReais.toFixed(2)
    
    var elementoValorConvertido = document.getElementById("valorConvertido")
    var valorConvertido = "O resultado em real é R$" + valorEmReais
    elementoValorConvertido.innerHTML = valorConvertido
  }
  