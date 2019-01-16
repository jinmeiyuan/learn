<template>
    <div id='population'>
        
    </div>
</template>
<script>
import * as d3 from 'd3'
export default {
    mounted() {
        this.init();
    },
    methods: {
        init(){

            var chartdata = [40, 60, 80, 100, 70, 120, 100, 60, 70, 150, 120, 140];

            var width = 700,
                height = 320,
                barWidth = 40,
                barOffset = 20;

            var rect = d3.select("#population").append('svg')
                .attr('width', width)
                .attr('height', height)
                .style('background', '#dff0d8')
                .selectAll('rect').data(chartdata)
                .enter().append('rect')
                    .attr('width', barWidth)
                    .attr('height', function (data) {
                        return data;
                    })
                    .attr('style',"fill: #3c763d; stroke: #d6e9c6; stroke-width: 5")
                    .attr('x', function (data, i) {
                        return i * (barWidth + barOffset);
                    })
                    .attr('y', function (data) {
                        return height - data;
                    });
            // var margin = {top: 20, right: 40, bottom: 30, left: 20},
            //     width = 960 - margin.left - margin.right,
            //     height = 500 - margin.top - margin.bottom,
            //     barWidth = Math.floor(width / 19) - 1;

            // var x = d3.scaleLinear()
            //     .range([barWidth/2, width-barWidth/2]);

            // var y = d3.scaleLinear()
            //     .range([height, 0]);

            // var yAxis = d3.axisLeft()
            //     .tickSize(-width)
            //     .tickFormat(function(d){
            //         return Math.round(d/1e6)+"M"
            //     });

            // var svg = d3.select('#population').append('svg')
            //     .attr("width",width+margin.left+margin.right)
            //     .attr("height", height + margin.top + margin.bottom)
            //     .append("g")
            //     .attr("transform","translate("+margin.left+","+margin.top+")");

            // var birthyears = svg.append('g')
            //     .attr('class','birthyears');

            // var title = svg.append('text')
            //     .attr('class','title')
            //     .attr('dy','0.71rem')
            //     .text(2000);
            // d3.csv("./population.csv").then(function(error,data){
            //     console.log(data);
            // });
        }
    },
}
</script>