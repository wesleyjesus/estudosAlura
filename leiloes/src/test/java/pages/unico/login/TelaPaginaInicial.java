package pages.unico.login;

import static org.junit.Assert.assertEquals;

import org.openqa.selenium.By;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebDriver;

public class TelaPaginaInicial {
	
	private WebDriver driver;
	
	public TelaPaginaInicial(WebDriver driver){
		this.driver = driver;
	}
	
	public void verificaQueEstaTelaInicial(String linkUnico) {
		if (seElementoPresente(By.linkText(linkUnico)) == true) {
			System.out.println("O link 'Único' foi encontrado na tela inicial! Então você está na tela inicial");
		} else {
			System.out.println("O link 'Único' não foi encontrado na tela inicial!");
		}

	}
	
	public void verificaMensagemErroLogin(String mensagem) {
		assertEquals("A mensagem de erro não foi encontrada!", mensagem, driver.findElement(By.cssSelector("#msg")).getText());

	}
	
	public void verificaIconeDosModulosTelaInicial() {
		
		assertEquals("Não foi encontrado o módulo 'Módulo Operacional'!","Módulo Operacional", driver.findElement(By.id("unico-classico")).getText());
		assertEquals("Não foi encontrado o módulo 'Judicial'!","Judicial", driver
				.findElement(By.cssSelector("a[title=\"Acessar o sistema Gerenciador Judicial\"] > p")).getText());
		assertEquals("Não foi encontrado o módulo 'Extrajudicial'!","Extrajudicial", driver
				.findElement(By.cssSelector("a[title=\"Acessar o sistema Gerenciador Extrajudicial\"] > p")).getText());
		assertEquals("Não foi encontrado o módulo 'Administrativo'!","Administrativo",
				driver.findElement(By.cssSelector("a[title=\"Acessar o sistema Gerenciador Administrativo\"] > p"))
						.getText());

	}

	
	private boolean seElementoPresente(By by) {

		try {
			driver.findElement(by);
			return true;
		} catch (NoSuchElementException e) {
			return false;
		}
	}
	
}
