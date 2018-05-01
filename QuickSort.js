// Quick sort algorithm implementation

var arr = [13, 19, 9, 5, 12, 8, 7, 4, 21, 2, 6, 11];

console.log("before sort = ", arr);

var spos = 0;
var epos = arr.length - 1;

quickSort(arr, spos, epos);

function quickSort(arr, p, r) {
    if (p < r) {
        var q = partition(arr, p, r);
        quickSort(arr, p, q - 1);
        quickSort(arr, q + 1, r);
    }
}

// swap two array value
function swap(arr, k, l) {
    var temp = arr[k];
    arr[k] = arr[l];
    arr[l] = temp;
}

// Partition function to return the index of pivot value
function partition(arr, p, r) {
    var x = arr[r];
    var i = p - 1;

    for (var j = p; j <= r - 1; j++) {
        if (arr[j] <= x) {
            i++;
            swap(arr, i, j);
        }
    }
    swap(arr, i + 1, r);
    return i + 1;
}

console.log("after sort = ", arr);


