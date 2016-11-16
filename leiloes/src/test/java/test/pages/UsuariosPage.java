package test.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class UsuariosPage {
	private WebDriver driver;
	private WebDriverWait wait;
	
	@FindBy(linkText = "Novo Usuário")
	private WebElement linkNovoUsuario;
	
	public UsuariosPage(WebDriver driver){
		this.driver = driver;
		wait = new WebDriverWait(driver, 40);
	}
	
	public void visita(){
		driver.get("http://localhost:8080/usuarios/new");
		wait.until(ExpectedConditions.visibilityOf(linkNovoUsuario));
	}
	
	public boolean existeNaListagem(String nome, String email){
        return driver.getPageSource().contains(nome) && driver.getPageSource().contains(email);
    }
	
}
