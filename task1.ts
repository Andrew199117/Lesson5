// Написать функцию, которая будет высчитывать сумму чисел от нуля, до параметра, который мы в неё передаем.
console.log(sumNumbers(3));

function sumNumbers(num: number) {
  let result: number = 0;
  for (let i = 0; i <= num; i++) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    result += i;
  }
  return sumNumbers;
}
