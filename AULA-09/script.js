var corpo = document.body
var p1 = document.getElementsByTagName('p') [1] //Como tem duas tags 'p' e necessário utlizar uma 'array' para definir qual você quer utilizar, assim escolhi a primeira - sendo representado pelo 0.

//var d = document.getElementById('msg');

var d = document.querySelector('div#msg'); //você seleciona conforme a formatação, sempre utilizando a div e o símbolo que e utilizado no css para representar id e class.


document.write(p1.innerHTML); //innerHTML - ele traz o que está na tag 'p' exatamente como está formatado.

//p1.style.color = 'blue';//Modifique apenas a tag escolhida para azul.

//corpo.style.background = 'black'; //Modifiquei a cor do site

//document.write(`Está escrito assim: ${p1.innerText}`); //innerText - O texto que está dentro da tag da posição escolhida.

//d.style.background = 'green'; // Coloquei uma cor de fundo para o que tinha dentro da div
        
d.innerHTML = 'Estou Aguardando.' // Modifiquei por JavaScript o conteúdo que estva anterior na div.

d.style.background = 'blue';