var runasGrandes = document.getElementById('runasGrandes');
var	runasRegulares = document.getElementById('runasRegulares');
var	paginasRunas = document.getElementById('paginasRunas');
var	essenciaAtual = document.getElementById('essenciaAtual');
var	ipAtual = document.getElementById('ipAtual');
var resultado = document.getElementById('resultado'); 
var calcular = document.getElementById('calcular');
function conversaoParaEssencia(){
conversao = (runasRegulares.value * 100) +(runasGrandes.value * 300) +
(paginasRunas.value * 1500) + (essenciaAtual.value * 6.5) + (ipAtual.value * 1);

resultado.innerText =conversao.toString().replace('.',',');
}
calcular.onclick =  function() {conversaoParaEssencia()};
