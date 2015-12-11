// // Load the file that exports the functionality to test
// jest.dontMock('../app/math');  // Don't create mock functions
// var math = require('../app/math');

// // Test to verify the math.sum() function
// describe('sum', function() {
//   it('defines a sum function', function() {
//     expect(math.sum).toBeDefined();
//   });

//   it('adds 5 + 2 to equal 7', function() {
//     expect(math.sum(2, 5)).toBe(7);
//   });
// });

// // Test to verify the math.difference() function
// describe('difference', function() {
//   it('subtracts 5 - 2 to equal 3', function() {
//     expect(math.difference(5, 2)).toBe(3);
//   });
// });

// // Test to verify the math.product() function
// describe('product', function() {
//   it('mutiplies 2 * 5 to equal 10', function() {
//     expect(math.product(2, 5)).toBe(10);
//   });
// });

// // Test to verify the math.quotient() function
// describe('quotient', function() {
//   it('divides 10 / 2 to equal 5', function() {
//     expect(math.quotient(10, 2)).toBe(5);
//   });
// });

// describe('squared', function() {
//   it('squares a number', function() {
//     expect(math.squared(4)).toBe(16);
//   });
// });


jest.dontMock('../app/thing');  // Don't create mock functions
var thething = require('../app/thing');

describe('wordcheck', function() {
  it('checks for word count to be less than 100', function() {
    expect(thething.checkWordCount("hello, is it me you're looking for")).toBe(true);
  });
  it('checks for word count to be less than 100', function() {
    expect(thething.checkWordCount("hello, is it me you're looking for you time ten nice is it me you're looking for you time ten nice is it me you're looking for you time ten nice is it me you're looking for you time ten nice is it me you're looking for you time ten nice is it me you're looking for you time ten nice is it me you're looking for you time ten nice is it me you're looking for you time ten nice is it me you're looking for you time ten nice is it me you're looking for you time ten nice is it me you're looking for you time ten nice"))
    .toBe(false);
  });
});

describe('dupcheck', function() {
  it('checks to make sure there are no duplicates', function() {
    expect(thething.duplicateCheck("hello there are you there")).toBe(false);
  });
  it('checks to make sure there are no duplicates', function() {
    expect(thething.duplicateCheck("hello are you there")).toBe(true);
  });
});

describe('charcheck', function() {
  it('checks to make sure there are no special characters', function() {
    expect(thething.verifyAlphaNumeric("yes it is me")).toBe(true);
  });
  it('checks to make sure there are no special characters', function() {
    expect(thething.verifyAlphaNumeric("yes it %$is me")).toBe(false);
  });
});














