package utils;


import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		plugin = {"pretty", "html:target/cucumber-html-report"},
//		features = {"src/test/java/feature/"},
				features = "Feature/unico",
//		glue = {"src/test/java/feature.steps"}
		glue = {"unico.documentos.stepDefinition", "unico.login.stepDefinition"},
		monochrome = true
		)
public class CucumberRunner {
			
}
