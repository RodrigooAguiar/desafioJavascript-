let n1 = Number(prompt("Digite o primeiro número"))

let n2 = Number(prompt("Digite o segundo número"))

let soma = n1 + n2

alert("A soma dos dois números é: " + (n1 + n2))
alert("A subtração dos dois números é: " + (n1 - n2))
alert("A divisão dos dois números é: " + (n1 / n2))
alert("A multiplicação dos dois números é: " + (n1 * n2))
alert("O resto da divisao dos dois números é: " + (n1 % n2))

if(n1 + n2 %soma === 0 ){
    alert("a soma do número é par")
}else{
    alert("a soma do número é impar")
}
if(n1 === n2){
    alert("os dois números inseridos são iguais")
}else{
    alert("os dois números inseridos são diferentes")
}
