function fibonacciUntilLimit() { 
    let a = 0;
    let b = 1;
    let count = 0;
    let n = 20; // or any other value you want
  
    while (count < n) {
      console.log(a);  // print the current number
        let temp = a + b;  // calculate the next number
        a = b;  // update 'a' to the next number in the sequence
        b = temp;  // update 'b' to the 'temp' (next number)
        count++;  // increment the count
    }
  }
  
  function fibonacciEvenNumbers() {
      let a = 0;
      let b = 1;
      let count = 0;
      let n = 20; // or any other value you want
  
      while (count < n) {
          if (a % 2 === 0) {
          console.log(a); // print the current even number
          }
          let temp = a + b;  // calculate the next number
          a = b;  // update 'a' to the next number in the sequence
          b = temp;  // update 'b' to the 'temp' (next number)
          count++;  // increment the count
      }
  }
  
  
  function fibonacciSumUp() {
      let a = 0;
      let b = 1;
      let count = 0;
      let n = 20; // or any other value you want
      let sum = 0;
  
      while (count < n) {
          sum += a; // add the current number to the sum
  
          let temp = a + b;  // calculate the next number
          a = b;  // update 'a' to the next number in the sequence
          b = temp;  // update 'b' to the 'temp' (next number)
          count++;  // increment the count
      }
  
      console.log("Sum of Fibonacci numbers:", sum);
  }
  
  
  function fibonacciIsNumberPartOf(number) {
      let a = 0;
      let b = 1;
      let count = 0;
      let n = 20; // or any other value you want
  
      while (a < number) {
          let temp = a + b;
          a = b;
          b = temp;
  
          if (a === number) {
              return "The number is a Fibonacci number";
          }
      }
  
      return "The number is not a Fibonacci number";
  }
  
  // Example usage:
  let inputNumber = 225; // You can change this to any number you want to check...
  console.log(fibonacciIsNumberPartOf(inputNumber));