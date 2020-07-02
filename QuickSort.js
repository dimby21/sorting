/* Quick Sort Implementation
  -- Author: Dimby
  -- Date: 27/06/2020
  */
 
  function quickSort(array, startindex, endindex){
      if(startindex < endindex){
          let partitionIndex = partition(array, startindex, endindex);
          quickSort(array, startindex, partitionIndex - 1);
          quickSort(array, partitionIndex + 1, endindex);
      }
      return array;
  }
function partition(array, start, end){
    let pivot = array[end];
    let index = start;
    for(i = start; i < end; i++){
        if(array[i] <= pivot){
            swap(array,i, index);
            index++;
        }
    }
    swap(array, index, end);
    return index;
}

function swap(array, i, j){
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
    return array;
}

let a  = [3,7,5,4,1,2,6,9];
let b = quickSort(a,0,7);
console.log(b);