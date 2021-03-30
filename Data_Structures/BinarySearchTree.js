class Tree {
  constructor() {
    this.root = null;
  }

  add(value) {
    const node = new Node(value);
    if (!this.root) {
      this.root = node;
      return;
    }

    let added = false;
    let current = this.root;
    while (!added) {
      if (node.value > current.value) {
        if (!current.right) {
          current.right = node;
          added = true;
        } else {
          current = current.right;
        }
      } else {
        if (!current.left) {
          current.left = node;
          added = true;
        } else {
          current = current.left;
        }
      }
    }
  }

  toObject() {
    return this.root;
  }
}

class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}
