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
    <div class="flex column search">
        <div class="search-wrapper container">

            <input type="text"
                class="search-input"
                v-model="searchTerm"
                placeholder="search"
                v-on:keyup.enter="doSearch()"
                ref="search"/>

            <i v-on:click="clearSearch()"
                v-if="searchTerm != ''"
                class="fas fa-times-circle search-clear">
            </i>

            <div class="search-button" v-on:click="doSearch()">
                <i class="fas fa-search input-icon"></i>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'search',
    data () {
        return {
            searchTerm: ''
        }
    },
    mounted: function () {

    },
    methods: {
        clearSearch () {

            this.searchTerm = '';
        },
        doSearch () {

            if (this.searchTerm == '') {
                return;
            }

            let searchTerm = this.searchTerm.trim();
            this.searchTerm = '';
            this.$router.push({ name: 'detail', params: { param: searchTerm } });
        }
    }
};
</script>

<style scoped>
.search {
    width: 100vw;
    background: linear-gradient(to bottom, #292F36 50%, rgba(0,0,0,0) 50%);
    margin-bottom: 32px;
    padding: 8px 0px;
    align-items: center;
}
.search-wrapper {
    width: 90%;
    max-width: 800px;
    background-color: #FFF;
    box-shadow: 1px 1px 3px rgba(0,0,0,0.5);
    align-items: center;
    border-radius: 24px;
    padding-left: 16px;
}
.search-input {
    font-size: 18px;
    font-weight: 400;
    border: 0px;
    outline: none;
    padding: 12px;
    width: 100%;
}
.search-button {
    color: #28BBDB;
    font-size: 24px;
    padding: 8px 16px 8px 16px;
    border-radius: 24px;
}
.search-button:hover {
    color: #2EC4B6;
    cursor: pointer;
}
.search-clear {
    padding: 8px;
    font-size: 18px;
}
.search-clear:hover {
    color: #000;
}
</style>
