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
    <div id="app">
        <nav-bar/>
        <div class="main-wrapper">
            <div class="main-content">
                <router-view/>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import NavBar from '@/components/NavBar';

export default {
    name: 'App',
    components: {
        'nav-bar': NavBar
    },
    created () {
        this.activateBlockUpdates();
    },
    methods: {
        ...mapActions({
            activateBlockUpdates: 'explorer/activate'
        })
    }
}
</script>

<style>
#app {
    font-family: 'Muli', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
    background-color: #FEFEFE;
}
body {
    margin: 0px;
    padding: 0px;
}
.main-wrapper {
    width: 100%;
    display: flex;
    flex-grow: 1;
    overflow-y: scroll;
    justify-content: center;
    background-color: #F1F2F3;
}
.main-content {
    max-width: 1200px;
    width: 100%;
    display: flex;
    flex-grow: 1;
}
@media all and (orientation:portrait) {

}
@media all and (max-width: 599px) {

}
@media all and (min-width: 600px) {

}
@media all and (min-width: 1600px) {
    .main-content {
        max-width: 1400px;
    }
}
@media all and (min-width: 1800px) {
    .main-content {
        max-width: 1600px;
    }
}
@media all and (min-width: 2200px) {
    .main-content {
        max-width: 2000px;
    }
}
.row {
    flex-direction: row;
    align-items: center;
}
.column {
    flex-direction: column;
}
.no-select {
    user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    -webkit-touch-callout: none;
    -o-user-select: none;
    -moz-user-select: none;
}
</style>
