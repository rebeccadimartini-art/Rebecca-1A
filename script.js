const botoes = document.querySelectorAll("button")

botoes.forEach(function(botao) {
  let curtiu= false;
  botao.addEventListener("click", botaoClicado);
  function botaoClicado() {
    console.log("fui clicado");
    let texto" = botao.querySelector("span");
    if (curtiu === false) {
      texto.texContent++;   
    }
  }
});
cosnt btnTemaEscuro " document.querySelector(".btn-tema-escuro");
btnTemaEscuro.addEventListemer("click", mudarTema);
function mudarTema(){
  const corpoPagina = document.body;
  if (corpoPagina.clasiList.contains("tema-esucro")){
  corpoPagina.clasList.remove("tema-escuro");
  } else {
    corpoPagina.clasList.add("tema-escuro");
  }
}
