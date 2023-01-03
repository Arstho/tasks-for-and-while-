let arr = ['Мохьмад', 'Ислам', 'Альви', 'Мансур', 'Расул', 'Эльберт', 'Ахмад', 'Бислан', 'Анзор', 'Руслан'];

for (let i = 0; i < arr.length; i++) {
    if (arr[i].toLowerCase().startsWith('а')) {
        console.log(arr[i]);
    }
}