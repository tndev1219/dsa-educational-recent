$(document).ready(function() {
    var dietTabSelector = document.querySelectorAll('.diet--tab')
    var dietImageSelector = document.querySelectorAll('.diet--tab-selection')
    var subTabHeader = document.querySelector('.diet--tab-header');
    $.each(dietTabSelector, function(index, val) {
        val.style.cursor = "pointer";
        $(val).on('click', dietClickHandler)
            // $(val).on('mouseover', dietMouseOverHandler)
            // $(val).on('mouseout', dietMouseOutHandler)

    })


    // function dietMouseOverHandler(event) {

    // }

    // function dietMouseOutHandler(event) {

    // }


    function dietClickHandler(event) {
        var target = event.target;
        var nodes = dietTabSelector;
        var index = [].indexOf.call(nodes, target)

        $.each(dietTabSelector, function(index, val) {
            $(val).removeClass('diet--tab-on');
            $(val).removeClass('diet--tab-on-border--header')
        })

        $(subTabHeader).removeClass('diet--tab-on-border--header')
        $(subTabHeader).addClass('text--color--primary-black-25')

        if ($(this).hasClass('diet--sub-tab')) {

            $(subTabHeader).addClass('diet--tab-on-border--header')
            $(subTabHeader).removeClass('text--color--primary-black-25')
        }

        if ($(this).hasClass('diet--main-tab')) {

            $(this).addClass('diet--tab-on-border--header')
                // $(subTabHeader).removeClass('text--color--primary-black-25')
        }


        $(this).addClass('diet--tab-on');
        selectItem(index);
    }

    function selectItem(num) {
        $.each(dietImageSelector, function(index, val) {
                $(val).hide();
            })
            // var img = dietImageSelector[num];
            // console.log(img)
        $(dietImageSelector[num]).show();
    }
})