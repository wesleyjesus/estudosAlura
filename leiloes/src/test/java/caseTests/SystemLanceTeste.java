package caseTests;

import static org.junit.Assert.assertTrue;

import org.junit.Test;

import pages.DetalhesDoLeilaoPage;
import utils.SeleniumBaseTest;

public class SystemLanceTeste extends SeleniumBaseTest {
	
	@Test
	public void deveFazerUmlance(){
		DetalhesDoLeilaoPage lances = leiloes.detalhes(1);
		
		lances.lance("José Alberto", 150);
		
		assertTrue(lances.existeLance("José Alberto",150));
	}
	
	

}
