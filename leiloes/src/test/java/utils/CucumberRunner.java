package utils;


import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		plugin = {"html:target/cucumber-html-report", "json:target/cucumber.json", "pretty:target/cucumber-pretty.txt", "junit:target/cucumber-results.xml"},
		features = {"./features/unico"},
		glue = {"stepDefinitions.unico"},
		monochrome = true
		)
public class CucumberRunner {
			
}
