class ArrayList {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
  }

  pop() {
    this.length--;
    return this.data[this.length];
  }

  get(index) {
    return this.data[index];
  }

  delete(index) {
    this.data[index] = undefined;

    let found = false;
    for (let i = 0; i <= this.length; i++) {
      if (this.data[i] === undefined) {
        found = true;
      } else if (found) {
        let item = this.data[i];
        this.data[i - 1] = item;
      }
    }

    this.length--;
  }
}
