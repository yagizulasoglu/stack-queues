import { StackStr } from "../common/stack";
import { IndexError } from "../common/ll";

/** Return reverse of string. */

function stringReversal(str: string): string {
  let newStr= "";

  if (str === "") throw new IndexError;

  for (let i = str.length-1; i >=0; i--) {
    newStr! += str[i];
  }

  return newStr!;
}

export { stringReversal };