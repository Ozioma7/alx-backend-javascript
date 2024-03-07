export default function taskBlock(trueOrFalse) {
  let task = false;
  let task2 = true;

  if (trueOrFalse) {
    let task = true; // Block-scoped variable declaration
    let task2 = false; // Block-scoped variable declaration
  }

  return [task, task2];
}
