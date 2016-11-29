#language: pt
#Author: Wesley Pereira de Jesus
#Keywords Summary : Logar no Unico

Funcionalidade: Login Sucesso com Credenciais Válidas.
  Eu quero ter acesso a pagina de login do sistema realizar o login no mesmo.

  Cenário: Login realizado com sucesso
    Dado eu estou na pagina de login do Unico
    E checo que o título da pagina é "Ministério Público Federal"
    Quando o usuario entra com usuario e senha validos:
    |	usuario										|	senha									|
    |	wesleyjesus@mpf.mp.br			|	wesleyjesus@mpf.mp.br |
    E clica no botão 'Entrar' com name = "Submit"
    Então vejo o link "Único"
    E certifico que existe os icones dos modulos do sistema