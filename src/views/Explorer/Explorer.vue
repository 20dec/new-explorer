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
    <div class="explorer">

        <!-- Network stats -->
        <div class="section column">
            <div class="header">
                <i class="fas fa-fw fa-server"></i>
                <span>Network Stats</span>
                <div class="spacer"></div>
                <div class="radio-group row">
                    <span
                        v-for="option in scanCounts"
                        :key="option"
                        class="radio no-select"
                        v-bind:class="{ 'checked': option == scanCount }"
                        @click="setScanCount(option)">
                        {{option}}
                    </span>
                </div>
            </div>

            <div style="height: 200px;">
                <span>Height: {{blockHeight}}</span>
            </div>
        </div>

        <!-- Transaction pool -->
        <div class="section column">
            <div class="header">
                <i class="fas fa-fw fa-exchange-alt"></i>
                <span>Transaction Pool</span>
                <div class="spacer"></div>
            </div>
            <div style="height: 200px;"></div>
        </div>

        <!-- Blocks -->
        <div class="section column">
            <div class="header">
                <i class="fas fa-fw fa-history"></i>
                <span>Blocks</span>
                <div class="spacer"></div>
            </div>
            <div style="height: 200px;"></div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex';
//import store from '@/store';

import Category from './components/Category';

export default {
    name: 'explorer',
    components: {
        //'category': Category
    },
    data () {
        return {}
    },
    mounted: function () {
    },
    computed: {
        ...mapState({
            scanCounts: state => state.explorer.scanCounts,
            scanCount: state => state.explorer.scanCount,
            blockHeight: state => state.explorer.blockHeight
        }),
        ...mapGetters({

        })
    },
    methods: {
        ...mapActions({
            setScanCount: 'explorer/setScanCount'
        })
    }
};
</script>

<style scoped>
.explorer {
    padding: 16px;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    flex-grow: 0;
    flex-shrink: 0;
    width: 100%;
}
.section {
    display: flex;
    box-sizing: border-box;
    flex-grow: 0;
    flex-shrink: 0;
    margin-bottom: 16px;
    box-shadow: 0px 1px 3px rgba(102,102,102,0.4);
    background-color: #FEFEFE;
}
.header {
    padding: 8px 8px 8px 12px;
    display: flex;
    flex-direction: row;
    flex-grow: 0;
    flex-shrink: 0;
    box-sizing: border-box;
    align-items: center;
    /*background-color: #F2F3F4;*/
    color: #2A2B30;
}
.label {
    padding: 0px 16px;
}
.header span {
    padding: 8px;
}
.spacer {
    flex-grow: 1;
    flex-shrink: 1;
}
.radio-group {
    font-weight: 600;
    display: flex;
    flex-grow: 0;
    flex-shrink: 0;
    box-sizing: border-box;
    color: #757780;
    box-shadow: 0px 0px 1px rgba(0,0,0,0.1) inset;
}
.radio {
    padding: 8px 12px;
    cursor: pointer;
    box-shadow: 0px 0px 1px rgba(0,0,0,0.1) inset;
}
.checked {
    color: #2A2B30;
    cursor: default !important;
}
</style>
