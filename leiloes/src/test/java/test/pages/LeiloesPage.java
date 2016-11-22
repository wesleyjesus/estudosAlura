package test.pages;

import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import antlr.collections.List;

public class LeiloesPage {
	
	private WebDriver driver;
	
	public LeiloesPage(WebDriver driver) {
		this.driver = driver;
	}
	
	public void visita(){
		driver.get("http://localhost:8080/leiloes");
	}
	
	public NovoLeilaoPage novoLeilao(){
		//Clica no link de novo leilão
		driver.findElement(By.linkText("Novo Leilão")).click();
		return new NovoLeilaoPage(driver);
	}
	
	public boolean existeLeilao(String nomeLeilao, double valorInicial, String usuario, boolean usado){
        // Verifica se ambos existem na listagem
		return driver.getPageSource().contains(nomeLeilao)
				&& driver.getPageSource().contains(String.valueOf(valorInicial))
				&& driver.getPageSource().contains(usado ? "Sim" : "Não");
    }
	
//	public DetalhesDoLeilaoPage exibirLeilao(int posicao) {
//		List<WebElement> elementos = driver.findElements(By.linkText("exibir")).get(posicao - 1).click();
//		
//		return new DetalhesDoLeilaoPage(driver);
//	}

}
