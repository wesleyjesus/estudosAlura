#language: pt
#Author: Wesley Pereira de Jesus
#Keywords Summary : GitHub

Funcionalidade: Login Sucesso com Credenciais Válidas.
  Eu quero ter acesso a pagina de login do sistema realizar o login no mesmo.

  Cenário: Login realizado com sucesso
    Dado eu estou na pagina de login do Unico
    Quando checar que esta na pagina de login
    E usuario entra com usuario e senha validos
    E clica no botão 'Entrar'
    Então checa que esta na pagina inicial do sistema
    E certifica que existe os icones dos modulos do sistema