let arr = [18, -23, 3, 4, 15, 5, 7, 8, -9, -10];

let accumulatorEven = [];
let i = 0;
while (i < arr.length) {
    if (!(arr[i] % 2))
        accumulatorEven.push(arr[i]);
    i++;
}