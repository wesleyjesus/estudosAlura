package tests;
import static org.junit.Assert.*;

import org.junit.Test;

import pages.NovoUsuarioPage;
import utils.SeleniumBaseTest;

public class UsuariosTest extends SeleniumBaseTest{

	
	@Test
	public void deveExcluirUsuario() {

		usuarios.excluiUsuario(1);
		
		assertFalse(usuarios.existeNaListagem("Joãozinho", "joaozinho@empresa.com.br"));

	
	}
	
	@Test
	public void deveAdicionarUmUsuario() {
		
		usuarios.novoUsuario().cadastra("Joãozinho", "joaozinho@empresa.com.br");
		
		assertTrue("Usuário cadastrado com sucesso!" , usuarios.existeNaListagem("Joãozinho", "joaozinho@empresa.com.br"));

	}
	
	@Test
	public void naoDeveAdicionarUsuarioSemNome() {

		NovoUsuarioPage form = usuarios.novoUsuario();
		
		form.cadastra("", "usuariosemnome@email.com.br");
		
		assertTrue("Aviso de nome obrigatorio", form.validacaoDeNomeObrigatorio());
	

	}
	
	@Test
	public void naoDeveAdicionarUsuarioSemNomeEmal() {

		NovoUsuarioPage form = usuarios.novoUsuario();
		
		form.cadastra("", "");

				
		assertTrue("Não achou aviso de nome obrigatorio", form.validacaoDeNomeObrigatorio());
		assertTrue("Não achou aviso de email obrigatorio", form.validacaoDeEmailObrigatorio());
	
	}
	
	@Test
	public void deveAlterarUsuario() {

		usuarios.novoUsuario().cadastra("Ronaldo Luiz de Albuquerque", "ronaldo@email.com");
		usuarios.editaUsuario(1).altera("Zé Trindade", "zetrindade@email.com");

				
		assertFalse("Usuário alterado com sucesso", usuarios.existeNaListagem("Ronaldo Luiz de Albuquerque", "ronaldo@email.com"));
		assertTrue("Usuário não foi alterado", usuarios.existeNaListagem("Zé Trindade", "zetrindade@email.com"));
	
	}
	

}
