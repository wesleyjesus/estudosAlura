package utils;


import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		plugin = {"pretty", "html:target/cucumber-html-report"},
		features = {"src/test/resources/features/unico/login"},
		glue = {"stepDefinitions.unico"},
		monochrome = true
		)
public class CucumberRunner {
			
}
