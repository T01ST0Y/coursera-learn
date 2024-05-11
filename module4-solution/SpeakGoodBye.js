// ПРИМЕЧАНИЕ! Шаги в этом файле в основном идентичны тем, которые вы
// выполняется в файле SpeakHello.js.

// ШАГ 6. Оберните все содержимое SpeakGoodBye.js внутри IIFE
// См. лекцию 52, часть 2
(function (window){

// ШАГ 7: Создайте объект с именем «byeSpeaker», к которому вы прикрепите
// метод "speak", который вы будете использовать в глобальном контексте
// См. лекцию 52, часть 1
// var byeSpeaker =
var byeSpeaker = {};
// НЕ присоединяйте переменную SpeakWord к объекту byeSpeaker.
var speakWord = "Good Bye";

// ШАГ 8: Перепишите функцию «speak» так, чтобы она была прикреплена к
// объект byeSpeaker, а не отдельная функция.
// См. лекцию 52, часть 2
byeSpeaker.speak = function (name) {
  console.log(speakWord + " " + name);
}
    window.byeSpeaker = byeSpeaker;

})(window);
// ШАГ 9: Предоставьте объект «byeSpeaker» глобальной области видимости. Назови это
// 'byeSpeaker' также и в глобальной области видимости.
// xxxx.xxxx = byeSpeaker;