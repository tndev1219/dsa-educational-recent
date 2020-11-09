$(document).ready(function() {

    function initAccordions() {
        console.log('accordions')
            // $('.reveal-button').on('click', function() {
            //     $(this).toggleClass('opened');
            // });

        $(".at-accordion").on("hide.bs.collapse show.bs.collapse", e => {
            $(e.target)
                .prev()
                .find(".reveal-button:last-child")
                .toggleClass("opened");
        });
    }

    initAccordions();
});