$(document).ready(function() {

    // Transition effect for navbar 
    $(window).scroll(function() {

        // checks if window is scrolled more than 150, adds/removes bg-custom class
        if ($(this).scrollTop() > 150) {

            $('.navbar').removeClass('bg-transparent');
            $('.navbar').addClass('bg-custom');

        } else {
            $('.navbar').removeClass('bg-custom');
            $('.navbar').addClass('bg-transparent');
        }
    });
});