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
    <div class="category">
        <div class="header">
            <i class="fas fa-fw" v-bind:class="icon"></i>
            <span>{{title}}</span>
        </div>
        <div style="height: 200px;"></div>
    </div>
</template>

<script>
export default {
    name: 'category',
    props: {
        title: String,
        icon: String
    },
    data () {
        return {}
    },
    mounted: function () {
    },
    computed: {
    },
    methods: {
    }
};
</script>

<style scoped>
.category {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    flex-grow: 0;
    flex-shrink: 0;
    margin-bottom: 16px;
    box-shadow: 0px 1px 3px rgba(102,102,102,0.4);
}
.header {
    padding: 12px;
    display: flex;
    flex-direction: row;
    flex-grow: 0;
    flex-shrink: 0;
    box-sizing: border-box;
    align-items: center;
    background-color: #F2F3F4;
    color: #2A2B30;
}
.header span {
    padding-left: 8px;
}
</style>
