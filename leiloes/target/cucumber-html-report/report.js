$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("LogarNoSistema.feature");
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
  "line": 5,
  "name": "Login Sucesso com Credenciais Válidas.",
  "description": "Eu quero ter acesso a pagina de login do sistema realizar o login no mesmo.",
  "id": "login-sucesso-com-credenciais-válidas.",
  "keyword": "Funcionalidade"
});
formatter.before({
  "duration": 4691877165,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Login realizado com sucesso",
  "description": "",
  "id": "login-sucesso-com-credenciais-válidas.;login-realizado-com-sucesso",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "line": 9,
  "name": "eu estou na pagina de login do Unico",
  "keyword": "Dado "
});
formatter.step({
  "line": 10,
  "name": "checar que esta na pagina de login",
  "keyword": "Quando "
});
formatter.step({
  "line": 11,
  "name": "usuario entra com usuario e senha validos",
  "keyword": "E "
});
formatter.step({
  "line": 12,
  "name": "clica no botão \u0027Entrar\u0027",
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "checa que esta na pagina inicial do sistema",
  "keyword": "Então "
});
formatter.step({
  "line": 14,
  "name": "certifica que existe os icones dos modulos do sistema",
  "keyword": "E "
});
formatter.match({
  "location": "LogarSistemaUnicoSteps.eu_estou_na_pagina_de_login_do_Unico()"
});
formatter.result({
  "duration": 450896537,
  "status": "passed"
});
formatter.match({
  "location": "LogarSistemaUnicoSteps.checar_que_esta_na_pagina_de_login()"
});
formatter.result({
  "duration": 22745711,
  "error_message": "org.junit.ComparisonFailure: O título da pagina não foi encontrado! expected:\u003cMinistério Público [teste ]Federal\u003e but was:\u003cMinistério Público []Federal\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat unico.pages.TelaDeLoginPage.verificaTituloTelaDeLogin(TelaDeLoginPage.java:34)\r\n\tat unico.login.stepDefinition.LogarSistemaUnicoSteps.checar_que_esta_na_pagina_de_login(LogarSistemaUnicoSteps.java:37)\r\n\tat ✽.Quando checar que esta na pagina de login(LogarNoSistema.feature:10)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LogarSistemaUnicoSteps.usuario_entra_com_usuario_e_senha_validos()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LogarSistemaUnicoSteps.clica_no_botão_Entrar()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LogarSistemaUnicoSteps.checa_que_esta_na_pagina_inicial_do_sistema()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LogarSistemaUnicoSteps.certifica_que_existe_os_icones_dos_modulos_do_sistema()"
});
formatter.result({
  "status": "skipped"
});
});