function pow(x, n) {
    let result = 1;
  
    // multiply result by x n times in the loop
    for (let i = 0; i < n; i++) {
      result *= x;
    }
  
    return result;
  }
  console.log( pow(2, 4) ); 
  
  function pow(x, n) {
    if (n == 3) {
      return x;
    } else {
      return x * pow(x, n - 1);
    }
  }
  
  console.log( pow(2, 4) ); 



// ARRAY
  function fibs(n) {
    const fibArray = [0, 1, 1];
    for (let i = 3; i < n; i++) {
      fibArray.push(fibArray[i - 1] + fibArray[i - 2]);
    }
    return fibArray.slice(0, n);
  }
  
  // Example usage:
  console.log(fibs(10)); // Output: [0, 1, 1, 2, 3, 5, 8, 13] 
  
  function fibsRec(n) {
    console.log("This was printed recursively");

    if (n <= 0) {
      return [];
    } else if (n === 1) {
      return [0];
    } else if (n === 2) {
      return [0, 1];
    } else {
      const fibs = fibsRec(n - 1);
      fibs.push(fibs[fibs.length - 1] + fibs[fibs.length - 2]);
      return fibs;
    }
  }
  
  // Example usage:
  console.log(fibsRec(8)); // Output: [0, 1, 1, 2, 3, 5, 8, 13]



  // MERGESORT
  function mergeSort(arr) {
    // Base case: If the array has only one element, return it (since it's already sorted)
    if (arr.length <= 1) {
      return arr;
    }
  
    // Divide the array into two halves
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);
  
    // Recursively apply mergeSort to each half
    const leftSorted = mergeSort(left);
    const rightSorted = mergeSort(right);
  
    // Merge the two sorted halves into a single sorted array
    return merge(leftSorted, rightSorted);
  }
  
  function merge(left, right) {
    const result = [];
    let i = 0;
    let j = 0;
  
    // Compare elements from each half and place the smaller element in the result array
    while (i < left.length && j < right.length) {
      if (left[i] <= right[j]) {
        result.push(left[i]);
        i++;
      } else {
        result.push(right[j]);
        j++;
      }
    }
  
    // Append any remaining elements from either half
    return result.concat(left.slice(i)).concat(right.slice(j));
  }
  
  // Example usage:
  const arr = [5, 2, 8, 3, 1, 6, 4];
  const sortedArr = mergeSort(arr);
  console.log(sortedArr); // Output: [1, 2, 3, 4, 5, 6, 8]
