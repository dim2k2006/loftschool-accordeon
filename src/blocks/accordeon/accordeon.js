var list = document.querySelectorAll('.accordeon__list');

list[0].addEventListener('click', function(event) {
    event.preventDefault();

    event.target.classList.toggle('accordeon_active');
});