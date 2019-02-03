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
import Copyright from '@/components/Copyright';
import NavBar from '@/components/NavBar';

export default {
    name: 'App',
    components: {
        'copyright': Copyright,
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
    font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #4A4B50;
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
.back-dark {
    background-color: #292F36;
}
.text-light {
    color: #F5FAF5;
}
.color-accent {
    color: #2EC4B6;
}
.main-wrapper {
    width: 100%;
    display: flex;
    flex-grow: 1;
    overflow-y: scroll;
    justify-content: center;
    background-color: #F3F3F5;
}
.main-content {
    /*max-width: 1200px;*/
    width: 100%;
    display: flex;
    flex-grow: 1;
}
.container {
    max-width: 1200px;
    width: 100%;
    display: flex;
    flex-grow: 0;
    flex-shrink: 0;
}
.break-word {
    word-wrap: break-word;
}
.mono {
    font-family: 'Roboto Mono', monospace;
    font-size: 14px;
}
@media all and (orientation:portrait) {

}
@media all and (max-width: 599px) {

}
@media all and (min-width: 600px) {

}
@media all and (min-width: 1600px) {
    .container {
        max-width: 1400px;
    }
}
@media all and (min-width: 1800px) {
    .container {
        max-width: 1600px;
    }
}
@media all and (min-width: 2200px) {
    .container {
        max-width: 2000px;
    }
}
.spacer {
    flex-grow: 1;
    flex-shrink: 1;
}
.spacer.half {
    flex-grow: 0.5;
}
.flex {
    display: flex;
    flex-grow: 0;
    flex-shrink: 0;
    box-sizing: border-box;
}
.row {
    flex-direction: row;
    align-items: center;
}
.baseline {
    align-items: baseline;
}
.column {
    flex-direction: column;
}
.column.center {
    align-items: center;
}
.pb1 {
    padding-bottom: 4px;
}
.pb2 {
    padding-bottom: 8px;
}
.pb3 {
    padding-bottom: 16px;
}
.px3 {
    padding-left: 16px;
    padding-right: 16px;
}
.py3 {
    padding-top: 16px;
    padding-bottom: 16px;
}
.no-select {
    user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    -webkit-touch-callout: none;
    -o-user-select: none;
    -moz-user-select: none;
}
.section {
    display: flex;
    box-sizing: border-box;
    flex-grow: 0;
    flex-shrink: 0;
    margin-bottom: 16px;
    box-shadow: 0px 1px 3px rgba(102,102,102,0.4);
    background-color: #FEFEFE;
    -webkit-animation: fadein 0.5s; /* Safari, Chrome and Opera > 12.1 */
    -moz-animation: fadein 0.5s; /* Firefox < 16 */
    -ms-animation: fadein 0.5s; /* Internet Explorer */
    -o-animation: fadein 0.5s; /* Opera < 12.1 */
    animation: fadein 0.5s;
}
.section-header {
    padding: 8px 8px 8px 12px;
    display: flex;
    flex-direction: row;
    flex-grow: 0;
    flex-shrink: 0;
    box-sizing: border-box;
    align-items: center;
    color: #4A4B50;
}
.section-header span {
    padding: 8px;
    font-size: 18px;
}
.top-section {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-grow: 0;
    flex-shrink: 0;
    box-sizing: border-box;
    box-shadow: 1px 1px 3px rgba(102,102,102,0.5);
}
/* Animation stuff */
@keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Firefox < 16 */
@-moz-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Safari, Chrome and Opera > 12.1 */
@-webkit-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Internet Explorer */
@-ms-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Opera < 12.1 */
@-o-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}
</style>
