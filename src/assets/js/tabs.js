$(document).ready(function() {
    var tabSelector = document.querySelectorAll('.tab--selector');
    var tabContainer = document.querySelectorAll('.tab--container');

    function initTabs() {
        
        tabSelector.forEach(function(tab, idx) {
            tab.addEventListener("click", function(evt) {
                tabClickHandler(evt, idx);
            });
        });
    }

    function tabClickHandler(evt, idx) {

        tabSelector.forEach(function(tab, i) {
            if (i === idx) {
                tab.classList.add('tab--btn-on');
            } else {
                tab.classList.remove('tab--btn-on');
            }
        });
        
        tabContainer.forEach(function(tab, i) {
            if (i === idx) {
                tab.classList.remove('tab--off');
            } else {
                tab.classList.add('tab--off'); 
            }
        });
    }
    initTabs();

});