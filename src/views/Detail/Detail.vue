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
    <div class="detail-page">

    </div>
</template>

<script>
    export default {
        name: 'detail',
        props: {
            param: undefined
        },
        data () {
            return {
                scrollPosition: 0
            }
        },
        mounted: function () {

            console.log('param', this.param);
        },
        computed: {
            isScrolled () {

                return 5;
            }
        }
    };
</script>

<style scoped>
.detail-page {
    padding: 16px;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    flex-shrink: 0;
    box-sizing: border-box;
}
</style>
