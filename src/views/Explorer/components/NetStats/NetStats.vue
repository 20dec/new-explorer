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
    <div class="flex column">
        <!-- Summary -->
        <div class="flex row totals">
            <div class="spacer"></div>
            <div class="flex column center total">
                <span>{{ blockHeight }}</span>
                <span class="label">Height</span>
            </div>
            <div class="spacer"></div>
            <div class="flex column center total">
                <span>{{ networkInfo.difficulty }}</span>
                <span class="label">Difficulty</span>
            </div>
            <div class="spacer"></div>
            <div class="flex column center total">
                <span>{{ networkInfo.hashrate }} H/s</span>
                <span class="label">Hashrate</span>
            </div>
            <div class="spacer"></div>
        </div>
        <!-- Diff/hash Chart -->
        <div id="netChart" style="width: 100%;"></div>
    </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex';

import ApexCharts from 'apexcharts';

export default {
    name: 'netStats',
    data () {
        return {
            netChartOptions: {
                chart: { height: 250, type: 'line' },
                yaxis: [
                    { title: { text: 'Difficulty' } },
                    { opposite: true, logarithmic: true, title: { text: 'Hashrate' } }
                ],
                series: [
                    { name: 'Difficulty', data: [] },
                    { name: 'Hashrate', data: [] }
                ],
                markers: {
                    strokeWidth: 5
                }
            }
        }
    },
    mounted: function () {

        this.netChart = new ApexCharts(document.getElementById("netChart"), this.netChartOptions);
        this.netChart.render();
    },
    computed: {
        ...mapState({
            blockHeight: state => state.explorer.blockHeight,
            networkInfo: state => state.explorer.networkInfo,
            blocks: state => state.explorer.blocks,
        }),
        ...mapGetters({
            netChartData: 'explorer/netChartData',
            blockSummary: 'explorer/blockSummary',
            txPool: 'explorer/txPool'
        })
    },
    watch: {
        netChartData: 'updateNetChart'
    },
    methods: {
        updateNetChart () {
            this.netChart.updateSeries(this.netChartData, true);
        }
    }
};
</script>

<style scoped>
.col {
    flex-shrink: 0;
}
.col.tx-amount {
    width: 150px;
}
.col.tx-fee {
    width: 120px;
}
.col.tx-size {
    width: 120px;
}
.col.tx-hash {
    min-width: 600px;
    flex-grow: 1;
}
.table-row {
    box-shadow: 0px -1px 0px rgba(153,153,153,0.3) inset;
    padding: 8px 16px;
    width: 100%;
    display: flex;
    flex-grow: 0;
    flex-shrink: 0;
    box-sizing: border-box;
    flex-direction: row;
    flex-wrap: wrap;
    color: #1A1B20;
}
.table-row.header {
    font-weight: 700;
    color: #2A2B30;
}
.label {
    font-size: 14px;
    color: #2A2B30;
    font-weight: 400;
}
.total {
    font-size: 24px;
    padding: 8px 8px;
    font-weight: 600;
    color: #2780E3;
}
.totals {
    padding: 0px 0px 16px 0px;
    flex-wrap: wrap;
}
@media all and (orientation:portrait) {

}
@media all and (max-width: 599px) {
    .total {
        font-weight: 600;
        font-size: 14px;
        padding: 8px 8px;
    }
    .label {
        font-size: 12px;
    }
}
@media all and (min-width: 600px) {

}
@media all and (min-width: 1200px) {
    .right {
        text-align: right !important;
    }
}
@media all and (min-width: 1600px) {

}
@media all and (min-width: 1800px) {

}
@media all and (min-width: 2200px) {

}
</style>