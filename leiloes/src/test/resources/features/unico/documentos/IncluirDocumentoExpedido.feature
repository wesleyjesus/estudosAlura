#language: pt
#Author: Wesley Pereira de Jesus
#Keywords Summary : Incluir, documento, expedido.
Funcionalidade: Manter Documento expedido
  
   Como um usuário do Unico
   Eu quero acessar o formulário de inclusão de documento expedido
   Para que eu possa incluir as informações do documento no sistema.

  Cenário: Incluir documento expedido dados obrigatórios, formato eletrônico e natureza Administrativa
    Dado esteja logado no sistema
    E acessar o formulário de incluir documento expedido
    E certificar que o titulo da pagina contem "Documento Expedido"
    E certificar que a url do navegador contem “/incluir/expedido”
    E certifica que o formato selecionado é "Eletrônico"
    E certifica se o campo “Concluso para assinatura” está sendo exibido
    Quando o usuário seleciona natureza “Administrativa”
    E certifica que os campos “Assunto” e “Complemento do assunto” são exibidos
    E preenche os seguintes campos obrigatórios:
      | tipo documento | resumo                                                                                                                                                         | responsavel assinatura             |
      | Ofício         | Teste caminho feliz inclusão documento expedido, natureza administrativa, apenas dados obrigatórios e incluir íntegra utilizando o editor de texto do sistema. | Wesley Pereira de Jesus - SERVIDOR |
    E certifica que o botão “Salvar e fechar” não está sendo exibido
    E certifica que o botão “Selecionar arquivo PDF” não está sendo exibido
    E clica no botão “Salvar”
    E certifica que a mensagem “Documento incluído.” é exibida.
    E certifica que o painel para edição de integra seja exibido e contenha no título “Documento Expedido” concatenado com o número do documento gerado.
    E insere os campos no Ckeditor.
    E clica no botão  “Salvar”.
    E certifica que a mensagem “Íntegra alterada com sucesso!” está sendo exibida.
    E clica no botão “Salvar e fechar”.
    Então o usuário é redirecionado para a tela de recuperação de documentos.
