let array = ['JS', 'CSS', 'PHP', 'С', 'С++', 'Pascal', 'java', 'SQL', 'Python', 'Delphi'];
let accumulator = [];

for (let i = 0; i < array.length; i++) {
    if (array[i].length > 3) {
        accumulator.push(array[i]);
    }
}