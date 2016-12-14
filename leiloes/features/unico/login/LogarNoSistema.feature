#language: pt
#Author: Wesley Pereira de Jesus
#Keywords Summary : Login, sistema, Unico.
Funcionalidade: Realizar login no sistema
  
  Eu quero ter acesso a pagina de login do sistema e realizar o login no mesmo.

  Fundo:
  	Dado eu estou na pagina de login do Unico
    E checo que o título da pagina é "Ministério Público Federal"
  
  Delineação do Cenário: Logar com Credenciais Válidas
    Quando o usuario entra com "<usuario>" e "<senha>" validos
    E clica no botão 'Entrar' com name = "Submit"
    Então vejo o link "Único"
    E certifico que existe os icones dos modulos do sistema
   Exemplos:
    	| usuario               		| senha                		 |
      | wesleyjesus@mpf.mp.br 		| wesleyjesus@mpf.mp.br		 |

  Cenário: Logar com Credenciais Inválidas
    Quando o usuario entra com usuario e senha invalidos:
      | usuario               | senha |
      | wesleyjesus@mpf.mp.br |   123 |
    E clica no botão 'Entrar' com name = "Submit"
    Então vejo a mensagem "-E-mail e/ou senha inválidos."
