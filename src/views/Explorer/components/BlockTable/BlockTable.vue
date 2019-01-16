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
        <div class="table-row header">
            <span class="col height">Height</span>
            <span class="col timestamp">Date/Time</span>
            <span class="col block-hash">Block Hash</span>
            <span class="col block-size center">Size</span>
            <span class="col tx-count center">TXs</span>
            <span class="col difficulty center">Difficulty</span>

        </div>
        <div class="table-row" v-for="block in blocks">
            <span class="col height">{{ block.height }}</span>
            <span class="col timestamp">2019.01.12 05:45:33 PM</span>
            <span class="col block-hash link">
                <router-link :to="{ path: 'detail/' + block.hash }" class="detail-link">
                    {{ block.hash }}
                </router-link>
            </span>
            <span class="col block-size center">{{ block.cumul_size }}</span>
            <span class="col tx-count center">{{ block.tx_count }}</span>
            <span class="col difficulty center">{{ block.difficulty }}</span>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex';

export default {
    name: 'blockTable',
    data () {
        return {}
    },
    mounted: function () {
    },
    computed: {
        ...mapState({
            blocks: state => state.explorer.blocks
        }),
        ...mapGetters({

        })
    },
    methods: {
        ...mapActions({

        })
    }
};
</script>

<style scoped>
.col {
    flex-shrink: 0;
}
.col.height {
    width: 90px;
}
.col.timestamp {
    width: 140px;
}
.col.block-size {
    width: 80px;
}
.col.tx-count {
    width: 60px;
}
.col.difficulty {
    width: 100px;
}
.col.block-hash {
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
    font-weight: 600;
    color: #2A2B30;
}
.center {
    text-align: center;
}
.detail-link {
    color: #3DA1FC !important;
    text-decoration: none;
}
.detail-link:hover {
    text-decoration: underline;
}
@media all and (orientation:portrait) {

}
@media all and (max-width: 599px) {

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
