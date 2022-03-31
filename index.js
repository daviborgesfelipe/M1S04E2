function calculadora() {
    let operacao = window.prompt("Qual operação matemática? [ + , - , * , / ]");
    let num1 = parseFloat(window.prompt("Digite um número"));
    let num2 = parseFloat(window.prompt("Digite um número"));
    let resultado ;
    switch(operacao){
        case '+':
            resultado = num1 + num2;
            alert("Adição :" + resultado)
            break;
        case '-':
            resultado = num1 - num2
            alert("Subtração :" + resultado)
            break;
        case '/':
            resultado = num1 / num2;
            alert("Divisão :" + resultado)
            break;
        case '*':
            resultado = num1 * num2;
            alert("Multiplicação :" + resultado)
            break;
        default:
            console.log("Digite uma operação valida")
    }
}