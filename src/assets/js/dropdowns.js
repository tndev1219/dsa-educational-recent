$(document).ready(function() {
    const primaryGreen = '#018650';
    const primaryBlack = '#232323';

    const tabBtns = document.querySelectorAll('.tab-content');

    function initDropdownMenus() {
        // $('.navbar--has-tabs').on('mouseover', dropdownMouseoverHandler)
        $('.navbar--no-tabs').on('mouseover', noTabsBtnMouseover)
        $('main').on('mouseover', noTabsBtnMouseover)
        $('#life-stages-btn-left').on('mouseover', noTabsBtnMouseover)
            // $('#life-stages-btn-link').on('mouseover', dropdownMouseoverHandler)
        $('#healthcare-professional-btn-link').on("mouseover", dropdownTwo)
        $('#life-stages-btn').on("mouseover", dropdownOne)
        $('#navbar--caregiver-hcp').on('mouseover',tabMouseoutHandler);

    }

    function dropdownOne(event) {
        $('#healthcare-professional-tab').hide()
        $('#life-stages-tab').show()
        $('.navbar--has-tabs').addClass('nav-link--on');
    }

    function dropdownTwo(event) {
        $('#healthcare-professional-tab').show()
        $('#life-stages-tab').hide()
        $('.navbar--has-tabs').addClass('nav-link--on');
    }

    function noTabsBtnMouseover(event) {
        $('.tab-content').hide();
        $('.navbar--has-tabs').removeClass('nav-link--on');

    }

    function dropdownMouseoverHandler(event) {
        console.log(event.target.id);
        $('.tab-content').show();
        $('.dropdown-tab').on('mouseout', tabMouseoutHandler)
        $('.navbar--has-tabs').addClass('nav-link--on');
    }

    function tabMouseoutHandler(event) {
        $('.tab-content').hide();
        $('.navbar--has-tabs').removeClass('nav-link--on');
    }

    function dropdownMouseoutHandler(event) {
        console.log('dropdown-mouseout')
    }
    initDropdownMenus();
});