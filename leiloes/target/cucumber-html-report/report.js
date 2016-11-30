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
      "value": "#Keywords Summary : Login, sistema, Unico."
    }
  ],
  "line": 4,
  "name": "Realizar login no sistema",
  "description": "\nEu quero ter acesso a pagina de login do sistema e realizar o login no mesmo.",
  "id": "realizar-login-no-sistema",
  "keyword": "Funcionalidade"
});
formatter.before({
  "duration": 2388183016,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Logar com Credenciais Válidas",
  "description": "",
  "id": "realizar-login-no-sistema;logar-com-credenciais-válidas",
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
  "name": "checo que o título da pagina é \"Ministério Público Federal\"",
  "keyword": "E "
});
formatter.step({
  "line": 11,
  "name": "o usuario entra com usuario e senha validos:",
  "rows": [
    {
      "cells": [
        "usuario",
        "senha"
      ],
      "line": 12
    },
    {
      "cells": [
        "wesleyjesus@mpf.mp.br",
        "wesleyjesus@mpf.mp.br"
      ],
      "line": 13
    }
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 14,
  "name": "clica no botão \u0027Entrar\u0027 com name \u003d \"Submit\"",
  "keyword": "E "
});
formatter.step({
  "line": 15,
  "name": "vejo o link \"Único\"",
  "keyword": "Então "
});
formatter.step({
  "line": 16,
  "name": "certifico que existe os icones dos modulos do sistema",
  "keyword": "E "
});
formatter.match({
  "location": "LogarSistemaUnicoSteps.eu_estou_na_pagina_de_login_do_Unico()"
});
formatter.result({
  "duration": 220274082,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ministério Público Federal",
      "offset": 32
    }
  ],
  "location": "LogarSistemaUnicoSteps.checo_que_o_título_da_pagina_é(String)"
});
formatter.result({
  "duration": 9083169,
  "status": "passed"
});
formatter.match({
  "location": "LogarSistemaUnicoSteps.o_usuario_entra_com_usuario_e_senha_validos(DataTable)"
});
formatter.result({
  "duration": 106791850,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Submit",
      "offset": 36
    }
  ],
  "location": "LogarSistemaUnicoSteps.clica_no_botão_Entrar_com_name(String)"
});
formatter.result({
  "duration": 1240071378,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Único",
      "offset": 13
    }
  ],
  "location": "LogarSistemaUnicoSteps.vejo_o_link(String)"
});
formatter.result({
  "duration": 17641035,
  "status": "passed"
});
formatter.match({
  "location": "LogarSistemaUnicoSteps.certifico_que_existe_os_icones_dos_modulos_do_sistema()"
});
formatter.result({
  "duration": 101733827,
  "status": "passed"
});
formatter.after({
  "duration": 957852136,
  "status": "passed"
});
formatter.before({
  "duration": 1615550087,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Logar com Credenciais Inválidas",
  "description": "",
  "id": "realizar-login-no-sistema;logar-com-credenciais-inválidas",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "line": 19,
  "name": "eu estou na pagina de login do Unico",
  "keyword": "Dado "
});
formatter.step({
  "line": 20,
  "name": "checo que o título da pagina é \"Ministério Público Federal\"",
  "keyword": "E "
});
formatter.step({
  "line": 21,
  "name": "o usuario entra com usuario e senha invalidos:",
  "rows": [
    {
      "cells": [
        "usuario",
        "senha"
      ],
      "line": 22
    },
    {
      "cells": [
        "wesleyjesus@mpf.mp.br",
        "123"
      ],
      "line": 23
    }
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 24,
  "name": "clica no botão \u0027Entrar\u0027 com name \u003d \"Submit\"",
  "keyword": "E "
});
formatter.step({
  "line": 25,
  "name": "vejo a mensagem \"-E-mail e/ou senha inválidos.\"",
  "keyword": "Então "
});
formatter.match({
  "location": "LogarSistemaUnicoSteps.eu_estou_na_pagina_de_login_do_Unico()"
});
formatter.result({
  "duration": 245221773,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ministério Público Federal",
      "offset": 32
    }
  ],
  "location": "LogarSistemaUnicoSteps.checo_que_o_título_da_pagina_é(String)"
});
formatter.result({
  "duration": 6397873,
  "status": "passed"
});
formatter.match({
  "location": "LogarSistemaUnicoSteps.o_usuario_entra_com_usuario_e_senha_invalidos(DataTable)"
});
formatter.result({
  "duration": 105988500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Submit",
      "offset": 36
    }
  ],
  "location": "LogarSistemaUnicoSteps.clica_no_botão_Entrar_com_name(String)"
});
formatter.result({
  "duration": 143884956,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "-E-mail e/ou senha inválidos.",
      "offset": 17
    }
  ],
  "location": "LogarSistemaUnicoSteps.vejo_a_mensagem(String)"
});
formatter.result({
  "duration": 28503049,
  "status": "passed"
});
formatter.after({
  "duration": 952406900,
  "status": "passed"
});
});