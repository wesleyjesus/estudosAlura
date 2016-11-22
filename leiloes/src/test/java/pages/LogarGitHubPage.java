package pages;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class LogarGitHubPage {
	
	private static final String URL = "https://github.com/";
	
	private WebDriver driver;
	
	public LogarGitHubPage(WebDriver driver){
		this.driver = driver;
	}
	
	public void acessaPaginaInicial(){
		driver.get(URL);
	}
	
	public void clicaNoLinkLogin(String link){
		driver.findElement(By.linkText(link)).click();
	}
	
	public void verificaPaginaLogin(){
		Assert.assertEquals("Sign in to GitHub", driver.findElement(By.xpath("\\h1")).getText());
	}
	
	public void logaGitHub(String usuario, String senha) {
		WebElement txtUsuario = driver.findElement(By.name("login"));
		WebElement txtSenha = driver.findElement(By.name("password"));
				
		txtUsuario.sendKeys(usuario);
		txtSenha.sendKeys(senha);
		
		
	}
	
	public void clicaLogar(){
		driver.findElement(By.name("commit")).click();
	}
	
	public String mensageLoginSucess(){
		String mensagem = "Login realizado com sucesso";
		return mensagem;
	}
	
}
