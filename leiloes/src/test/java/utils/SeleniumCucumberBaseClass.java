package utils;

import static org.junit.Assert.fail;

import java.io.File;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.phantomjs.PhantomJSDriver;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import pages.unico.login.TelaDeLoginPage;

public class SeleniumCucumberBaseClass {
	
	private WebDriver driver;
	protected TelaDeLoginPage loginUnico;
	private StringBuffer verificationErrors = new StringBuffer();
	
	@Before
	public void setUp() throws Exception {
//		System.setProperty("webdriver.chrome.driver", "C:\\WebDrivers Selenium\\chromedriver.exe");
		
		System.out.println("Sessão do navegador iniciada!");
		File src = new File("C:\\phantomjs2\\bin\\phantomjs.exe");
		
		System.setProperty("phantomjs.binary.path", src.getAbsolutePath());
		driver = new PhantomJSDriver();
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		
//		 PhantomJSUtility.captureScreenshot(driver, "PreencheLoginESenha");
		
		this.loginUnico = new TelaDeLoginPage(driver);
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
