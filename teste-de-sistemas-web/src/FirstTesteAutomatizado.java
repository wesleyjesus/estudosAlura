import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.remote.DesiredCapabilities;


public class FirstTesteAutomatizado {
	
	public static void main(String[] args) {
		
		
//		System.setProperty("webdriver.gecko.driver", "C:\\Drivers Selenium\\geckodriver.exe");
		System.setProperty("webdriver.chrome.driver", "C:\\Drivers Selenium\\chromedriver.exe");
		
//		DesiredCapabilities dc = DesiredCapabilities.firefox();
//		dc.setCapability("marionette", true);
//		
//		WebDriver driver = new FirefoxDriver(dc);
		WebDriver driver = new ChromeDriver();
		
		driver.get("http://www.bing.com");
		
		WebElement campoDeTexto = driver.findElement(By.name("q"));
        campoDeTexto.sendKeys("Caelum");
        
        campoDeTexto.submit();
		
	}

}
