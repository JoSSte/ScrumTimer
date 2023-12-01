/* eslint-disable @typescript-eslint/naming-convention */
// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-firefox-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage'),
      require('karma-junit-reporter'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client: {
      clearContext: false, // leave Jasmine Spec Runner output visible in browser
      jasmine: {
        verboseDeprecations: true
      }
    },
    reporters: ['progress', 'kjhtml', 'junit', 'coverage'],
    preprocessors: {
      // source files, that you wanna generate coverage for
      // do not include tests or libraries
      // (these files will be instrumented by Istanbul)
      'src/**/*.js': ['coverage'],
      'src/**/*.ts': ['coverage'],
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    singleRun: true,
    browsers: ['ChromeHeadless', 'FirefoxHeadless'],
    customLaunchers: {
      'FirefoxHeadless': {
        base: 'Firefox',
        flags: [
          '-headless',
        ],
      }
    },
    coverageReporter: {
      dir: require('path').join(__dirname, 'test-results/coverage'),
      reports: ['html','junit'],
      fixWebpackSourcePaths: true
    },
    junitReporter: { // config: https://www.npmjs.com/package/karma-junit-reporter
      outputDir: 'test-results', // results will be saved as $outputDir/$browserName.xml
      outputFile: undefined
    }
  });
};
