package app.utils;

import java.io.IOException;
import java.util.concurrent.TimeUnit;

import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeDriverService;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.springframework.core.ConstantException;

import com.sun.jna.platform.win32.SetupApi;

public class SeleniumBaseTest {

	protected WebDriver driver;

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
	public void abriChrome() throws IOException {
		System.setProperty("webdriver.chrome.driver", "C:\\WebDrivers Selenium\\chromedriver.exe");
		driver = new ChromeDriver();

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
