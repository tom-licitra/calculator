const expect = require('chai').expect;
const Calculate = require('../calc');
let calculator = new Calculate();

describe('calculate', () => {
  
  it('exists', () => {
    expect(Calculate).to.be.ok;
  });

  it('can add two numbers together', () => {
    // const calculator = new Calculate();
    expect(calculator.add(3,4)).to.equal(7);
  });

  it('can multiply two numbers together', () => {
    // const calculator = new Calculate();
    expect(calculator.multiply(3,4)).to.equal(12);
  });

  it('can subtract two numbers together', () => {
    // const calculator = new Calculate();
    expect(calculator.subtract(4,4)).to.equal(0);
  });

  it('can add many numbers together', () => {
    // const calculator = new Calculate();
    expect(calculator.addFlex(4,4,1,1,1,1)).to.equal(12);
  });

  it('can multiply many numbers together', () => {
    // const calculator = new Calculate();
    expect(calculator.multFlex(4,4,2,1)).to.equal(32);
  });



});