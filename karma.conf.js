// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('karma-junit-reporter'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client:{
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    reporters: ['progress', 'kjhtml', 'junit','coverage-istanbul'],
    codeCoverage: true,
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['ChromeHeadless'],
    singleRun: true,
    coverageIstanbulReporter: {
      dir: require('path').join(__dirname, 'test-results/coverage'), 
      reports: [ 'html', 'lcovonly' ],
      fixWebpackSourcePaths: true
    },
    junitReporter: { // config: https://www.npmjs.com/package/karma-junit-reporter
      outputDir: 'test-results', // results will be saved as $outputDir/$browserName.xml
      outputFile: undefined
    }
  });
};
