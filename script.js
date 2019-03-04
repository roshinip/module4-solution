(function() {
    var names = ["Yaswanth", "John", "Jenny", "Jaggu", "Pallavi", "Falgun", "Lasya", "Pushpa", "Lavanya", "Janu"];
    for (var i = 0; i < names.length; i++) {
        var firstLetter = names[i].charAt(0).toLowerCase();
        if (firstLetter === 'j') {
            byeSpeaker.speak(names[i]);
        } else {
            helloSpeaker.speak(names[i]);
        }
    }
})();
