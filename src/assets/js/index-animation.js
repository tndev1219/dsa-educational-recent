// js file !!!!
// js goes here

$(document).ready(function() {
    AOS.init({ disable: 'phone' });

    function initNav() {
        initSearch();

    }


    function initSearch() {
        $('.btn-nav--search').on('mouseover', function(event) {
            $('.search-input--textbox').show();
            $('#life-stages-tab').hide();
            $('#life-stages-btn-link').removeClass('shadow--dk-1');
        });
        $('.btn-nav--search').on('mouseout', function(event) {
            $('.search-input--textbox').hide();
        })

        $('.search-input--textbox').on('mouseover', function(event) {
            $('.search-input--textbox').show();
        });
        $('.search-input--textbox').on('mouseout', function(event) {
            $('.search-input--textbox').hide();
        })
        $('#search-input-text').focus(function(event) {
            $('.search-input--textbox').show();
            $('.search-input--textbox').off('mouseover');
            $('.search-input--textbox').off('mouseout');
        })
    }

    initNav();
})