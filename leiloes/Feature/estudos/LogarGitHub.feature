#language: pt
#Author: Wesley Pereira de Jesus
#Keywords Summary : GitHub
Funcionalidade: Logar no Github
  Eu quero logar no github.

  Cenário: Loga no github
    Dado Eu estou na pagina inicial
    Quando o usuario navega para a pagina de login
    E checa que está na pagina de login
    E insere usuario e senha
    E clica no botão logar
    Então exibe mensagem de sucesso
