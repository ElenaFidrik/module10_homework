let num = +prompt('Введите число');
if (typeof num !== 'number' || isNaN(num)) {
  console.log ('Упс, кажется вы ошиблись');
} else if (num %2 === 0) {
  console.log ('Четное число');
} else {
  console.log ('Нечетное число');
}