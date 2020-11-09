$(document).ready(function() {

    var chartBtnArray = ['#metabolic-chart-step1--hotspot', '#metabolic-chart-step2--hotspot', '#metabolic-chart-step3--hotspot']
    var chartHiglightBtnArray = ['#metabolic-chart-step1--highlight', '#metabolic-chart-step2--highlight', '#metabolic-chart-step3--highlight']
    var chartTextBtnArray = ['#metabolic-chart-step1--text', '#metabolic-chart-step2--text', '#metabolic-chart-step3--text'];
    var chartImgArray = ['#metabolic-chart-img1', '#metabolic-chart-img2', '#metabolic-chart-img3'];
    var chartBtnContainerArray = ['#metabolic-chart-step1--container', '#metabolic-chart-step2--container', '#metabolic-chart-step3--container'];


    function initMetabolicChart() {

        for (var i = 0; i < chartBtnArray.length; i++) {
            document.querySelector(chartBtnArray[i]).addEventListener("mouseover", metabolicChartMouseover)
            document.querySelector(chartBtnArray[i]).addEventListener("mouseout", metabolicChartMouseout)
            document.querySelector(chartBtnArray[i]).addEventListener("click", metabolicChartClickHandler)
        }


    }


    function metabolicChartMouseover(event) {
        var teststring = '#' + event.target.id.toString();
        var index = chartBtnArray.indexOf(teststring);

        document.querySelector(chartHiglightBtnArray[index]).classList.toggle('metabolic-chart--btn-on');
        document.querySelector(chartTextBtnArray[index]).classList.toggle('metabolic-chart--text-on');
        document.querySelector(chartBtnContainerArray[index]).style.zIndex = '10';
    }


    function metabolicChartMouseout(event) {
        var teststring = '#' + event.target.id.toString();
        var index = chartBtnArray.indexOf(teststring);

        document.querySelector(chartHiglightBtnArray[index]).classList.toggle('metabolic-chart--btn-on');
        document.querySelector(chartTextBtnArray[index]).classList.toggle('metabolic-chart--text-on');
        document.querySelector(chartBtnContainerArray[index]).style.zIndex = '1';

    }

    function metabolicChartClickHandler(event) {
        var teststring = '#' + event.target.id.toString();
        var index = chartBtnArray.indexOf(teststring);
        for (var i = 0; i < chartImgArray.length; i++) {
            document.querySelector(chartImgArray[i]).style.display = "none";
            document.querySelector(chartHiglightBtnArray[i]).classList.remove('metabolic-chart--btn-on');
            document.querySelector(chartTextBtnArray[i]).classList.remove('metabolic-chart--text-on');
            document.querySelector(chartBtnArray[i]).addEventListener("mouseover", metabolicChartMouseover)
            document.querySelector(chartBtnArray[i]).addEventListener("mouseout", metabolicChartMouseout)
            document.querySelector(chartBtnContainerArray[i]).style.zIndex = '1';
        }
        document.querySelector(chartImgArray[index]).style.display = "block";
        document.querySelector(chartHiglightBtnArray[index]).classList.toggle('metabolic-chart--btn-on');
        document.querySelector(chartTextBtnArray[index]).classList.toggle('metabolic-chart--text-on');
        document.querySelector(chartBtnArray[index]).removeEventListener("mouseover", metabolicChartMouseover)
        document.querySelector(chartBtnArray[index]).removeEventListener("mouseout", metabolicChartMouseout)
        document.querySelector(chartBtnContainerArray[index]).style.zIndex = '10';
    }
    initMetabolicChart();

})