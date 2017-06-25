module.exports = () => {
  return {
    files: [   
      'src/**/*.js'        
    ],
    tests: [
      'spec/SpecHelper.js',
      'spec/*Spec.js'
    ],
    debug: true,
    
    testFramework: 'jasmine'
  };
};