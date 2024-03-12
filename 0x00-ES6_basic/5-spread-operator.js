export default function concatArrays(array1, array2, string) {
  const list = [...array1, ...array2, ...string];
  return list;
}
