const reporter = require('cucumber-html-reporter');

const options = {
    theme: 'bootstrap',
    jsonFile: 'reports/cucumber-report.json',
    output: 'reports/cucumber-report.html',
    reportSuiteAsScenarios: true,
    launchReport: true,
    metadata: {
        "App Name": "OrangeHRM Automation",
        "Test Environment": "QA",
        "Browser": "Edge",
        "Platform": "Windows 10",
        "Executed": "Remote"
    }
};

reporter.generate(options);