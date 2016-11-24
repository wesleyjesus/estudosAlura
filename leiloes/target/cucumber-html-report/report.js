$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("LogarGitHub.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    },
    {
      "line": 2,
      "value": "#Author: Wesley Pereira de Jesus"
    },
    {
      "line": 3,
      "value": "#Keywords Summary : GitHub"
    }
  ],
  "line": 4,
  "name": "Logar no Github",
  "description": "Eu quero logar no github.",
  "id": "logar-no-github",
  "keyword": "Funcionalidade"
});
formatter.before({
  "duration": 5327672409,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Loga no github",
  "description": "",
  "id": "logar-no-github;loga-no-github",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "line": 8,
  "name": "Eu estou na pagina inicial",
  "keyword": "Dado "
});
formatter.step({
  "line": 9,
  "name": "o usuario navega para a pagina de login",
  "keyword": "Quando "
});
formatter.step({
  "line": 10,
  "name": "checa que está na pagina de login",
  "keyword": "E "
});
formatter.step({
  "line": 11,
  "name": "insere usuario e senha",
  "keyword": "E "
});
formatter.step({
  "line": 12,
  "name": "clica no botão logar",
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "exibe mensagem de sucesso",
  "keyword": "Então "
});
formatter.match({
  "location": "LogaGitHubSteps.eu_estou_na_pagina_inicial()"
});
formatter.result({
  "duration": 5591235465,
  "status": "passed"
});
formatter.match({
  "location": "LogaGitHubSteps.o_usuario_navega_para_a_pagina_de_login()"
});
formatter.result({
  "duration": 733306586,
  "status": "passed"
});
formatter.match({
  "location": "LogaGitHubSteps.checa_que_está_na_pagina_de_login()"
});
formatter.result({
  "duration": 41412626,
  "status": "passed"
});
formatter.match({
  "location": "LogaGitHubSteps.insere_usuario_e_senha()"
});
formatter.result({
  "duration": 129656057,
  "status": "passed"
});
formatter.match({
  "location": "LogaGitHubSteps.clica_no_botão_logar()"
});
formatter.result({
  "duration": 1410165965,
  "status": "passed"
});
formatter.match({
  "location": "LogaGitHubSteps.exibe_mensagem_de_sucesso()"
});
formatter.result({
  "duration": 28458,
  "status": "passed"
});
formatter.after({
  "duration": 2092256913,
  "status": "passed"
});
});