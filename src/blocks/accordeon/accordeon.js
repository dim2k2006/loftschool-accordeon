var buttons = document.querySelectorAll('.accordeon__title');

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function(event) {
    	event.preventDefault();

    	this.classList.toggle('accordeon_active');
    });
}