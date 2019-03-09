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
    <div class="nav-bar back-dark">
        <div class="nav-content">
            <!-- App logo -->
            <router-link to="/ex2/ex2.html#check_txn" class="nav-link text-light" exact>
                <div class="link-wrapper">
                    <i class="fas fa-fw fa-question nav-icon"></i>
                    <span class="nav-text">Check TX</span>
            <a href="https://getamitycoin.org"><img class="site-logo"
                src="@/assets/logo.png"></a>
            <!-- Links -->
            <span class="app-title"></span>
            <router-link to="/" class="nav-link text-light" exact>
                <div class="link-wrapper">
                    <i class="fas fa-fw fa-cube nav-icon"></i>
                    <span class="nav-text">Explorer</span>
                </div>
            </router-link>
            <router-link to="/paperWallet" class="nav-link text-light" exact>
                <div class="link-wrapper">
                    <i class="fas fa-fw fa-wallet nav-icon"></i>
                    <span class="nav-text">Paper Wallet</span>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'nav-bar',
    data () {
        return {
            scrollPosition: 0
        }
    },
    mounted: function () {

        this.scrollPosition = 0;
        window.onscroll = this.onScroll;
    },
    computed: {
        isScrolled () {

            return this.scrollPosition > 64;
        }
    },
    methods: {
        onScroll () {

            this.scrollPosition = window.scrollY;
        }
    }
};
</script>

<style scoped>
.nav-bar {
    display: flex;
    flex-direction: row;
    flex-shrink: 0;
    flex-grow: 0;
    align-items: stretch;
    justify-content: center;
    box-sizing: border-box;
    /*box-shadow: 0px -1px 1px rgba(102,102,102,0.2) inset;*/
}
.nav-content {
    max-width: 1200px;
    display: flex;
    flex-shrink: 0;
    flex-grow: 1;
    flex-direction: row;
    padding: 16px 16px;
    align-items: center;
    box-sizing: border-box;
}
.app-title {
    flex: 1;
    font-size: 20px;
    color: #FFFBFC;
    font-weight: 500;
}
.site-logo {
    height: 32px;
    width: auto;
    margin: 0px;
}
.nav-icon {
    margin-right: 6px;
    font-size: 16px;
}
.nav-link {
    font-size: 16px;
    font-weight: 600;
    text-decoration: none;
    text-align: center;
    padding: 8px;
    height: 100%;
}
.nav-link:hover {
    color: #D5DAD5;
}
.router-link-active, .router-link-exact-active {
    cursor: default !important;
    color: #2EC4B6;
}
.router-link-active:hover, .router-link-exact-active:hover {
    color: #2EC4B6;
}
.link-wrapper {
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    flex-grow: 0;
    flex-shrink: 0;
}
@media all and (orientation:portrait) {

}
@media all and (max-width: 599px) {
    .site-logo {
        height: 28px;
        width: auto;
        margin: 0px;
    }
    .nav-icon {
        display: none;
    }
}
@media all and (min-width: 600px) {

}
@media all and (min-width: 1600px) {
    .nav-content {
        max-width: 1400px;
    }
}
@media all and (min-width: 1800px) {
    .nav-content {
        max-width: 1600px;
    }
}
@media all and (min-width: 2200px) {
    .nav-content {
        max-width: 2000px;
    }
}
</style>
