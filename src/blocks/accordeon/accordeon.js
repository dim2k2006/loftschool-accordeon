var buttons = document.querySelectorAll(".accordeon__title");

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function(event) {
    	event.preventDefault();
        
        console.log('test');
    });
}