package test.pages;

import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

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
	
	public void excluiLeilao(int posicao) {
		driver.findElements(By.tagName("button")).get(posicao-1).click();
		
		Alert alert = driver.switchTo().alert();
		alert.accept();
	}

}
