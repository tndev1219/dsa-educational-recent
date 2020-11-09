var btn1Btn;
var btn2Btn;
var tab1Tab;
var tab2Tab;
var isToggled = false;

function initToggles(btn1, btn2, tab1, tab2) {
    btn1Btn = btn1;
    btn2Btn = btn2;
    tab1Tab = tab1;
    tab2Tab = tab2;
    // alert(tab1);
    //$(btn1Btn).on("click", toggleHandler)
    $(btn2Btn).on('click', toggleHandler2)
    $(btn2Btn).on('mouseover', toggleMouseOver2);
    $(btn2Btn).on('mouseout', toggleMouseOut2);
}

function toggleMouseOver2(event) {
    $('.toggle-btn-text-2').toggleClass('toggle--off-text');
    $('.toggle-btn-highlight-2').toggleClass('toggle--off-bg');
}

function toggleMouseOut2(event) {
    $('.toggle-btn-text-2').toggleClass('toggle--off-text');
    $('.toggle-btn-highlight-2').toggleClass('toggle--off-bg');
}

function toggleMouseOver1(event) {
    $('.toggle-btn-text-1').toggleClass('toggle--off-text');
    $('.toggle-btn-highlight-1').toggleClass('toggle--off-bg');
}

function toggleMouseOut1(event) {
    $('.toggle-btn-text-1').toggleClass('toggle--off-text');
    $('.toggle-btn-highlight-1').toggleClass('toggle--off-bg');
}

function toggleHandler1(event) {
    $(tab2Tab).addClass('toggle--hide-tab');
    // $(tab1Tab).addClass('toggle--show-tab');
    $(tab1Tab).show();
    if ($(tab1Tab).hasClass('toggle--hide-tab')) {
        $(tab1Tab).removeClass('toggle--hide-tab')

    }
    $(this).off();
    $(btn2Btn).on("click", toggleHandler2);
    $(btn2Btn).on('mouseover', toggleMouseOver2)
    $(btn2Btn).on('mouseout', toggleMouseOut2)
    $('.toggle-btn-text-2').toggleClass('toggle--off-text')
    $('.toggle-btn-highlight-2').toggleClass('toggle--off-bg')


}

function toggleHandler2(event) {
    $(tab1Tab).addClass('toggle--hide-tab');
    if ($(tab2Tab).hasClass('toggle--hide-tab')) {
        $(tab2Tab).removeClass('toggle--hide-tab')

    }
    $(tab2Tab).show();
    $(this).off();
    $(btn1Btn).on("click", toggleHandler1);
    $(btn1Btn).on('mouseover', toggleMouseOver1)
    $(btn1Btn).on('mouseout', toggleMouseOut1)
    $('.toggle-btn-text-1').toggleClass('toggle--off-text')
    $('.toggle-btn-highlight-1').toggleClass('toggle--off-bg')

}