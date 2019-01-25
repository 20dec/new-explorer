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
    <div class="not-found back-dark">
        <span class="not-found-message">404</span>
    </div>
</template>

<script>
import NotFoundImage from '@/assets/not-found.png';

export default {
    name: 'notFound',
    data () {
        return {
            notFoundImage: NotFoundImage
        }
    },
    mounted: function () {

    },
    methods: {
        generate () {

        }
    }
};
</script>

<style scoped>
.not-found {
    display: flex;
    flex-grow: 1;
    flex-shrink: 0;
    box-sizing: border-box;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.not-found-message {
    font-size: 16vw;
    padding-bottom: 64px;
    font-weight: 600;
    color: #C9CAC9;
    user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    -webkit-touch-callout: none;
    -o-user-select: none;
    -moz-user-select: none;
}
</style>
