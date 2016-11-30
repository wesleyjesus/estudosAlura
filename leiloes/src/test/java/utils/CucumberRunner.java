package utils;


import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		plugin = {"pretty", "html:target/cucumber-html-report"},
		features = {"./features/unico"},
		glue = {"stepDefinitions.unico"},
		monochrome = true
		)
public class CucumberRunner {
			
}
