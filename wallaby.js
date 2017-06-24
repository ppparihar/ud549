module.exports = () => {
  return {
    files: [   
      'src/*.js', 
      'src/AddressBook.js'    
    ],
    tests: [
      'spec/*Spec.js'
    ],
    debug: true,   
    env: {
      type: 'node'
    },
    testFramework: 'jasmine'
  };
};