
function swap(array, i, j) {
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

function bubble_Sort(array) {

    var swapped;
    var start = performance.now()
    do {
      swapped = false;
      for(var i = 0; i < array.length; i++) {
        if(array[i] && array[i + 1] && array[i] > array[i + 1]) {
          swap(array, i, i + 1);
          swapped = true;
        }
      }
    } while(swapped);
    var diff = performance.now() - start;
    $('#run').val(diff + 'ms')
    return array;
  }


  
  function radixBucketSort (arr) {
    var idx1, idx2, idx3, len1, len2, radix, radixKey;
    var radices = {}, buckets = {}, num, curr;
    var currLen, radixStr, currBucket;

    len1 = arr.length;
    len2 = 10;  

    
    var start = performance.now()     
    for (idx1 = 0;idx1 < len1;idx1++) {
      radices[arr[idx1].toString().length] = 0;
    }

    
    for (radix in radices) {          
     
      len1 = arr.length;
      for (idx1 = 0;idx1 < len1;idx1++) {
        curr = arr[idx1];
        
        currLen = curr.toString().length;
       
        if (currLen >= radix) {
          radixKey = curr.toString()[currLen - radix];
          if (!buckets.hasOwnProperty(radixKey)) {
            buckets[radixKey] = [];
          }
          buckets[radixKey].push(curr);          
        } else {
          if (!buckets.hasOwnProperty('0')) {
            buckets['0'] = [];
          }
          buckets['0'].push(curr);          
        }
      }
      idx1 = 0;
      for (idx2 = 0;idx2 < len2;idx2++) {
        if (buckets[idx2] != null) {
          currBucket = buckets[idx2];
          len1 = currBucket.length;
          for (idx3 = 0;idx3 < len1;idx3++) {
            arr[idx1++] = currBucket[idx3];
          }
        }
      }
      var diff = performance.now() - start;
    $('#run').val(diff + ' ms')
      buckets = {};
    }
  }
 
 
  function countingSort(arr, min, max)
  {
    
    var i, z = 0, count = [];
    var start = performance.now() 
    for (i = min; i <= max; i++) {
        count[i] = 0;
    }
 
    for (i=0; i < arr.length; i++) {
        count[arr[i]]++;
    }
 
    for (i = min; i <= max; i++) {
        while (count[i]-- > 0) {
            arr[z++] = i;
        }
    }
    var diff = performance.now() - start;
    $('#run').val(diff + 'ms')

}

var arr = []
function nilai(a) {
    for (var i = 0; i < 3; i++)
        a.push(prompt("Enter a number : "));
}




$(document).ready(function () {
    nilai(arr)
    console.log(arr)
    $('#nim').val(arr)
    
})

$('#bubble_sort').click(function(){
    bubble_Sort(arr)
    $('#output').val(arr)
    $('#Big').val('O(n^2)')
    

})


$('#radix_sort').click(function(){
    radixBucketSort(arr)
    $('#output').val(arr)
    $('#Big').val('O(n)')
    
})  


$('#counting_sort').click(function(){
    
  var max = Math.max.apply(null, arr);
  var min = Math.min.apply(null, arr);
  countingSort(arr,min,max)
    $('#output').val(arr)
    $('#Big').val('O(n)')
})  


