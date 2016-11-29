package unico.pages.login;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.fail;

import org.junit.After;
import org.openqa.selenium.By;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class TelaDeLoginPage {
	
	private WebDriver driver;
	private String baseUrl;
	private StringBuffer verificationErrors = new StringBuffer();
	
	
	public TelaDeLoginPage(WebDriver driver) {
		this.driver = driver;
	}
	
	public void abriTelaLogin(){
		baseUrl = "https://login-desenv.mpf.mp.br/cas/login?service=http%3A%2F%2Funico-homologacao-02.mpf.mp.br%2Funico%2Fj_spring_cas_security_check";
		driver.get(baseUrl);
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
	
	public void verificaQueEstaTelaInicial(String linkUnico) {
		if (seElementoPresente(By.linkText(linkUnico)) == true) {
			System.out.println("O link 'Único' foi encontrado na tela inicial! Então você está na tela inicial");
		} else {
			System.out.println("O link 'Único' não foi encontrado na tela inicial!");
		}

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



	@After
	public void tearDown() throws Exception {
		driver.quit();
		String verificationErrorString = verificationErrors.toString();
		if (!"".equals(verificationErrorString)) {
			fail(verificationErrorString);
		}
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
