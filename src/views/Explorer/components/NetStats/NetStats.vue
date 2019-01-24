<!-- ============================================================================================ *
 *                                                                                                *
 *                                       Xi Block Explorer                                        *
 *                                                                                                *
 * ---------------------------------------------------------------------------------------------- *
 * This file is part of the Galaxia Project - Xi Block Explorer                                   *
 * ---------------------------------------------------------------------------------------------- *
 *                                                                                                *
 * Copyright 2018 Galaxia Project Developers                                                      *
 *                                                                                                *
 * This program is free software: you can redistribute it and/or modify it under the terms of the *
 * GNU General Public License as published by the Free Software Foundation, either version 3 of   *
 * the License, or (at your option) any later version.                                            *
 *                                                                                                *
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;      *
 * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.      *
 * See the GNU General Public License for more details.                                           *
 *                                                                                                *
 * You should have received a copy of the GNU General Public License along with this program.     *
 * If not, see <https://www.gnu.org/licenses/>.                                                   *
 *                                                                                                *
 * ============================================================================================ -->
<template>
    <div class="flex container net-stats">

        <!-- Summary -->
        <div class="flex column stats text-light">
            <div class="flex row stats-row height">
                <span class="label height">Network height</span>
                <span class="spacer"></span>
                <span class="value height">{{ blockHeight }}</span>
            </div>
            <div class="divider"></div>
            <span class="stats-subheader">Network stats</span>
            <div class="flex row stats-row">
                <span class="label">Difficulty</span>
                <span class="spacer"></span>
                <span class="value">{{ networkInfo.difficulty }}</span>
            </div>
            <div class="flex row stats-row">
                <span class="label">Hashrate</span>
                <span class="spacer"></span>
                <span class="value">{{ networkInfo.hashrate }} H/s</span>
            </div>
            <div class="flex row stats-row" v-if="netStats.solveTimes">
                <span class="label">Avg. Solve Time</span>
                <span class="spacer"></span>
                <span class="value">{{ netStats.solveTimes.avg }} sec</span>
            </div>
            <div class="flex row stats-row" v-if="netStats.solveTimes">
                <span class="label">Total Transactions</span>
                <span class="spacer"></span>
                <span class="value">{{ networkInfo.tx_count }}</span>
            </div>
            <div class="divider"></div>
            <span class="stats-subheader">Supply</span>
            <div class="flex row stats-row" v-if="netStats.solveTimes">
                <span class="label">Circulating</span>
                <span class="spacer"></span>
                <span class="value">{{ networkInfo.circulatingCoins }} {{ coinConfig.coinTicker }}</span>
            </div>
            <div class="flex row stats-row" v-if="netStats.solveTimes">
                <span class="label">Emission</span>
                <span class="spacer"></span>
                <span class="value">{{ networkInfo.emission }} %</span>
            </div>
            <div class="flex row stats-row" v-if="netStats.solveTimes">
                <span class="label">Block Reward</span>
                <span class="spacer"></span>
                <span class="value">{{ networkInfo.blockReward }} {{ coinConfig.coinTicker }}</span>
            </div>
        </div>
        <!-- Diff/hash Chart -->
        <div class="chart-wrapper">
            <div id="netChart" class="chart-ele"></div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex';
import ApexCharts from 'apexcharts';

