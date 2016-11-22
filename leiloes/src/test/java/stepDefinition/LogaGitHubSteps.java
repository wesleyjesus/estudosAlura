package stepDefinition;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Então;
import cucumber.api.java.pt.Quando;

public class LogaGitHubSteps {

	public static WebDriver driver;
		@Dado("^Eu estou na pagina inicial$")
		public void eu_estou_na_pagina_inicial() throws Throwable {
			System.setProperty("webdriver.chrome.driver", "C:\\WebDrivers Selenium\\chromedriver.exe");
			driver = new ChromeDriver();
	        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	        driver.get("http://www.store.demoqa.com");
		}
		
		@Quando("^o usuario navega para a pagina de login\\.$")
		public void o_usuario_navega_para_a_pagina_de_login() throws Throwable {
		    
		}

		@Quando("^insere usuario e senha$")
		public void insere_usuario_e_senha() throws Throwable {
		    
		}

		@Quando("^clica no botão logar$")
		public void clica_no_botão_logar() throws Throwable {
		    
		}

		@Então("^Exibe Mensagem Login realizado com sucesso\\.$")
		public void exibe_Mensagem_Login_realizado_com_sucesso() throws Throwable {
		    // Write code here that turns the phrase above into concrete actions
		}

}
