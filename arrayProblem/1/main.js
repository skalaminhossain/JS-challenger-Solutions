// Problem

// Write a function that takes an array (a) as argument
// Extract the first 3 elements of a
// Return the resulting array

// Solution

function myFunction(a){
    return a.slice(0,3)
}

//raw soluton

function myFun(a){
    let arr = []
    arr.push(a[0])
    arr.push(a[1])
    arr.push(a[2])
    return arr
}