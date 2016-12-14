package utils;

import static org.junit.Assert.assertTrue;

import java.io.IOException;
import java.util.concurrent.TimeUnit;

import org.junit.After;
import org.junit.Before;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import pages.LeiloesPage;
import pages.PaginaInicialGitHubPage;
import pages.UsuariosPage;

public class SeleniumBaseTest {

	protected WebDriver driver;
	protected UsuariosPage usuarios;
	protected LeiloesPage leiloes;
	

	// @Before
	// public void setUpTest() throws IOException {
	//
	// System.setProperty("webdriver.gecko.driver", "C:\\WebDrivers
	// Selenium\\geckodriver.exe");
	//
	// DesiredCapabilities dc = DesiredCapabilities.firefox();
	// dc.setCapability("marionette", true);
	//
	// WebDriver driver = new FirefoxDriver(dc);
	// // driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
	//
	// driver.get("http://localhost:8080/usuarios/new");
	//
	// }
	
	

	@Before
	public void inicializa() throws IOException {
		System.setProperty("webdriver.chrome.driver", "C:\\WebDrivers Selenium\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		driver.get("http://localhost:8080/apenas-teste/limpa");
		this.usuarios = new UsuariosPage(driver);
		this.leiloes = new LeiloesPage(driver);
		
		// abrir as páginas iniciais dos testes
		
		
		this.usuarios.visita();
		usuarios.novoUsuario().cadastra("Paulo Henrique", "paulohenrique@email.com.br");
		usuarios.novoUsuario().cadastra("José Alberto", "jose@alberto.com");
		
		this.leiloes.visita();
		leiloes.novoLeilao().cadastroLeilao("Computador", 2000.00, "Paulo Henrique", false);		
		assertTrue("Leilão não cadastrado!" , leiloes.existeLeilao("Computador", 2000.00, "Paulo Henrique", false));
		
		
	}
	
	@After
	public void finalizaNavegador(){
		driver.close();
	}

//	@BeforeClass
//	public static void abriChrome() throws IOException {
//		System.setProperty("webdriver.chrome.driver", "C:\\WebDrivers Selenium\\chromedriver.exe");
//		driverChrome = new ChromeDriver();
//
//	}
	
//	@AfterClass
//	public static void tearDownTest() throws InterruptedException {
//		if (driverChrome != null){
//			driverChrome.close();
//		}
//	}

}
