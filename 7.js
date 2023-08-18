let arr = [ 0, 4, 5, 6, 7, 8, 9, 0, true, null, 'e'];
let even = 0;
let odd = 0;
let zero = 0;

for (let i = 0; i < arr.length; i++){
    if (arr[i] === 0)  {
        zero++;
    } else {
        if (arr[i] % 2 === 0) {
            even++;
        } else {
            odd++;
        }
    }
}

console.log("Количество четных элементов: " + even);
console.log("Количество нечетных элементов: " + odd);
console.log("Количество нулевых элементов: " + zero);