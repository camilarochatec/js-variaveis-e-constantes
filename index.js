let valor = 10; // number o = é chamado é de recebe.
let nome_completo = 'Nayara' // string é texto snakecase é muito visto no bancodedados
let nomeCompleto = 'Ceasar' // string camelcase
let NomeCompleto = 'Daniel' // string pascalcase é muito visto no react
let verdadeiro = true; // boolean
let falso = false; // boolean

document.writeln(valor);
valor = 20;
document.writeln(valor);
valor = 30;
document.writeln(valor);

document.writeln(nome_completo);
document.writeln(nomeCompleto);
document.writeln(NomeCompleto);
document.writeln(verdadeiro);
document.writeln(falso);

const nomeDaTurma = 'FS18';
document.write("<br><br>"); //o js pode inserir e remover html
document.write(nomeDaTurma);

// Operadores de atribuição
// = recebe, +=atribuidor acrimiental, -= decrimental
let idade = 34;
document.write("<br>");
document.write(idade);
idade = idade + 1;
idade += 1;
document.write("<br>");
document.write(idade);
idade -= 3;
document.write("<br>");
document.write(idade);

// Operadores aritméticos
// +, -, *, /, % resto de operação ou módulo
document.write("<br>");
document.write(2+1);
document.write("<br>");
document.write(4-2);
document.write("<br>");
document.write(2*6);
document.write("<br>");
document.write(6/3);
document.write("<br>");
document.write(2%2); //o % é o resto

// Operadores de comparação o resultado é sempre boleano
// == igaul, != diferente, === estritamente igual, !==, <, >, <=, >=
document.write("<br>");
document.write(2==2);
document.write("<br>");
document.write(2!=2);
document.write("<br>");
document.write(2===2);
document.write("<br>");
document.write(2==='2');
document.write("<br>");
document.write(2!==2);
document.write("<br>");
document.write(2!=='2');
document.write("<br>");
document.write(2>2);
document.write("<br>");
document.write(2<2);
document.write("<br>");
document.write(2<=2);
document.write("<br>");
document.write(2>=2);

// Operadores lógicos
// !, negação !!,dupla negação &&, e || or comoaração true or false
document.write("<br>"); //é só uma quebradelinha
document.write("<br>");
document.write("<br>");
document.write(!true); //não é vderdadeiro
document.write("<br>");
document.write(!!3);
document.write("<br>");
document.write(3==3 && 2==2);
document.write("<br>");
document.write(3==3 && 2==3);
document.write("<br>");
document.write(3==4 || 2==2);
document.write("<br>");
document.write(3!=3 || 2>2);