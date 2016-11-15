import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;


public class FirstTesteAutomatizado {
	
	public static void main(String[] args) {
		
		WebDriver driver;
//		System.setProperty("webdriver.gecko.driver", "C:\\Users\\wesleyjesus\\Desktop\\Suíte de Teste Documento Eletrônico\\geckodriver.exe");
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\wesleyjesus\\Desktop\\Suíte de Teste Documento Eletrônico\\chromedriver.exe");
		driver =new ChromeDriver();
		
		driver.get("http://www.bing.com");
		
		WebElement campoDeTexto = driver.findElement(By.name("q"));
        campoDeTexto.sendKeys("Caelum");
        
        campoDeTexto.submit();
		
	}

}
