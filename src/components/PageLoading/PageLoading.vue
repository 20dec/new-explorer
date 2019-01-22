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
    <div class="page-loading">
        <orbit-spinner
            :animation-duration="1200"
            :size="65"
            color="#7A7D7D"
        />
    </div>
</template>

<script>
import { OrbitSpinner } from 'epic-spinners';

export default {
    name: 'page-loading',
    components: {
        'orbit-spinner': OrbitSpinner
    }
};
</script>

<style scoped>
.page-loading {
    display: flex;
    flex-grow: 1;
    flex-shrink: 0;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    -webkit-animation: fadein 0.3s; /* Safari, Chrome and Opera > 12.1 */
    -moz-animation: fadein 0.3s; /* Firefox < 16 */
    -ms-animation: fadein 0.3s; /* Internet Explorer */
    -o-animation: fadein 0.3s; /* Opera < 12.1 */
    animation: fadein 0.3s;
}

.loading-message {
    font-size: 18px;
    padding-top: 16px;
}
</style>
