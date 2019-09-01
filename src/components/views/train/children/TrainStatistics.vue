<template>
    <div class="statistics">
        <GChart class="chart" type="AreaChart" :data="chartData" :options="chartOptions"/>
        <h2>Accuracy</h2>
        <svg class="legend" height="7vh" viewBox="0 0 410 100" >
            <g>
                <g>
                    <text text-anchor="start" x="80" y="70" font-size="50" stroke="none" stroke-width="0" fill="#ffffff">Train</text>
                    <rect x="0" y="55" width="60" height="15" stroke="none" stroke-width="0" fill-opacity="0.3" fill="#a3a0fb"></rect>
                    <path d="M0,55L60,55" stroke="#a3a0fb" stroke-width="2" fill-opacity="1" fill="none"></path>
                    <circle cx="30" cy="55" r="6" stroke="none" stroke-width="0" fill="#a3a0fb"></circle>
                </g>
                <g>
                    <text text-anchor="start" x="330" y="70" font-size="50" stroke="none" stroke-width="0" fill="#ffffff">Test</text>
                    <rect x="250" y="55" width="60" height="15" stroke="none" stroke-width="0" fill-opacity="0.3" fill="#54d8ff"></rect>
                    <path d="M250,55L310,55" stroke="#54d8ff" stroke-width="2" fill-opacity="1" fill="none"></path>
                    <circle cx="280" cy="55" r="6" stroke="none" stroke-width="0" fill="#54d8ff"></circle>
                </g>
            </g>
        </svg>
    </div>
</template>

<script>
    export default {
        name: 'TrainStatistics',
        data: function() {
            return {
                chartOptions: {
                    hAxis: { title: 'Epoch', textStyle: { color: '#FFF', fontSize: 18 }, titleTextStyle: { color: '#FFF', fontSize: 25 } },
                    vAxis: { minValue: 0, maxValue: 1, format: 'percent', textStyle: { color: '#FFF', fontSize: 18 }, ticks: [0, 0.10, 0.20, 0.30, 0.40, 0.50, 0.60, 0.70, 0.80, 0.90, 1], gridlineColor: '#FFF', baselineColor: '#FFF' },
                    colors: ['#A3A0FB', '#54D8FF'],
                    backgroundColor: '#506373',
                    legendTextStyle: { color: '#FFF', fontSize: 30 },
                    legend: { position: 'none' },
                    chartArea: { left: '6%', width: '92%' },
                    pointSize: 10
                }
            }
        },
        computed: {
            chartData: function() {
                return this.$store.getters['training/getChartData']
            }
        }
    }
</script>

<style scoped>
    .statistics {
        width: calc(90% - 20px);
        border-radius: 10px;
        padding: 10px;
        background-color: #506373;
        margin: 5vh 5% 0 5%;
        position: relative;
    }

    .chart {
        position: relative;
        height: calc(95vh - 450px);
    }

    h2 {
        font-size: 5vh;
        line-height: 0;
        display: block;
        color: #FFF;
        margin-left: 6%;
        position: absolute;
        top: 2vh;
    }

    svg.legend {
        position: absolute;
        top: 2vh;
        right: 2.5%;
    }
</style>
