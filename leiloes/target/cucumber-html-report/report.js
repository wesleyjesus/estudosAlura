$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("documentos/IncluirDocumentoExpedido.feature");
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
      "value": "#Keywords Summary : Incluir, documento, expedido."
    }
  ],
  "line": 4,
  "name": "Manter Documento expedido",
  "description": "\r\n Como um usuário do Unico\r\n Eu quero acessar o formulário de inclusão de documento expedido\r\n Para que eu possa incluir as informações do documento no sistema.",
  "id": "manter-documento-expedido",
  "keyword": "Funcionalidade"
});
formatter.before({
  "duration": 259845,
  "status": "passed"
});
formatter.before({
  "duration": 4610915929,
  "status": "passed"
});
formatter.before({
  "duration": 151981052,
  "error_message": "org.openqa.selenium.SessionNotCreatedException: Unable to create new remote session. desired capabilities \u003d Capabilities [{browserName\u003dchrome, version\u003d, platform\u003dANY}], required capabilities \u003d Capabilities [{}]\nBuild info: version: \u00273.0.1\u0027, revision: \u00271969d75\u0027, time: \u00272016-10-18 09:49:13 -0700\u0027\nSystem info: host: \u0027PGRP00086946\u0027, ip: \u002710.222.122.226\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_102\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:91)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:141)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:601)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:241)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:128)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:155)\r\n\tat stepDefinitions.unico.documentos.IncluirDocumentoEletronicoExpedidoSteps.setUp(IncluirDocumentoEletronicoExpedidoSteps.java:34)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:459)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:678)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:382)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:192)\r\n",
  "status": "failed"
});
formatter.background({
  "line": 10,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Fundo"
});
formatter.step({
  "line": 11,
  "name": "eu estou na pagina de login do Unico",
  "keyword": "Dado "
});
formatter.step({
  "line": 12,
  "name": "checo que o título da pagina é \"Ministério Público Federal\"",
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "o usuario entra com \"wesleyjesus@mpf.mp.br\" e \"wesleyjesus@mpf.mp.br\" validos",
  "keyword": "Quando "
});
formatter.step({
  "line": 14,
  "name": "clica no botão \u0027Entrar\u0027 com name \u003d \"Submit\"",
  "keyword": "E "
});
formatter.match({
  "location": "LogarSistemaUnicoSteps.eu_estou_na_pagina_de_login_do_Unico()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "wesleyjesus@mpf.mp.br",
      "offset": 21
    },
    {
      "val": "wesleyjesus@mpf.mp.br",
      "offset": 47
    }
  ],
  "location": "LogarSistemaUnicoSteps.o_usuario_entra_com_e_validos(String,String)"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.scenario({
  "line": 16,
  "name": "Incluir documento expedido sem realizar upload e ckeditor, dados obrigatórios, formato eletrônico e natureza Administrativa",
  "description": "",
  "id": "manter-documento-expedido;incluir-documento-expedido-sem-realizar-upload-e-ckeditor,-dados-obrigatórios,-formato-eletrônico-e-natureza-administrativa",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "line": 17,
  "name": "acesso a tela de incluir documento expedido",
  "keyword": "Dado "
});
formatter.step({
  "line": 18,
  "name": "certifico que o titulo da pagina é \"Documentos - Incluir Documento Expedido — Sistema Único\"",
  "keyword": "E "
});
formatter.step({
  "line": 19,
  "name": "certifico que a url do navegador contem “/incluir/expedido”",
  "keyword": "E "
});
formatter.step({
  "line": 20,
  "name": "seleciono o formato eletrônico",
  "keyword": "Quando "
});
formatter.step({
  "line": 21,
  "name": "seleciono natureza “Administrativa”",
  "keyword": "E "
});
formatter.step({
  "line": 22,
  "name": "certifico que os campos \"assunto\" e \"descricaoComplementoAssunto\" estão sendo exibidos",
  "keyword": "E "
});
formatter.step({
  "line": 23,
  "name": "preenche os seguintes campos obrigatórios:",
  "rows": [
    {
      "cells": [
        "tipoDocumento",
        "assunto",
        "resumo",
        "responsavel assinatura"
      ],
      "line": 24
    },
    {
      "cells": [
        "OFÍCIO",
        "link\u003d03.05.07 FÉRIAS",
        "Teste documento expedido, formato eletrônico, não digitalizado e apenas campos obrigatórios.",
        "Wesley Pereira de Jesus - SERVIDOR"
      ],
      "line": 25
    }
  ],
  "keyword": "E "
});
formatter.step({
  "line": 26,
  "name": "certifico que o botão salvar-inclusao está habilitado",
  "keyword": "E "
});
formatter.step({
  "line": 27,
  "name": "clica no botão salvar-inclusao",
  "keyword": "E "
});
formatter.step({
  "line": 28,
  "name": "certifico que a mensagem “Documento incluído.” é exibida",
  "keyword": "Então "
});
formatter.match({
  "location": "IncluirDocumentoEletronicoExpedidoSteps.acesso_a_tela_de_incluir_documento_expedido()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Documentos - Incluir Documento Expedido — Sistema Único",
      "offset": 36
    }
  ],
  "location": "IncluirDocumentoEletronicoExpedidoSteps.certifico_que_o_titulo_da_pagina_é(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "IncluirDocumentoEletronicoExpedidoSteps.certifico_que_a_url_do_navegador_contem_incluir_expedido()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "IncluirDocumentoEletronicoExpedidoSteps.seleciono_o_formato_eletrônico()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "IncluirDocumentoEletronicoExpedidoSteps.seleciono_natureza_Administrativa()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "assunto",
      "offset": 25
    },
    {
      "val": "descricaoComplementoAssunto",
      "offset": 37
    }
  ],
  "location": "IncluirDocumentoEletronicoExpedidoSteps.certifico_que_os_campos_e_estão_sendo_exibidos(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "IncluirDocumentoEletronicoExpedidoSteps.preenche_os_seguintes_campos_obrigatórios(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "IncluirDocumentoEletronicoExpedidoSteps.certifico_que_o_botão_salvar_inclusao_está_habilitado()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "IncluirDocumentoEletronicoExpedidoSteps.clica_no_botão_salvar_inclusao()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "IncluirDocumentoEletronicoExpedidoSteps.certifico_que_a_mensagem_Documento_incluído_é_exibida()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 933930247,
  "status": "passed"
});
formatter.after({
  "duration": 91902,
  "error_message": "java.lang.NullPointerException\r\n\tat stepDefinitions.unico.documentos.IncluirDocumentoEletronicoExpedidoSteps.tearDown(IncluirDocumentoEletronicoExpedidoSteps.java:115)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:459)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:678)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:382)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:192)\r\n",
  "status": "failed"
});
formatter.uri("login/LogarNoSistema.feature");
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
formatter.scenarioOutline({
  "line": 12,
  "name": "Logar com Credenciais Válidas",
  "description": "",
  "id": "realizar-login-no-sistema;logar-com-credenciais-válidas",
  "type": "scenario_outline",
  "keyword": "Delineação do Cenário"
});
formatter.step({
  "line": 13,
  "name": "o usuario entra com \"\u003cusuario\u003e\" e \"\u003csenha\u003e\" validos",
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
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "realizar-login-no-sistema;logar-com-credenciais-válidas;",
  "rows": [
    {
      "cells": [
        "usuario",
        "senha"
      ],
      "line": 18,
      "id": "realizar-login-no-sistema;logar-com-credenciais-válidas;;1"
    },
    {
      "cells": [
        "wesleyjesus@mpf.mp.br",
        "wesleyjesus@mpf.mp.br"
      ],
      "line": 19,
      "id": "realizar-login-no-sistema;logar-com-credenciais-válidas;;2"
    }
  ],
  "keyword": "Exemplos"
});
formatter.before({
  "duration": 29857,
  "status": "passed"
});
formatter.before({
  "duration": 3349387451,
  "status": "passed"
});
formatter.before({
  "duration": 144700252,
  "error_message": "org.openqa.selenium.SessionNotCreatedException: Unable to create new remote session. desired capabilities \u003d Capabilities [{browserName\u003dchrome, version\u003d, platform\u003dANY}], required capabilities \u003d Capabilities [{}]\nBuild info: version: \u00273.0.1\u0027, revision: \u00271969d75\u0027, time: \u00272016-10-18 09:49:13 -0700\u0027\nSystem info: host: \u0027PGRP00086946\u0027, ip: \u002710.222.122.226\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_102\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:91)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:141)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:601)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:241)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:128)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:155)\r\n\tat stepDefinitions.unico.documentos.IncluirDocumentoEletronicoExpedidoSteps.setUp(IncluirDocumentoEletronicoExpedidoSteps.java:34)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:459)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:678)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:382)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:192)\r\n",
  "status": "failed"
});
formatter.background({
  "line": 8,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Fundo"
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
formatter.match({
  "location": "LogarSistemaUnicoSteps.eu_estou_na_pagina_de_login_do_Unico()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.scenario({
  "line": 19,
  "name": "Logar com Credenciais Válidas",
  "description": "",
  "id": "realizar-login-no-sistema;logar-com-credenciais-válidas;;2",
  "type": "scenario",
  "keyword": "Delineação do Cenário"
});
formatter.step({
  "line": 13,
  "name": "o usuario entra com \"wesleyjesus@mpf.mp.br\" e \"wesleyjesus@mpf.mp.br\" validos",
  "matchedColumns": [
    0,
    1
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
  "arguments": [
    {
      "val": "wesleyjesus@mpf.mp.br",
      "offset": 21
    },
    {
      "val": "wesleyjesus@mpf.mp.br",
      "offset": 47
    }
  ],
  "location": "LogarSistemaUnicoSteps.o_usuario_entra_com_e_validos(String,String)"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "LogarSistemaUnicoSteps.certifico_que_existe_os_icones_dos_modulos_do_sistema()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 831070223,
  "status": "passed"
});
formatter.after({
  "duration": 91902,
  "error_message": "java.lang.NullPointerException\r\n\tat stepDefinitions.unico.documentos.IncluirDocumentoEletronicoExpedidoSteps.tearDown(IncluirDocumentoEletronicoExpedidoSteps.java:115)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:459)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:678)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:382)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:192)\r\n",
  "status": "failed"
});
formatter.before({
  "duration": 27058,
  "status": "passed"
});
formatter.before({
  "duration": 3371495762,
  "status": "passed"
});
formatter.before({
  "duration": 110612932,
  "error_message": "org.openqa.selenium.SessionNotCreatedException: Unable to create new remote session. desired capabilities \u003d Capabilities [{browserName\u003dchrome, version\u003d, platform\u003dANY}], required capabilities \u003d Capabilities [{}]\nBuild info: version: \u00273.0.1\u0027, revision: \u00271969d75\u0027, time: \u00272016-10-18 09:49:13 -0700\u0027\nSystem info: host: \u0027PGRP00086946\u0027, ip: \u002710.222.122.226\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_102\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:91)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:141)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:601)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:241)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:128)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:155)\r\n\tat stepDefinitions.unico.documentos.IncluirDocumentoEletronicoExpedidoSteps.setUp(IncluirDocumentoEletronicoExpedidoSteps.java:34)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:459)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:678)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:382)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:192)\r\n",
  "status": "failed"
});
formatter.background({
  "line": 8,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Fundo"
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
formatter.match({
  "location": "LogarSistemaUnicoSteps.eu_estou_na_pagina_de_login_do_Unico()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.scenario({
  "line": 21,
  "name": "Logar com Credenciais Inválidas",
  "description": "",
  "id": "realizar-login-no-sistema;logar-com-credenciais-inválidas",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "line": 22,
  "name": "o usuario entra com usuario e senha invalidos:",
  "rows": [
    {
      "cells": [
        "usuario",
        "senha"
      ],
      "line": 23
    },
    {
      "cells": [
        "wesleyjesus@mpf.mp.br",
        "123"
      ],
      "line": 24
    }
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 25,
  "name": "clica no botão \u0027Entrar\u0027 com name \u003d \"Submit\"",
  "keyword": "E "
});
formatter.step({
  "line": 26,
  "name": "vejo a mensagem \"-E-mail e/ou senha inválidos.\"",
  "keyword": "Então "
});
formatter.match({
  "location": "LogarSistemaUnicoSteps.o_usuario_entra_com_usuario_e_senha_invalidos(DataTable)"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.after({
  "duration": 835322915,
  "status": "passed"
});
formatter.after({
  "duration": 73708,
  "error_message": "java.lang.NullPointerException\r\n\tat stepDefinitions.unico.documentos.IncluirDocumentoEletronicoExpedidoSteps.tearDown(IncluirDocumentoEletronicoExpedidoSteps.java:115)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:459)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:678)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:382)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:192)\r\n",
  "status": "failed"
});
});