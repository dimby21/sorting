function MergeSort(array){
    let len = array.length;
    let mid = Math.trunc(len/2);
    var left = [];
    var right = [];

    if(len < 2){
        return;
    }

    for(let j = mid; j < len; j++){
        right[j-mid] = array[j];
    }
    for(let i = 0; i < mid; i++){
        left[i] = array[i];
    }

    MergeSort(left);
    MergeSort(right);
    Merge(left,right,array);
}

function Merge(left,right,array){
    let lenf = left.length;
    let lenr = right.length;
    let i = 0;
    let j = 0;
    let k = 0;

    while(i < lenf && j < lenr){
        if(left[i] <= right[j]){
            array[k] = left[i];
            i = i+1;
            k = k+1;
        }
        if(right[j] < left[i]){
            array[k] = right[j];
            j = j+1;
            k = k+1;
        }

    }
    while(i < lenf){
        array[k] = left[i];
        i++;
        k++;
    }
    while(j < lenr){
        array[k] = right[j];
        j++;
        k++;
    }
    
}

let a = [3,4,6,9,7,8,2,1,12,16,13,11,5];
console.log("Before sorting");
console.log(a);
MergeSort(a);
console.log("After sorting");
console.log(a);


