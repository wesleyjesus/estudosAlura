package pages;

import static org.junit.Assert.assertTrue;

import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class UsuariosErroCamposObrigatorios {
	
	@Test
	public void naoDeveAdicionarUsuarioSemNome() {

		System.setProperty("webdriver.chrome.driver", "C:\\WebDrivers Selenium\\chromedriver.exe");

		WebDriver driverChrome = new ChromeDriver();
		
		driverChrome.get("http://localhost:8080/usuarios/new");
		
		// encontrar elementos na tela
		WebElement email = driverChrome.findElement(By.name("usuario.email"));

		email.sendKeys("axavier@empresa.com.br");

		WebElement botaoSalvar = driverChrome.findElement(By.id("btnSalvar"));

		botaoSalvar.click();

		assertTrue(driverChrome.getPageSource().contains("Nome obrigatorio!"));
	
		driverChrome.close();


	}
	

}
