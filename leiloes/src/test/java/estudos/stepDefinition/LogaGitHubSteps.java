package estudos.stepDefinition;

import java.io.IOException;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Então;
import cucumber.api.java.pt.Quando;
import pages.PaginaInicialGitHubPage;
import pages.TelaLoginGitHubPage;

public class LogaGitHubSteps{

	private WebDriver driver;
	private PaginaInicialGitHubPage paginaInicialGitHub;
	private TelaLoginGitHubPage loginGitHub;

	@Before
	public void inicializa() throws IOException {
		System.setProperty("webdriver.chrome.driver", "C:\\WebDrivers Selenium\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		
		this.paginaInicialGitHub = new PaginaInicialGitHubPage(driver);
		this.loginGitHub = new TelaLoginGitHubPage(driver);
		
	}
	
	@Dado("^Eu estou na pagina inicial$")
	public void eu_estou_na_pagina_inicial() throws Throwable {
		paginaInicialGitHub.acessaPaginaInicial();
	}

	@Quando("^o usuario navega para a pagina de login$")
	public void o_usuario_navega_para_a_pagina_de_login() throws Throwable {
		paginaInicialGitHub.deveIrPaginaLogin();
	}
	
	@Quando("^checa que está na pagina de login$")
	public void checa_que_está_na_pagina_de_login() throws Throwable {
	    loginGitHub.verificaSeEstaNaPaginaLogin();
	}

	@Quando("^insere usuario e senha$")
	public void insere_usuario_e_senha() throws Throwable {
		loginGitHub.logaGitHub("unai.wesley@gmail.com", "Jesus068");
	}

	@Quando("^clica no botão logar$")
	public void clica_no_botão_logar() throws Throwable {
		loginGitHub.clicaLogar();
	}

	@Então("^exibe mensagem de sucesso$")
	public void exibe_mensagem_de_sucesso() throws Throwable {
		loginGitHub.mensageLoginSucess();
	}
	
	@After
	public void finalizaNavegador(){
		driver.close();
	}

}
