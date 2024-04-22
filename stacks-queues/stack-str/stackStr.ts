import { IndexError } from "../common/ll";

/** StackStr: can remove from the top or add to the top. */

class StackStr {
  initial: string[]

  constructor(initial: string[] = []) {
    this.initial = initial;
  }

  /** push(val): add val to top. Returns undefined. */
  push(val: string): void {
    this.initial.push(val);
  }

  /** pop(): remove and return item from top.
   * Throws error if empty. */
  pop(): string {
    if (this.initial.length === 0) {
      throw new IndexError;
    }
    return this.initial.pop()!;
  }

  /** peek(): return the value of first item. */
  peek():string {
    if (this.initial.length === 0) {
      throw new IndexError;
    }
    return this.initial[this.initial.length - 1];
  }

  /** isEmpty(): is the stack empty? */
  isEmpty():boolean {
    return this.initial.length === 0;
  }
}


export { StackStr };
