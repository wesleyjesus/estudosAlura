package pages;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;


public class TelaLoginGitHubPage {
	
	private WebDriver driver;
	
	public TelaLoginGitHubPage (WebDriver driver){
		this.driver = driver;
	}
	
	public void verificaSeEstaNaPaginaLogin(){
		Assert.assertEquals("Não foi encontrada a mensagem 'Sign in to GitHub' na pagina de login!", "Sign in to GitHub", driver.findElement(By.xpath(".//*[@id='login']/form/div[2]/h1")).getText());
	}
	
	public void logaGitHub(String usuario, String senha) {
		// pega os elementos usuario e senha do formuário de login
		WebElement txtUsuario = driver.findElement(By.name("login"));
		WebElement txtSenha = driver.findElement(By.name("password"));
				
		// preenche usuário e senha
		txtUsuario.sendKeys(usuario);
		txtSenha.sendKeys(senha);
	}
	
	public void clicaLogar(){
		// submete o formulário de login
		driver.findElement(By.name("commit")).click();
	}
	
	public String mensageLoginSucess(){
		String mensagem = "Login realizado com sucesso!";
		return mensagem;
	}
	
	
}
