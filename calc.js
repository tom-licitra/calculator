class Calculate {
  constructor () {
  }

  add(a,b){
    return a + b;
  }

  multiply(a,b){
    return a * b;
  }

  subtract(a,b){
    return a - b;
  }

  addFlex(){
    let numbers = [...arguments];
    let sum = 0;
    numbers.forEach(num => {
      sum += num;
    });
    return sum;
  }

  multFlex(){
    let numbers = [...arguments];
    let product = 1;
    numbers.forEach( num => {
      product *= num;
    })
    return product;
  }
}

module.exports = Calculate;