import { IndexError } from "../common/ll";

/** QueueStr: can remove from start or add to end */

class QueueStr {
  initial: string[]

  constructor(initial: string[] = []) {
    this.initial = initial;
  }

  /** enqueue(val): add val to end. Returns undefined. */
  enqueue(val: string): void {
    this.initial.push(val);
  }

  /** dequeue(): remove & return item from start.
   * Throws error if empty. */
  dequeue(): string {
    if (this.initial.length === 0) {
      throw new IndexError;
    }
    return this.initial.shift()!;
  }

  /** peek(): return the value of top. */
  peek(): string {
    if (this.initial.length === 0) {
      throw new IndexError;
    }
    return this.initial[0];
  }

  /** isEmpty(): is the queue empty? */
  isEmpty(): boolean {
    return this.initial.length === 0;
  }
}


export { QueueStr };
