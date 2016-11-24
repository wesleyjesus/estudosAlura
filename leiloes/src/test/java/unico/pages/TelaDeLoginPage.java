package unico.pages;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;
import static org.junit.Assert.fail;

import org.junit.After;
import org.junit.Test;
import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.NoAlertPresentException;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebDriver;

public class TelaDeLoginPage {
	
	private WebDriver driver;
	private String baseUrl;
	private boolean acceptNextAlert = true;
	private StringBuffer verificationErrors = new StringBuffer();
	
	
	public TelaDeLoginPage(WebDriver driver) {
		this.driver = driver;
	}
	
	public void abriTelaLogin(){
		baseUrl = "https://login-desenv.mpf.mp.br/";
		driver.get(baseUrl
				+ "/cas/login?service=http%3A%2F%2Funico-homologacao-02.mpf.mp.br%2Funico%2Fj_spring_cas_security_check");
	}
	
	


	@Test
	public void testLogarUnico() throws Exception {
		
		assertEquals("Ministério Público Federal", driver.getTitle());
		driver.findElement(By.id("username")).clear();
		driver.findElement(By.id("username")).sendKeys("wesleyjesus@mpf.mp.br");
		driver.findElement(By.id("password")).clear();
		driver.findElement(By.id("password")).sendKeys("wesleyjesus@mpf.mp.br");
		driver.findElement(By.name("Submit")).click();
		assertTrue(isElementPresent(By.linkText("Único")));
		assertEquals("Versão Clássica", driver.findElement(By.id("unico-classico")).getText());
		assertEquals("Judicial", driver
				.findElement(By.cssSelector("a[title=\"Acessar o sistema Gerenciador Judicial\"] > p")).getText());
		assertEquals("Extrajudicial", driver
				.findElement(By.cssSelector("a[title=\"Acessar o sistema Gerenciador Extrajudicial\"] > p")).getText());
		assertEquals("Administrativo",
				driver.findElement(By.cssSelector("a[title=\"Acessar o sistema Gerenciador Administrativo\"] > p"))
						.getText());
	}

	@After
	public void tearDown() throws Exception {
		driver.quit();
		String verificationErrorString = verificationErrors.toString();
		if (!"".equals(verificationErrorString)) {
			fail(verificationErrorString);
		}
	}

	private boolean isElementPresent(By by) {
		try {
			driver.findElement(by);
			return true;
		} catch (NoSuchElementException e) {
			return false;
		}
	}

	private boolean isAlertPresent() {
		try {
			driver.switchTo().alert();
			return true;
		} catch (NoAlertPresentException e) {
			return false;
		}
	}

	private String closeAlertAndGetItsText() {
		try {
			Alert alert = driver.switchTo().alert();
			String alertText = alert.getText();
			if (acceptNextAlert) {
				alert.accept();
			} else {
				alert.dismiss();
			}
			return alertText;
		} finally {
			acceptNextAlert = true;
		}
	}
}
