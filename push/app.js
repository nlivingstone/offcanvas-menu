var app = document.querySelector('#app');
var navigation = document.querySelector('#navigation');
var overlay = document.querySelector('#overlay');
var toggle = document.querySelector('button#menuToggle');

toggle.addEventListener("click", function(event) {
    overlay.style.height = document.body.clientHeight;
    setTimeout(function() {
        navigation.classList.toggle('open');
    }, 50);
});

overlay.addEventListener("click", function(event) {
    navigation.classList.remove('open');
});

app.style.height = document.documentElement.scrollHeight+'px';
overlay.style.height = document.documentElement.scrollHeight+'px';