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
    <div class="copyright">
        <span>Copyright © 2018 Xi Development Team.</span>
    </div>
</template>

<script>
export default {
    name: 'copyright'
};
</script>

<style scoped>
.copyright {
    display: flex;
    flex-direction: row;
    flex-shrink: 0;
    flex-grow: 0;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    padding: 16px 0px;
    width: 100%;
    color: #3C4F5E;
    /*box-shadow: 0px -1px 1px rgba(102,102,102,0.2) inset;*/
}
</style>
