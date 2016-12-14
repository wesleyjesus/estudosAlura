package pages.unico.documentos;

import static org.junit.Assert.assertEquals;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class TelaIncluirDocumentoExpedido {
	
	private WebDriver driver;
//	private String baseUrl;
	
	
	public TelaIncluirDocumentoExpedido(WebDriver driver){
		this.driver = driver;
	}
	
	public void abrirTelaIncluirDocumento(){
		// Abrindo a tela
//		driver.get("http://unico-homologacao-02.mpf.mp.br/unico/home/exibir.action");
		
		driver.findElement(By.id("unico-classico")).click();
	    driver.findElement(By.linkText("Incluir")).click();
	}
	
	public void verificaTituloTelaIncluirDocumentoExpedido(String tituloTelaDocumentoExpedido){
		assertEquals("O título da pagina não foi encontrado!", tituloTelaDocumentoExpedido, driver.getTitle());
	}

}
