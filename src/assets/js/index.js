// js file !!!!
// js goes here

$(document).ready(function() {
    // AOS.init({ disable: 'phone' });
    let isToggled = false;
    let isMenuBtnToggled = false;
    let isMobileSearchBtnToggled = false;
    let isTabToggled = false;
    const mobileMenuContainer = $('#mobile-header--menu-container')
    const mobileCaregiversMenu = $('#mobile-header--caregivers-and-patients-menu')
    const mobileHCPMenu = $('#mobile-header--hcp-menu')
    const lifeStagesDropdown = $('#mobile-header--life-stages-dropdown')
    const mobileHeaderMenuBtn = $('.mobile-header--menu-btn')
    const mobileHeaderSearchBtn = $('.mobile-header--search-btn')
    const mobileHaderSearchCloseBtn = $('.mobile-header--search-close-btn')
    const mobileHeaderCareGiversToggle = $('#mobile-header--caregivers-toggle')
    const mobileHeaderHcpToggle = $('#mobile-header--hcp-toggle')
    const lifeStagesTabBtn = $('#mobile-header--life-stages-btn')
    const mobileHeaderJoinUsBtn = $('#mobile-header--join-us-btn')
    const mobileHeaderToggleContainer= $('.mobile-header--toggle-btn-container')
    const caregiverBGColor = 'bg--secondary-light-gray'
    const hcpBGColor = 'bg-secondary-blue'
    const toggleBtnBgColor = 'bg--white'
    function initNav() {
        initSearch();
        initMobileNav();
    }

    function initMobileNav() {
        mobileHeaderMenuBtn.on('click', mobileMenuBtnHandler)
        mobileHeaderSearchBtn.on('click', mobileCloseBtn)
        mobileHaderSearchCloseBtn.on('click', mobileSearchBtn)
        mobileHeaderCareGiversToggle.on('click',mobileCaregiversMenuHandler)
        mobileHeaderHcpToggle.on('click',mobileHCPMenuHandler)
        lifeStagesTabBtn.on('click',mobileDropdownTabHandler)
    }

    function mobileDropdownTabHandler (event) {
        if(isTabToggled == false){
            lifeStagesDropdown.show()
            isTabToggled = true;
        } else {
            lifeStagesDropdown.hide()
            isTabToggled = false;
        }
        
    }

    function mobileHCPMenuHandler(event) {
        mobileCaregiversMenu.hide()
        mobileHCPMenu.show()
        mobileMenuContainer.removeClass(caregiverBGColor)
        mobileMenuContainer.addClass(hcpBGColor)
        mobileHeaderJoinUsBtn.removeClass('mobile-header--join-us-btn')
        mobileHeaderJoinUsBtn.addClass('mobile-header--join-us-btn-hcp')
        mobileHeaderCareGiversToggle.removeClass('mobile-header--btn-border-caregiver')
        mobileHeaderCareGiversToggle.addClass('mobile-header--btn-border-caregiver-off')
        mobileHeaderToggleContainer.addClass(hcpBGColor)
        mobileHeaderToggleContainer.removeClass(toggleBtnBgColor)
        mobileHeaderHcpToggle.removeClass('mobile-header--btn-border-hcp')
        mobileHeaderHcpToggle.addClass('mobile-header--btn-border-hcp-on')
        $('#mobile-header--caregivers-toggle-txt').addClass('mobile-header--txt-hcp-off')
        $('#mobile-header--hcp-toggle-txt').addClass('mobile-header--txt-hcp-on')
    }

    function mobileCaregiversMenuHandler(event) {
        $(this).addClass('mobile-header--btn-border-caregiver')
        $(this).removeClass('mobile-header--btn-border-caregiver-off')
        mobileCaregiversMenu.show()
        mobileHCPMenu.hide()
        mobileMenuContainer.addClass(caregiverBGColor)
        mobileMenuContainer.removeClass(hcpBGColor)
        mobileHeaderJoinUsBtn.addClass('mobile-header--join-us-btn')
        mobileHeaderJoinUsBtn.removeClass('mobile-header--join-us-btn-hcp')
        mobileHeaderToggleContainer.addClass(toggleBtnBgColor)
        mobileHeaderToggleContainer.removeClass(hcpBGColor)
        
        mobileHeaderHcpToggle.addClass('mobile-header--btn-border-hcp')
        mobileHeaderHcpToggle.removeClass('mobile-header--btn-border-hcp-on')
        $('#mobile-header--caregivers-toggle-txt').removeClass('mobile-header--txt-hcp-off')
        $('#mobile-header--hcp-toggle-txt').removeClass('mobile-header--txt-hcp-on')
    }

    function mobileSearchBtn(event) {
        $('.mobile-header--search-overlay').hide();
    }

    function mobileCloseBtn(event) {
        $('.mobile-header--search-overlay').show();

    }

    function mobileMenuBtnHandler(event) {

        if (isMenuBtnToggled == false) {
            $(this).addClass('mobile-header--menu-btn-on')
            $('.mobile-header--close-icon').show();
            $('.mobile-header--hamburger--icon').hide();
            
            $('.mobile-header--menu-nav-container').addClass('menu--slide-in');
            //$('.mobile-header--menu-nav-container').animate({left:"+=300",visibility:"visible"},500)
            isMenuBtnToggled = true;
            
        } else {
            $(this).removeClass('mobile-header--menu-btn-on')
            $('.mobile-header--close-icon').hide();
            $('.mobile-header--hamburger--icon').show();
            $('.mobile-header--menu-nav-container').removeClass('menu--slide-in');
          // $('.mobile-header--menu-nav-container').addClass('menu--slide-out')
            
            isMenuBtnToggled = false;
        }
    }

    function initSearch() {

        $('.btn-nav--search').on('click', function(event) {

            if (isToggled == false) {
                $('.search-input--container').show();
                $('.navbar--menu-container').hide();
                $('.dropdown-tab').hide();
                $('.list-unstyled').hide();
                $('.navbar-header--search-icon').hide();
                $('.navbar-header--search-close-icon').show();
                isToggled = true;
            } else {
                //alert('turn search off')
                $('.search-input--container').hide();
                $('.navbar--menu-container').show();
                $('.dropdown-tab').show();
                $('.list-unstyled').show();
                $('.navbar-header--search-icon').show();
                $('.navbar-header--search-close-icon').hide();
                isToggled = false;
            }
        });

    }


    initNav();
})