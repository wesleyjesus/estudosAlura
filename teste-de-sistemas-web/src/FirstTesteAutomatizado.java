import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;


public class FirstTesteAutomatizado {
	
	public static void main(String[] args) {
		
		WebDriver driver;
		System.setProperty("webdriver.gecko.driver", "C:\\Users\\wesleyjesus\\Desktop\\Suíte de Teste Documento Eletrônico\\geckodriver.exe");
		driver =new FirefoxDriver();
		
		driver.get("http://www.google.com.br/");
		
		WebElement campoDeTexto = driver.findElement(By.name("q"));
        campoDeTexto.sendKeys("Caelum");
        
        campoDeTexto.submit();
		
	}

}
