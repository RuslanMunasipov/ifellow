// Найти корень уравнения

// на отрезке [0; 10] с точностью по x не меньше, чем 0.001. Известно, что на этом промежутке корень единственный.
// Использовать метод деления отрезка пополам (и рекурсию).

let eps = 0.001;

function cal(a, b) {
   let x = (a + b) / 2; //test

   let resA = calcExpression(a);
   let resB = calcExpression(b);
   let resX = calcExpression(x);
   if (resA * resX < 0) {
      b = x;
   } else if (resX * resB < 0) {
      a = x;
   }
   if (Math.abs(b - a) > eps * 2) {
      x = cal(a, b);
   } else {
      x = (a + b) / 2;
      return x;
   }
   return x;
}

let res = cal(0, 10);
console.log(res);

function calcExpression(value) {
   return Math.cos(Math.pow(value, 5)) + Math.pow(value, 4) - 345.3 * value - 23;
}
