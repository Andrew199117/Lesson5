// Провести рефакторинг задачи так, чтобы код (toString().padStart(2, "0")) не повторялся, вынести его в отдельную функцию и использовать
// Саму задачу обернуть в отдельную функцию getDate, которая принимает в качестве параметра произвольную дату в формате '2026-10-22T22:10:15'
//* Проверить валидна ли дата в переданном параметре

const now: Date = new Date();

function getDate(now: Date): string {
  const day = getCode(now.getDate());
  const month = getCode(now.getMonth() + 1);
  const year = now.getFullYear();

  const hours = getCode(now.getHours());
  const minutes = getCode(now.getMinutes());
  const seconds = getCode(now.getSeconds());

  return `${year}/${month}/${day}T${hours}:${minutes}:${seconds}`;
}
function getCode(num: number): string {
  return num.toString().padStart(2, "0");
}
console.log(getDate(now));
