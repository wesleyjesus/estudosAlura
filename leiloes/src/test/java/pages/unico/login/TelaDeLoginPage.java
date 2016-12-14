package pages.unico.login;

import static org.junit.Assert.assertEquals;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class TelaDeLoginPage {
	
	private WebDriver driver;
	
	
	
	public TelaDeLoginPage(WebDriver driver) {
		this.driver = driver;
	}
	
	public void abriTelaLogin(){
		driver.get("https://login-desenv.mpf.mp.br/cas/login?service=http%3A%2F%2Funico-homologacao-02.mpf.mp.br%2Funico%2Fj_spring_cas_security_check");
	}
	
	public void verificaTituloTelaDeLogin(String tituloPaginaLogin){
		assertEquals("O título da pagina não foi encontrado!", tituloPaginaLogin, driver.getTitle());
	}
	
	
	//Preenche usuario e senha
	public void logaSistemaUnico(String usuario, String senha){
		
		//pega os elementos da tela de login
		WebElement txtUsuario = driver.findElement(By.id("username"));
		WebElement txtSenha = driver.findElement(By.id("password"));
				
		txtUsuario.sendKeys(usuario);
		txtSenha.sendKeys(senha);
		
	}
	
	//Aciona o botão Entrar
	public void clicaBotaoEntrar(String txtBotaoEntrar) {

		// Clica no botão "Entrar" da tela de login
		driver.findElement(By.name(txtBotaoEntrar)).click();
		
	}
	
}
