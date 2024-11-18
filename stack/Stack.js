export default class Stack {
  #stack = [];

  push(value) {
    this.#stack.push(value);
  }

  pop() {
    return this.#stack.pop();
  }

  peek() {
    return this.#stack[this.#stack.length - 1];
  }

  length() {
    return this.#stack.length;
  }

  toString() {
    return this.#stack.toString();
  }

  join() {
    return this.#stack.reverse().join("");
  }

  result() {
    return this.#stack;
  }
}
