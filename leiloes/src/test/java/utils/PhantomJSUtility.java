package utils;

import java.io.File;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;

public class PhantomJSUtility {
	
	public static void captureScreenshot(WebDriver driver, String screenshotName){
		try{
			TakesScreenshot ts = (TakesScreenshot)driver;
			
			File source = ts.getScreenshotAs(OutputType.FILE);
			
			FileUtils.copyFile(source, new File("./Screenshots/" +screenshotName+".png"));
			
			System.out.println("Screenshot completo!");
		}
		catch (Exception e){
			System.out.println("Exceção do screenshot "+e.getMessage());
		}
	}

}
