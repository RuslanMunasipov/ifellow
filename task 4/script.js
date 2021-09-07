// Напишите метод, который будет вычислять угол между часовой и минутной стрелками часов. На вход функции подаётся время в виде двух переменных: "hours" и "minutes"

findDeg = function () {
   let h = document.getElementById('h'), m = document.getElementById('m');
   let d = (h.value * 30 + m.value * 0.5) - (m.value * 6);
   console.log(d)
   document.querySelector('#degree').value = d;
}
