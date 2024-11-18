import Stack from "./Stack.js";
class InfixToPostfix {
  #expression = "";
  #prifix2Char = ["*", "/"];
  #prefix1Char = ["+", "-"];
  #retrunString = "";a


  stack = new Stack();

  constructor(expression) {
    this.#expression = expression;
    this.#converter();
    if (this.stack.length() > 0) {
      this.#retrunString += this.stack.join();
    }
  }
 

  #converter() {
    for (let i = 0; i < this.#expression.length; i++) {
      const currentChar = this.#expression.charAt(i);

      // this is for the alphabet
      if (currentChar.toLocaleLowerCase() != currentChar.toUpperCase()) {
        this.#retrunString += currentChar;
      }
      //   first operator in expression
      else if (this.stack.length() == 0) {
        this.stack.push(currentChar);
        console.log(currentChar + " has been added to stack");
      } 
      else {
       
        const charPrecidence = this.checkPrecidenceOfChar(currentChar);

        // precidence is greater
        if (charPrecidence == 2) {
          if (charPrecidence == this.checkPrecidenceOfChar(this.stack.peek())) {
            this.#retrunString += this.stack.pop();

            this.stack.push(currentChar);
          } else {
            this.stack.push(currentChar);
          }
        } else {
          if (charPrecidence <= this.checkPrecidenceOfChar(this.stack.peek())) {
            this.#retrunString += this.stack.pop();

            this.stack.push(currentChar);
          } else {
            this.stack.push(currentChar);
          }
        }
      }

      console.log(
        "output : ",
        this.#retrunString + "   " + " stack : " + this.stack
      );
    }
  }

  checkPrecidenceOfChar(char) {
    if (char == this.#prifix2Char[0] || char === this.#prifix2Char[1]) {
      return 2;
    } else {
      return 1;
    }
  }

  result() {
    return this.#retrunString;
  }
}

const infixToPostfix = new InfixToPostfix("a+b+c*d");
console.log(infixToPostfix.result());
