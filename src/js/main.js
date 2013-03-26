$(function () {
        $('#chart').highcharts({
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                width: null,
                height: 200
            },
            title:{
                text: ""    
            },
            tooltip: {
        	    enabled: false
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        color: '#000000',
                        connectorColor: '#000000',
                        formatter: function() {
                            return '<b>'+ this.point.name +'</b>';
                        }
                    }
                }
            },
            series: [{
                type: 'pie',
                name: 'Browser share',
                data: [
                    ['SAS',   33.0],
                    ['Internet Security',       34.0],
                    ['.NET Development',    33.0],
                ]
            }]
        });
    });
$(document).ready(function(){
    var pieChartElements = $('path').splice(3,6);
$(pieChartElements[0]).click(function(){
    $("a[href='#SAS']").click();
});
$(pieChartElements[1]).click(function(){
    $("a[href='#internetSecurity']").click();
});
$(pieChartElements[2]).click(function(){
    $("a[href='#dotNetDevelopment']").click();
});

});
