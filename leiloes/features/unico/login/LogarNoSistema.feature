#language: pt
#Author: Wesley Pereira de Jesus
#Keywords Summary : Login, sistema, Unico.
Funcionalidade: Realizar login no sistema
  
  Eu quero ter acesso a pagina de login do sistema e realizar o login no mesmo.

  Cenário: Logar com Credenciais Válidas
    Dado eu estou na pagina de login do Unico
    E checo que o título da pagina é "Ministério Público Federal"
    Quando o usuario entra com usuario e senha validos:
      | usuario               | senha                 |
      | wesleyjesus@mpf.mp.br | wesleyjesus@mpf.mp.br |
    E clica no botão 'Entrar' com name = "Submit"
    Então vejo o link "Único"
    E certifico que existe os icones dos modulos do sistema

  Cenário: Logar com Credenciais Inválidas
    Dado eu estou na pagina de login do Unico
    E checo que o título da pagina é "Ministério Público Federal"
    Quando o usuario entra com usuario e senha invalidos:
      | usuario               | senha |
      | wesleyjesus@mpf.mp.br |   123 |
    E clica no botão 'Entrar' com name = "Submit"
    Então vejo a mensagem "-E-mail e/ou senha inválidos."
