export function swapElements(array: any, index1: number, index2: number) {
  // Check valid of index1 và index2
  if (index1 < 0 || index1 >= array.length || index2 < 0 || index2 >= array.length) {
    console.error('Invalid index');
    return;
  }

  // Use destructuring to swap 2 elements
  [array[index1], array[index2]] = [array[index2], array[index1]];
  return array;
}


export function removeElementByIndex(array: any, index: number) {
  // Check valid index of element
  if (index < 0 || index >= array.length) {
    console.error('Invalid index');
    return;
  }

  // Use splice to remove at index
  array.splice(index, 1);
  return array;
}
