#language: pt
#Author: Wesley Pereira de Jesus
#Keywords Summary : Incluir, documento, expedido.
Funcionalidade: Manter Documento expedido
  
   Como um usuário do Unico
   Eu quero acessar o formulário de inclusão de documento expedido
   Para que eu possa incluir as informações do documento no sistema.
   
   Fundo:
  	Dado eu estou na pagina de login do Unico
    E checo que o título da pagina é "Ministério Público Federal"
    Quando o usuario entra com "wesleyjesus@mpf.mp.br" e "wesleyjesus@mpf.mp.br" validos
    E clica no botão 'Entrar' com name = "Submit"

  Cenário: Incluir documento expedido sem realizar upload e ckeditor, dados obrigatórios, formato eletrônico e natureza Administrativa
    Dado acesso a tela de incluir documento expedido
    E certifico que o titulo da pagina é "Documentos - Incluir Documento Expedido — Sistema Único"
    E certifico que a url do navegador contem “/incluir/expedido”
    Quando seleciono o formato eletrônico
    E seleciono natureza “Administrativa”
    E certifico que os campos "assunto" e "descricaoComplementoAssunto" estão sendo exibidos
    E preenche os seguintes campos obrigatórios:
      | tipoDocumento | assunto              | resumo                                                                                       | responsavel assinatura             |
      | OFÍCIO        | link=03.05.07 FÉRIAS | Teste documento expedido, formato eletrônico, não digitalizado e apenas campos obrigatórios. | Wesley Pereira de Jesus - SERVIDOR |
    E certifico que o botão salvar-inclusao está habilitado
    E clica no botão salvar-inclusao
    Então certifico que a mensagem “Documento incluído.” é exibida
