export default function taskBlock(trueOrFalse) {
  let task = false; // Changed const to let
  let task2 = true; // Changed const to let

  if (trueOrFalse) {
    task = true;
    task2 = false;
  }

  return [task, task2];
}
