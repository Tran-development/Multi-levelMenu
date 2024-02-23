window.addEventListener('DOMContentLoaded', function() {
    var menuItems = document.querySelectorAll('#main-menu a');

    menuItems.forEach(function(item) {
        item.addEventListener('click', function(event) {
            event.preventDefault();
            var currentActive = document.querySelector('#main-menu .active');
            if (currentActive) {
                currentActive.classList.remove('active');
            }
            item.classList.add('active');
        });
    });
   
});