package test.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;

public class NovoLeilaoPage {
	
	private WebDriver driver;
	
	public NovoLeilaoPage(WebDriver driver){
		this.driver = driver;
	}
	
	public void cadastroLeilao(String nomeLeilao, double valorInicial, String usuario, boolean usado){
		
		WebElement txtNomeLeilao = driver.findElement(By.name("leilao.nome"));
		txtNomeLeilao.sendKeys(nomeLeilao);
		
		WebElement txtValorInicial = driver.findElement(By.name("leilao.valorInicial"));
		txtValorInicial.sendKeys(String.valueOf(valorInicial));
		
		WebElement combo = driver.findElement(By.name("leilao.usuario.id"));
		Select cbUsuario = new Select(combo);			
		cbUsuario.selectByVisibleText(usuario);
		
		if(usado){
			WebElement ckUsado = driver.findElement(By.name("leilao.usado"));
			ckUsado.click();	
		}
		
		WebElement botaoSalvar = driver.findElement(By.id("btnSalvarLeilao"));
		botaoSalvar.click();
		
	}
	
	public boolean validaNomeLeilaoObrigatorio() {
		return driver.getPageSource().contains("Nome obrigatorio!");
	}
	
	public boolean validaDeValorInicialObrigatorio() {
		return driver.getPageSource().contains("Valor inicial deve ser maior que zero!");
	}

}