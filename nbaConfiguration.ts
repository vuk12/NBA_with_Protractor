import {Config} from "protractor";
import * as reporter from "cucumber-html-reporter";
import { browser } from "protractor";


export let config: Config = {
    // The address of a running selenium server.
   // seleniumAddress: 'http://localhost:4444/wd/hub',
   directConnect:true,
   framework:'custom',
   frameworkPath: require.resolve('protractor-cucumber-framework'),

  
    // Capabilities to be passed to the webdrtsciver instance.
    capabilities: {
      browserName: 'chrome'
    },
  
    // Spec patterns are relative to the configuration file location passed
    // to protractor (in this example conf.js).
    // They may include glob patterns.
    specs: ['../Features/NBA.feature'],
    cucumberOpts: {
        // require step definitions
       // tags:"@AngularTesting",
        format:'json:./cucumberreport.json',
       
        
        require: [
          './stepDefinitions/*.js', // accepts a glob,
        
        ]
      },
      onPrepare: async() =>{
        await browser.manage().window().maximize();
        await browser.waitForAngularEnabled(false);
        //await browser.get("https://s1m425-qa5-app.dev-scholarone.com/qa-auto-aca");
      },
      onComplete: () =>{
        var options = {
          theme: 'bootstrap',
          jsonFile: './cucumberreport.json',
          output: './cucumber_report.html',
          reportSuiteAsScenarios: true,
          launchReport: true,
          metadata: {
              "App Version":"0.3.2",
              "Test Environment": "STAGING",
              "Browser": "Chrome  54.0.2840.98",
              "Platform": "Windows 10",
              "Parallel": "Scenarios",
              "Executed": "Remote"
          }
      };
   
      reporter.generate(options);


      }

  
  
  };
  