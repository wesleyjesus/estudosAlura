package test;

import static org.junit.Assert.assertTrue;

import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.remote.DesiredCapabilities;


public class UsuariosSystemTest {

	@Test
	public void deveAdicionarUmUsuario() {
		System.setProperty("webdriver.gecko.driver", "C:\\Drivers Selenium\\geckodriver.exe");

		DesiredCapabilities dc = DesiredCapabilities.firefox();
		dc.setCapability("marionette", true);

		WebDriver driver = new FirefoxDriver(dc);

		driver.get("http://localhost:8080/usuarios/new");

		// encontrar elementos na tela
		WebElement nome = driver.findElement(By.name("usuario.nome"));
		WebElement email = driver.findElement(By.name("usuario.email"));

		nome.sendKeys("Ronaldo Luiz de Albuquerque");
		email.sendKeys("ronaldo2016@terra.com.br");

		WebElement botaoSalvar = driver.findElement(By.id("btnSalvar"));

		botaoSalvar.click();

		boolean achouNome = driver.getPageSource().contains("Ronaldo Luiz de Albuquerque");
		boolean achouEmail = driver.getPageSource().contains("ronaldo2009@terra.com.br");

		assertTrue(achouNome);
		assertTrue(achouEmail);


		driver.close();

	}

}