export default {
    name: 'netStats',
    data () {
        return {
            netStats: {},
            netChartOptions: {
                dataLabels: {
                    enabled: false,
                },
                chart: {
                    height: 300,
                    width: '100%',
                    type: 'line',
                    stacked: false,
                    fontFamily: "'Source Sans Pro', Helvetica, Arial, sans-serif",
                    foreColor: '#FEFEFE',
                    sparkline: {
                        enabled: false
                    }
                },
                grid: {
                    borderColor: '#3B4047',
                    position: 'back',
                },
                yaxis: [
                    { },
                    { opposite: false, },
                    { opposite: true, }
                ],
                series: [
                    { name: 'Difficulty', data: [] },
                    { name: 'Hashrate', data: [] },
                    { name: 'BlockTime', data: [], type: 'column' }
                ],
                plotOptions: {
                    bar: {
                        horizontal: false,
                        //endingShape: 'rounded',
                        columnWidth: '25%',
                    },
                },
                markers: {
                    size: 2,
                    strokeWidth: 0
                },
                stroke: {
                    show: true,
                    lineCap: 'butt',
                    colors: undefined,
                    width: 3,
                    dashArray: 0,
                },
                legend: {
                    fontFamily: "'Source Sans Pro', Helvetica, Arial, sans-serif",
                    position: 'top',
                    labels: {
                        colors: ['#FFF'],
                        useSeriesColors: false
                    },
                    itemMargin: {
                        vertical: 10 // Actually horizontal margins.
                    },
                    onItemClick: {
                        toggleDataSeries: false
                    },
                }
            }
        }
    },
    mounted: function () {

        this.updateNetStats();
    },
    computed: {
        ...mapState({
            coinConfig: state => state.explorer.coinConfig,
            blockHeight: state => state.explorer.blockHeight,
            networkInfo: state => state.explorer.networkInfo,
            blocks: state => state.explorer.blocks,
        }),
        ...mapGetters({
            networkStats: 'explorer/networkStats',
            blockSummary: 'explorer/blockSummary',
            txPool: 'explorer/txPool'
        })
    },
    watch: {
        networkStats: 'updateNetStats'
    },
    methods: {
        updateNetStats () {

            if (!this.netChart) {

                this.netChart = new ApexCharts(document.getElementById("netChart"), this.netChartOptions);
                this.netChart.render();
            }

            this.netStats = this.networkStats.netStats;

            let chartData = this.networkStats.netChartData;
            this.netChartOptions.yaxis = chartData.yAxis;
            this.netChartOptions.series = chartData.series;
            this.netChart.updateOptions(this.netChartOptions, false);
        }
    }
};
</script>

<style scoped>
.net-stats {
    flex-direction: row;
    padding: 8px 0px 16px 0px;;
    flex-wrap: wrap;
}
.divider {
    width: 100%;
    margin: 4px 0px;
    height: 1px;
}
.stats {
    flex-grow: 0;
    flex-shrink: 0;
    padding: 4px 16px;
    flex-wrap: wrap;
    /*background-color: #2A2B30;*/
    width: 350px;
}
.stats-subheader {
    padding-top: 8px;
    color: #2EC4B6;
    font-size: 14px;
    font-weight: 600;
}
.stats-row {
    font-weight: 600;
    padding: 4px 0px;
}
.stats-row.height {
    align-items: baseline;
    padding: 4px 0px 0px 0px;
}
.label {
    font-size: 18px;
    color: #F2F2F2;
    font-weight: 400;
}
.label.height {
    font-size: 24px;
}
.value {
    font-size: 18px;
    padding-left: 32px;
}
.value.height {
    font-size: 26px;
    padding: 0px;
}
.total.sub {
    font-size: 1.8vw;
}
.chart-wrapper {
    display: flex;
    flex-grow: 1;
    flex-shrink: 0;
    box-sizing: border-box;
    width: calc(100% - 350px);
    min-width: 350px;
}
#netChart {
    width: 100%;
    max-width: 100%;
    display: inline-block;
    box-sizing: border-box;
    margin: 16px 32px;
}
@media all and (orientation:portrait) {

}
@media all and (max-width: 599px) {
    .total {

    }
    .label {
        display: inline-block;
    }
}
@media all and (min-width: 600px) {
    .total {

    }
    .label {

    }
}
@media all and (min-width: 1100px) {
    .total {

    }
    .label {

    }
}
@media all and (min-width: 1200px) {

}
@media all and (min-width: 1600px) {

}
@media all and (min-width: 1800px) {

}
@media all and (min-width: 2200px) {

}
</style>
