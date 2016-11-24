#language: pt
#Author: Wesley Pereira de Jesus
#Keywords Summary : GitHub

Funcionalidade: Logar no sistema Unico.
  Eu quero ter acesso a pagina de login do sistema realizar o login no mesmo.

  Cenário: Login realizado com sucesso
    Dado eu estou na pagina de login do Unico
    Quando o usuario navega para a pagina de login
    E checa que está na pagina de login
    E insere usuario e senha
    E clica no botão logar
    Então exibe mensagem de sucesso