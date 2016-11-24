package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class PaginaInicialGitHubPage {
	
	private static final String URL = "https://github.com/";
	
	private WebDriver driver;
	
	public PaginaInicialGitHubPage(WebDriver driver){
		this.driver = driver;
	}
	
	public void acessaPaginaInicial(){
		driver.get(URL);
	}
		
	public TelaLoginGitHubPage deveIrPaginaLogin(){
		driver.findElement(By.xpath("html/body/header/div/div/div/a[2]")).click();
		return new TelaLoginGitHubPage(driver);
	}
	
	
}
