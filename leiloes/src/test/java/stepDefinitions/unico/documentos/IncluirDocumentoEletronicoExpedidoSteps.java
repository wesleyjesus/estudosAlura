package stepDefinitions.unico.documentos;

import static org.junit.Assert.fail;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.DataTable;
import cucumber.api.PendingException;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Então;
import cucumber.api.java.pt.Quando;
import pages.unico.documentos.TelaIncluirDocumentoExpedido;

public class IncluirDocumentoEletronicoExpedidoSteps {
	
	private WebDriver driver;
	private TelaIncluirDocumentoExpedido incluirDocumentoExpedido;
	private Scenario scenario;
	private StringBuffer verificationErrors = new StringBuffer();
	
	@Before
	public void setUp() throws Exception {
		
		System.setProperty("webdriver.chrome.driver", "C:\\WebDrivers Selenium\\chromedriver.exe");
		driver  = new ChromeDriver();
		
//		File src = new File("C:\\phantomjs2\\bin\\phantomjs.exe");
//		
//		System.out.println("### Sessão do navegador incluir documento ###");
//		
//		System.setProperty("phantomjs.binary.path", src.getAbsolutePath());
//		
//		driver = new PhantomJSDriver();
		
//		driver.manage().window().maximize();
//		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);

		// PhantomJSUtility.captureScreenshot(driver, "PreencheLoginESenha");	
//
		this.incluirDocumentoExpedido = new TelaIncluirDocumentoExpedido(driver);
	}

	@Dado("^acesso a tela de incluir documento expedido$")
	public void acesso_a_tela_de_incluir_documento_expedido() throws Throwable {
		incluirDocumentoExpedido.abrirTelaIncluirDocumento();
	}

	@Dado("^certifico que o titulo da pagina é \"([^\"]*)\"$")
	public void certifico_que_o_titulo_da_pagina_é(String tituloTelaDocumentoExpedido) throws Throwable {
		incluirDocumentoExpedido.verificaTituloTelaIncluirDocumentoExpedido(tituloTelaDocumentoExpedido);
	}

	@Dado("^certifico que a url do navegador contem “/incluir/expedido”$")
	public void certifico_que_a_url_do_navegador_contem_incluir_expedido() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

	@Quando("^seleciono o formato eletrônico$")
	public void seleciono_o_formato_eletrônico() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

	@Quando("^seleciono natureza “Administrativa”$")
	public void seleciono_natureza_Administrativa() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

	@Quando("^certifico que os campos \"([^\"]*)\" e \"([^\"]*)\" estão sendo exibidos$")
	public void certifico_que_os_campos_e_estão_sendo_exibidos(String arg1, String arg2) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

	@Quando("^preenche os seguintes campos obrigatórios:$")
	public void preenche_os_seguintes_campos_obrigatórios(DataTable arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    // For automatic transformation, change DataTable to one of
	    // List<YourType>, List<List<E>>, List<Map<K,V>> or Map<K,V>.
	    // E,K,V must be a scalar (String, Integer, Date, enum etc)
	    throw new PendingException();
	}

	@Quando("^certifico que o botão salvar-inclusao está habilitado$")
	public void certifico_que_o_botão_salvar_inclusao_está_habilitado() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

	@Quando("^clica no botão salvar-inclusao$")
	public void clica_no_botão_salvar_inclusao() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

	@Então("^certifico que a mensagem “Documento incluído\\.” é exibida$")
	public void certifico_que_a_mensagem_Documento_incluído_é_exibida() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
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
