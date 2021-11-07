var nome; // Declara a variável nome tipo script
nome=window.prompt( "Olá! Qual o seu nome?", "Digite o seu nome aqui."); // Abre uma caixa de texto para o usuário digitar o nome.
var data=new Date();
var hora=data.getHours();
if (hora <12) // Essa estrutura também pode ser feita através do "If Ternário" da seguinte forma: condição ? código1 : código2.
{
  document.write("<b>Bom dia! "); //Escreve um "Bom dia!" se hora menor que 12.
}
else if (hora <18)
{
  document.write("<b>Boa tarde! "); //Escreve um "Boa tarde!" se hora entre 12 e 18.
}
else // se maior ou igual a 18 escreve "Boa noite!"
{
  document.write("<b>Boa noite! ");
}
document.writeln(nome +", seja bem vindo(a)! Hoje é ");
document.writeln(data +"!<b>");