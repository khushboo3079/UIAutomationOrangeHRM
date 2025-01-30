module.exports = {
    default: {
      require: [
        'D:/UIAutomationOrangeHRM/features/step-definitions/orangehrm.steps.js', // Path to your step definitions
        'D:/UIAutomationOrangeHRM/support/hooks.js'          // Path to support files like hooks and world.js
      ],
      format: ['progress', 'json:reports/cucumber_report.json'],
      publishQuiet: true,
      "worldParameters": {
        "defaultTimeout": 100000
      },
      parallel: 1, // Run tests sequentially (increase for parallel execution)
      paths: ['D:/UIAutomationOrangeHRM/features/orangehrm.feature'] // Path to feature files
    }
   
  };
  