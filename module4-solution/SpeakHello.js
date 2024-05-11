
// ШАГ 2: Оберните все содержимое SpeakHello.js внутри IIFE
// См. лекцию 52, часть 2

(function (window){
// ШАГ 3. Создайте объект с именем helloSpeaker, к которому вы прикрепите
// метод "speak", который вы будете использовать в глобальном контексте
// См. лекцию 52, часть 1
// вар helloSpeaker =
var helloSpeaker = {};
// НЕ присоединяйте переменную talkWord к объекту helloSpeaker.
var speakWord = "Hello";

// ШАГ 4: Перепишите функцию «speak» так, чтобы она была прикреплена к
// объект helloSpeaker, а не отдельная функция.
// См. лекцию 52, часть 2
helloSpeaker.speak = function (name) {
  console.log(speakWord + " " + name);
}

    window.helloSpeaker = helloSpeaker;

})(window);
// ШАГ 5: Предоставьте объект helloSpeaker глобальной области видимости. Назови это
// 'helloSpeaker' также и в глобальной области видимости.
// См. лекцию 52, часть 2
// (Обратите внимание: шаг 6 будет выполнен в файле SpeakGoodBye.js.)
// xxxx.xxxx = helloSpeaker;