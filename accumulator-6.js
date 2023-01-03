let arr = [18, -23, 3, 4, 15, 5, 7, 8, -9, -10];

let accumulatorOdd = [];
let i = 0;
while (i < arr.length) {
    if (arr[i] % 2)
        accumulatorOdd.push(arr[i]);
    i++;
}
console.log(accumulatorOdd);