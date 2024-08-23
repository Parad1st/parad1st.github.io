let userLang = navigator.language;
console.log(userLang);
if (userLang == 'ru-RU') {
    fetch(`translations/${userLang}.json`).then(response => {
        return response.json();
    }).then(translation => {
        document.querySelectorAll('[data-info]').forEach(element => {
        const key = element.getAttribute('data-info');
        element.textContent = translation[key];
    });})
};
