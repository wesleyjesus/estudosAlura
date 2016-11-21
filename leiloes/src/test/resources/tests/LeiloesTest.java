package tests;


import static org.junit.Assert.assertTrue;

import org.junit.Test;

import app.utils.SeleniumBaseTest;
import test.pages.NovoLeilaoPage;

public class LeiloesTest extends SeleniumBaseTest {
	
	@Test
	public void deveAdicionarUmLeilao() {
		
		usuarios.visita();
		usuarios.novoUsuario().cadastra("Paulo Henrique", "paulohenrique@email.com.br");
		
		leiloes.visita();
		leiloes.novoLeilao().cadastroLeilao("Geladeira", 123.00, "Paulo Henrique", true);
			
		assertTrue("Leilão não cadastrado!" , leiloes.existeLeilao("Geladeira", 123.00, "Paulo Henrique", true));

	}
	
	@Test
	public void naoDeveAdicionarLeilaoSemNomeOuValor() {

		NovoLeilaoPage form = leiloes.novoLeilao();
		
		form.cadastroLeilao("", 0, "Paulo Henrique", true);
		
		assertTrue("Aviso de nome obrigatorio", form.validaNomeLeilaoObrigatorio());
	

	}
	
}
