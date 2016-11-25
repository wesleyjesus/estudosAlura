package unico.login.stepDefinition;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.PendingException;
import cucumber.api.java.Before;
import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Então;
import cucumber.api.java.pt.Quando;
import unico.pages.TelaDeLoginPage;

public class LogarSistemaUnicoSteps {
	
	private WebDriver driver;
	private TelaDeLoginPage loginUnico;
	
	@Before
	public void setUp() throws Exception {
		System.setProperty("webdriver.chrome.driver", "C:\\WebDrivers Selenium\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		
		this.loginUnico = new TelaDeLoginPage(driver);
	}
	
	@Dado("^eu estou na pagina de login do Unico$")
	public void eu_estou_na_pagina_de_login_do_Unico() throws Throwable {
	    loginUnico.abriTelaLogin();
	}

	@Quando("^checar que esta na pagina de login$")
	public void checar_que_esta_na_pagina_de_login() throws Throwable {
	    loginUnico.verificaTituloTelaDeLogin();
	}

	@Quando("^usuario entra com usuario e senha validos$")
	public void usuario_entra_com_usuario_e_senha_validos() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

	@Quando("^clica no botão 'Entrar'$")
	public void clica_no_botão_Entrar() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

	@Então("^checa que esta na pagina inicial do sistema$")
	public void checa_que_esta_na_pagina_inicial_do_sistema() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

	@Então("^certifica que existe os icones dos modulos do sistema$")
	public void certifica_que_existe_os_icones_dos_modulos_do_sistema() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}
	
}
