package util;

import java.io.IOException;
import java.util.concurrent.TimeUnit;

import org.junit.After;
import org.junit.Before;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.remote.DesiredCapabilities;

public class SeleniumTestBase {
	
	protected WebDriver driver;
	
	@Before
	public void setUpTest() throws IOException{
		
		System.setProperty("webdriver.gecko.driver", "C:\\Drivers Selenium\\geckodriver.exe");

		DesiredCapabilities dc = DesiredCapabilities.firefox();
		dc.setCapability("marionette", true);

		WebDriver driver = new FirefoxDriver(dc);
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);

		driver.get("http://localhost:8080/usuarios/new");
		
	}
	
	
	@After
	public void tearDownTest(){
		driver.close();
	}
	

}
