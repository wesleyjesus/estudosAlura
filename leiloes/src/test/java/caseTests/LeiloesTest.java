package caseTests;


import static org.junit.Assert.assertTrue;

import org.junit.Test;

import pages.NovoLeilaoPage;
import utils.SeleniumBaseTest;

public class LeiloesTest extends SeleniumBaseTest {
	
	@Test
	public void deveAdicionarUmLeilao() {
		
		usuarios.novoUsuario().cadastra("Paulo Henrique", "paulohenrique@email.com.br");
		usuarios.novoUsuario().cadastra("José Alberto", "jose@alberto.com");
		
		leiloes.novoLeilao().cadastroLeilao("Computador", 2000.00, "Paulo Henrique", true);
		
			
		assertTrue("Leilão não cadastrado!" , leiloes.existeLeilao("Geladeira", 123.00, "Paulo Henrique", false));

	}
	
	@Test
	public void naoDeveAdicionarLeilaoSemNomeOuValor() {

		NovoLeilaoPage form = leiloes.novoLeilao();
		
		form.cadastroLeilao("", 0, "Paulo Henrique", true);
		
		assertTrue("Aviso de nome obrigatorio", form.validaNomeLeilaoObrigatorio());
	

	}
	

	
}
