// Напишите класс BaseConverter для конвертации из градусов по Цельсию в
// Кельвины​, ​Фаренгейты​, и так далее. У метода должен быть метод convert, который
// и делает конвертацию.

class Converter {
   constructor() {

   }
   convertTemp() {
      let c = document.getElementById('c'), f = document.getElementById('f'), k = document.getElementById('k');
      if (c !== '') {
         f.value = (c.value * 9 / 5 + 32);
         k.value = (+c.value + 217.15);
      }
   }
}
let converterElem = new Converter()




