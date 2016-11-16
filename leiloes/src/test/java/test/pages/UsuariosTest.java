package test.pages;

import static org.junit.Assert.assertTrue;

import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import app.utils.SeleniumBaseTest;

public class UsuariosTest extends SeleniumBaseTest{

	
	@Test
	public void deveAdicionarUmUsuario() {
		
		driver.get("http://localhost:8080/usuarios");
		
		driver.findElement(By.linkText("Novo Usuário")).click();
		
		// encontrar elementos na tela
		WebElement nome = driver.findElement(By.name("usuario.nome"));
		WebElement email = driver.findElement(By.name("usuario.email"));

		nome.sendKeys("Adriano Xavier");
		email.sendKeys("axavier@empresa.com.br");

		WebElement botaoSalvar = driver.findElement(By.id("btnSalvar"));

		botaoSalvar.click();
		
		
		assertTrue("Não encontrou usuario cadastrado!", driver.getPageSource().contains("Adriano Xavier"));
		assertTrue("Não encontrou email cadastrado!", driver.getPageSource().contains("axavier@empresa.com.br"));
	

	}
	
	@Test
	public void naoDeveAdicionarUsuarioSemNome() {
		
		
		driver.get("http://localhost:8080/usuarios/new");
		
		// encontrar elementos na tela
		WebElement email = driver.findElement(By.name("usuario.email"));

		email.sendKeys("axavier@empresa.com.br");

		WebElement botaoSalvar = driver.findElement(By.id("btnSalvar"));

		botaoSalvar.click();
		
		assertTrue("Não encontrou aviso de nome obrigatorio", driver.getPageSource().contains("Nome obrigatorio!"));
	

	}
	
	@Test
	public void naoDeveAdicionarUsuarioSemNomeEmal() {

		driver.get("http://localhost:8080/usuarios/new");
		
		// encontrar elementos na tela
		WebElement botaoSalvar = driver.findElement(By.id("btnSalvar"));

		botaoSalvar.click();
		
		assertTrue("Não encontrou aviso de nome obrigatorio", driver.getPageSource().contains("Nome obrigatorio!"));
		assertTrue("Não encontrou aviso de email obrigatorio", driver.getPageSource().contains("E-mail obrigatorio!"));
	
	}

}
