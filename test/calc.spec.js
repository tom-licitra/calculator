const expect = require('chai').expect;
const Calculate = require('../calc');

describe('calculate', () => {
  
  beforeEach(() => {
    // const calculator = new Calculate();
  });

  it('exists', () => {
    expect(Calculate).to.be.ok;
  });

  it('can add two numbers together', () => {
    const calculator = new Calculate();
    expect(calculator.add(3,4)).to.equal(7);
  });

  it('can multiply two numbers together', () => {
    const calculator = new Calculate();
    expect(calculator.multiply(3,4)).to.equal(12);
  });

  it('can subtract two numbers together', () => {
    const calculator = new Calculate();
    expect(calculator.subtract(4,4)).to.equal(0);
  });


});