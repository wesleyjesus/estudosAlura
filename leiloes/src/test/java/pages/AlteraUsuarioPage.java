package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class AlteraUsuarioPage {
private WebDriver driver;
	
	public AlteraUsuarioPage(WebDriver driver){
		this.driver = driver;
	}
	
	public UsuariosPage altera(String nome, String email){
		WebElement txtNome = driver.findElement(By.name("usuario.nome"));
		WebElement txtEmail = driver.findElement(By.name("usuario.email"));
		
		
		txtNome.clear();
		txtEmail.clear();
		
		txtNome.sendKeys(nome);
		txtEmail.sendKeys(email);
		
		WebElement botaoSalvar = driver.findElement(By.id("btnSalvar"));
		botaoSalvar.click();
		return new UsuariosPage(driver);
		
	}
}
