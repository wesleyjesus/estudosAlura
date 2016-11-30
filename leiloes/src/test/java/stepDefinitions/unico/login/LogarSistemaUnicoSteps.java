package stepDefinitions.unico.login;

import static org.junit.Assert.fail;

import java.util.List;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.phantomjs.PhantomJSDriver;

import cucumber.api.DataTable;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Então;
import cucumber.api.java.pt.Quando;
import pages.unico.login.TelaDeLoginPage;

public class LogarSistemaUnicoSteps {
	
	private WebDriver driver;
	private TelaDeLoginPage loginUnico;
	private StringBuffer verificationErrors = new StringBuffer();
	
	@Before
	public void setUp() throws Exception {
//		System.setProperty("webdriver.chrome.driver", "C:\\WebDrivers Selenium\\chromedriver.exe");
		driver = new PhantomJSDriver();
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		
		this.loginUnico = new TelaDeLoginPage(driver);
	}
	
	@Dado("^eu estou na pagina de login do Unico$")
	public void eu_estou_na_pagina_de_login_do_Unico() throws Throwable {
	    loginUnico.abriTelaLogin();
	}

	@Dado("^checo que o título da pagina é \"([^\"]*)\"$")
	public void checo_que_o_título_da_pagina_é(String tituloPaginaLogin) throws Throwable {
	    loginUnico.verificaTituloTelaDeLogin(tituloPaginaLogin);
	}

	@Quando("^o usuario entra com usuario e senha validos:$")
	public void o_usuario_entra_com_usuario_e_senha_validos(DataTable entradaDeDados) throws Throwable {
		List<List<String>> dados = entradaDeDados.raw();
		
		loginUnico.logaSistemaUnico(dados.get(1).get(0), dados.get(1).get(1));
		
	}

	@Quando("^clica no botão 'Entrar' com name = \"([^\"]*)\"$")
	public void clica_no_botão_Entrar_com_name(String txtBotaoEntrar) throws Throwable {
	    loginUnico.clicaBotaoEntrar(txtBotaoEntrar);
	}

	@Então("^vejo o link \"([^\"]*)\"$")
	public void vejo_o_link(String linkUnico) throws Throwable {
	    loginUnico.verificaQueEstaTelaInicial(linkUnico);
	}

	@Então("^certifico que existe os icones dos modulos do sistema$")
	public void certifico_que_existe_os_icones_dos_modulos_do_sistema() throws Throwable {
	    loginUnico.verificaIconeDosModulosTelaInicial();
	}
	
	@Quando("^o usuario entra com usuario e senha invalidos:$")
	public void o_usuario_entra_com_usuario_e_senha_invalidos(DataTable dadosInvalidos) throws Throwable {
		List<List<String>> dados = dadosInvalidos.raw();
		
		loginUnico.logaSistemaUnico(dados.get(1).get(0), dados.get(1).get(1));
	}

	@Então("^vejo a mensagem \"([^\"]*)\"$")
	public void vejo_a_mensagem(String mensagem) throws Throwable {
	    loginUnico.verificaMensagemErroLogin(mensagem);
	}
	
	@After
	public void tearDown() throws Exception {
		driver.quit();
		String verificationErrorString = verificationErrors.toString();
		if (!"".equals(verificationErrorString)) {
			fail(verificationErrorString);
		}
	}
	
}
