// Задача 1 - легкая:

// Сформировать и заполнить массив случайным числами и вывести максимальное, минимальное и среднее значение.

// Для генерации случайного числа использовать метод Math.random(), который возвращает значение в промежутке [0, 1].


document.querySelector('#btn').onclick = function () {
   let l = document.querySelector('#length').value;
   let min = document.querySelector('#min').value;
   let max = document.querySelector('#max').value;
   let result = [];
   for (let i = 0; i < l; i++) {
      result.push(randomInteger(min, max))
   }

   document.querySelector('#out').innerHTML = result;
   document.querySelector('#outMin').innerHTML = Math.min(...result);
   document.querySelector('#outMax').innerHTML = Math.max(...result);


   let sum = 0;
   result.map(i => sum += i);
   let average = sum / result.length
   document.querySelector('#outAvg').innerHTML = average;
}

function randomInteger(min, max) {
   let rand = min - 0.5 + Math.random() * (max - min + 1);
   return Math.round(rand);
}
